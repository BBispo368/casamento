// Confirmação de presença: grava direto no Cloud Firestore (Firebase).
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import { getFirestore, collection, addDoc, serverTimestamp, connectFirestoreEmulator }
    from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';

const MAX_PESSOAS = 10;
const CHAVE_LOCAL = 'rsvp-enviado';

const form = document.getElementById('rsvp-form');
const detalhes = document.getElementById('rsvp-detalhes');
const saidaPessoas = document.getElementById('rsvp-pessoas');
const acompanhantesDiv = document.getElementById('rsvp-acompanhantes');
const erro = document.getElementById('rsvp-erro');
const botaoEnviar = document.getElementById('rsvp-enviar');
const sucesso = document.getElementById('rsvp-sucesso');

let pessoas = 1;

const config = window.FIREBASE_CONFIG || {};
const configurado = config.projectId && !String(config.projectId).includes('COLE_AQUI');
let db = null;
if (configurado) {
    db = getFirestore(initializeApp(config));
    if (window.FIREBASE_EMULATOR) connectFirestoreEmulator(db, '127.0.0.1', 8080);
}

function mostrarErro(texto) {
    erro.textContent = texto;
    erro.hidden = !texto;
}

const vaiSelecionado = () => form.querySelector('input[name="vai"]:checked')?.value;

// --- Campos dinâmicos ---
function atualizarAcompanhantes() {
    saidaPessoas.textContent = pessoas;
    form.querySelector('[data-delta="-1"]').disabled = pessoas <= 1;
    form.querySelector('[data-delta="1"]').disabled = pessoas >= MAX_PESSOAS;

    const valores = [...acompanhantesDiv.querySelectorAll('input')].map(i => i.value);
    acompanhantesDiv.innerHTML = '';
    for (let i = 0; i < pessoas - 1; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-input guest-name-input';
        input.maxLength = 80;
        input.placeholder = `Nome do ${i + 1}º acompanhante`;
        input.setAttribute('aria-label', `Nome do ${i + 1}º acompanhante`);
        input.value = valores[i] || '';
        acompanhantesDiv.appendChild(input);
    }
}

form.querySelectorAll('input[name="vai"]').forEach(radio => {
    radio.addEventListener('change', () => {
        detalhes.hidden = vaiSelecionado() !== 'sim';
        mostrarErro('');
    });
});

form.addEventListener('input', () => { if (!erro.hidden) mostrarErro(''); });

form.querySelectorAll('.stepper-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        pessoas = Math.min(MAX_PESSOAS, Math.max(1, pessoas + Number(btn.dataset.delta)));
        atualizarAcompanhantes();
        const ultimo = acompanhantesDiv.querySelector('input:last-of-type');
        if (Number(btn.dataset.delta) > 0 && ultimo) ultimo.focus();
    });
});

// --- Envio ---
function mostrarSucesso(vai, nome) {
    const primeiroNome = nome.split(' ')[0];
    sucesso.querySelector('.rsvp-sucesso-emoji').textContent = vai ? '🎉' : '💙';
    document.getElementById('rsvp-sucesso-titulo').textContent = vai
        ? `Oba, ${primeiroNome}! Presença confirmada.`
        : `Obrigado por avisar, ${primeiroNome}.`;
    document.getElementById('rsvp-sucesso-texto').textContent = vai
        ? 'Mal podemos esperar para celebrar com você em 06/03/2027!'
        : 'Vamos sentir sua falta! Obrigado pelo carinho.';
    form.hidden = true;
    sucesso.hidden = false;
}

form.addEventListener('submit', async event => {
    event.preventDefault();
    mostrarErro('');

    const vai = vaiSelecionado();
    const nome = document.getElementById('rsvp-nome').value.trim().replace(/\s+/g, ' ');
    const telefone = document.getElementById('rsvp-telefone').value.trim();
    const mensagem = document.getElementById('rsvp-msg').value.trim();
    const acompanhantes = vai === 'sim'
        ? [...acompanhantesDiv.querySelectorAll('input')].map(i => i.value.trim().replace(/\s+/g, ' '))
        : [];

    if (!vai) return mostrarErro('Conte para a gente se você vai ou não. 😊');
    if (nome.length < 2) {
        document.getElementById('rsvp-nome').focus();
        return mostrarErro('Preencha seu nome completo.');
    }
    const vazio = acompanhantes.findIndex(n => n.length < 2);
    if (vazio >= 0) {
        acompanhantesDiv.querySelectorAll('input')[vazio].focus();
        return mostrarErro('Preencha o nome de todos os acompanhantes.');
    }
    if (!db) return mostrarErro('A confirmação ainda não está disponível. Tente novamente mais tarde.');

    const dados = {
        nome,
        vai: vai === 'sim',
        pessoas: vai === 'sim' ? pessoas : 0,
        acompanhantes,
        criadoEm: serverTimestamp()
    };
    if (telefone) dados.telefone = telefone;
    if (mensagem) dados.mensagem = mensagem;

    botaoEnviar.disabled = true;
    botaoEnviar.textContent = 'Enviando...';
    try {
        await addDoc(collection(db, 'confirmacoes'), dados);
        try { localStorage.setItem(CHAVE_LOCAL, JSON.stringify({ nome, vai: dados.vai })); } catch {}
        mostrarSucesso(dados.vai, nome);
    } catch (e) {
        console.error('Erro ao confirmar presença:', e);
        mostrarErro('Não conseguimos enviar agora. Verifique sua internet e tente de novo.');
    } finally {
        botaoEnviar.disabled = false;
        botaoEnviar.textContent = 'Enviar confirmação';
    }
});

document.getElementById('rsvp-nova').addEventListener('click', () => {
    try { localStorage.removeItem(CHAVE_LOCAL); } catch {}
    form.reset();
    pessoas = 1;
    atualizarAcompanhantes();
    detalhes.hidden = true;
    sucesso.hidden = true;
    form.hidden = false;
    document.getElementById('rsvp-nome').focus();
});

// Quem já confirmou neste aparelho vê a mensagem de agradecimento
try {
    const anterior = JSON.parse(localStorage.getItem(CHAVE_LOCAL) || 'null');
    if (anterior && anterior.nome) mostrarSucesso(anterior.vai, anterior.nome);
} catch {}

atualizarAcompanhantes();
