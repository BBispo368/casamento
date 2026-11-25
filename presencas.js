// Painel dos noivos: lista as confirmações em tempo real.
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, onAuthStateChanged, signOut, connectAuthEmulator }
    from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
import { getFirestore, collection, query, orderBy, onSnapshot, doc, getDoc, deleteDoc, connectFirestoreEmulator }
    from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const $ = id => document.getElementById(id);
const telas = ['tela-login', 'tela-sem-acesso', 'tela-config', 'painel'];
const mostrar = id => telas.forEach(t => { $(t).hidden = t !== id; });

let toastTimer;
function aviso(texto) {
    $('toast').textContent = texto;
    $('toast').classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $('toast').classList.remove('show'), 2600);
}

const config = window.FIREBASE_CONFIG || {};
if (!config.projectId || String(config.projectId).includes('COLE_AQUI')) {
    mostrar('tela-config');
    throw new Error('Firebase não configurado');
}

const app = initializeApp(config);
const auth = getAuth(app);
const db = getFirestore(app);
if (window.FIREBASE_EMULATOR) {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
}

let confirmacoes = [];
let filtro = 'todos';
let pararLista = null;

$('entrar').addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
        await signInWithPopup(auth, provider);
    } catch (e) {
        if (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment') {
            await signInWithRedirect(auth, provider);
        } else if (e.code !== 'auth/popup-closed-by-user') {
            console.error(e);
            aviso('Não foi possível entrar. Tente de novo.');
        }
    }
});
$('sair').addEventListener('click', () => signOut(auth));
$('copiar-uid').addEventListener('click', () => {
    navigator.clipboard?.writeText($('conta-uid').value).then(() => aviso('Código copiado!'));
});

onAuthStateChanged(auth, async usuario => {
    if (pararLista) { pararLista(); pararLista = null; }
    $('sair').hidden = !usuario;
    if (!usuario) return mostrar('tela-login');

    let admin = false;
    try { admin = (await getDoc(doc(db, 'admins', usuario.uid))).exists(); } catch (e) { console.error(e); }
    if (!admin) {
        $('conta-email').textContent = usuario.email || 'sem e-mail';
        $('conta-uid').value = usuario.uid;
        return mostrar('tela-sem-acesso');
    }

    mostrar('painel');
    pararLista = onSnapshot(query(collection(db, 'confirmacoes'), orderBy('criadoEm', 'desc')), snap => {
        confirmacoes = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        renderizar();
    }, e => {
        console.error(e);
        aviso('Erro ao carregar as confirmações.');
    });
});

// --- Lista ---
const normalizar = t => (t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const dataBR = ts => ts?.toDate ? ts.toDate().toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }) : '';
const linkWhats = tel => {
    let n = tel.replace(/\D/g, '');
    if (n.length <= 11) n = '55' + n;
    return `https://wa.me/${n}`;
};

function filtradas() {
    const busca = normalizar($('busca').value.trim());
    return confirmacoes.filter(c =>
        (filtro === 'todos' || (filtro === 'sim') === c.vai) &&
        (!busca || normalizar([c.nome, ...(c.acompanhantes || [])].join(' ')).includes(busca)));
}

function renderizar() {
    const sim = confirmacoes.filter(c => c.vai);
    $('st-pessoas').textContent = sim.reduce((t, c) => t + (c.pessoas || 0), 0);
    $('st-sim').textContent = sim.length;
    $('st-nao').textContent = confirmacoes.length - sim.length;

    const itens = filtradas();
    const lista = $('lista');
    lista.innerHTML = '';
    $('lista-vazia').hidden = itens.length > 0;

    itens.forEach(c => {
        const card = document.createElement('article');
        card.className = 'admin-item ' + (c.vai ? 'vai' : 'nao-vai');
        card.innerHTML = `
            <div class="admin-item-top">
                <div>
                    <h3></h3>
                    <span class="badge"></span>
                </div>
                <time></time>
            </div>
            <ul class="admin-acomp"></ul>
            <p class="admin-msg"></p>
            <div class="admin-actions"></div>
        `;
        card.querySelector('h3').textContent = c.nome;
        card.querySelector('.badge').textContent = c.vai ? `🎉 Vai · ${c.pessoas} pessoa${c.pessoas > 1 ? 's' : ''}` : '😢 Não vai';
        card.querySelector('time').textContent = dataBR(c.criadoEm);

        const ul = card.querySelector('.admin-acomp');
        (c.acompanhantes || []).forEach(n => { const li = document.createElement('li'); li.textContent = n; ul.appendChild(li); });
        if (!ul.children.length) ul.remove();

        const msg = card.querySelector('.admin-msg');
        if (c.mensagem) msg.textContent = `“${c.mensagem}”`; else msg.remove();

        const acoes = card.querySelector('.admin-actions');
        if (c.telefone) {
            const a = document.createElement('a');
            a.href = linkWhats(c.telefone);
            a.target = '_blank';
            a.rel = 'noopener';
            a.className = 'btn-link';
            a.textContent = `💬 ${c.telefone}`;
            acoes.appendChild(a);
        }
        const apagar = document.createElement('button');
        apagar.type = 'button';
        apagar.className = 'btn-link btn-danger';
        apagar.textContent = 'Apagar';
        apagar.addEventListener('click', async () => {
            if (!confirm(`Apagar a confirmação de ${c.nome}? (use para respostas duplicadas)`)) return;
            try { await deleteDoc(doc(db, 'confirmacoes', c.id)); aviso('Confirmação apagada.'); }
            catch (e) { console.error(e); aviso('Não foi possível apagar.'); }
        });
        acoes.appendChild(apagar);
        lista.appendChild(card);
    });
}

$('busca').addEventListener('input', renderizar);
document.querySelectorAll('[data-filtro]').forEach(chip => chip.addEventListener('click', () => {
    filtro = chip.dataset.filtro;
    document.querySelectorAll('[data-filtro]').forEach(c => c.classList.toggle('active', c === chip));
    renderizar();
}));

// --- Exportar CSV (abre no Excel / Google Planilhas) ---
$('exportar').addEventListener('click', () => {
    const celula = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
    const linhas = [['Nome', 'Vai?', 'Pessoas', 'Acompanhantes', 'WhatsApp', 'Recado', 'Data']]
        .concat(confirmacoes.map(c => [c.nome, c.vai ? 'Sim' : 'Não', c.pessoas, (c.acompanhantes || []).join(', '),
            c.telefone || '', c.mensagem || '', dataBR(c.criadoEm)]));
    const csv = '﻿' + linhas.map(l => l.map(celula).join(';')).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: 'confirmacoes-casamento.csv' });
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
});
