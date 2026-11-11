// =====================================================
//  Casamento Breno & Livia
//  (a lista de presentes fica em presentes.js)
// =====================================================

const formatarPreco = valor => valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// --- AVISO RÁPIDO (TOAST) ---
let toastTimer;
function mostrarAviso(texto) {
    const toast = document.getElementById('toast');
    toast.textContent = texto;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

// --- NAVBAR: esconde ao rolar para baixo, mostra ao rolar para cima ---
(function iniciarNavbar() {
    const navbar = document.getElementById('navbar');
    let ultimoScroll = window.scrollY;
    window.addEventListener('scroll', () => {
        const atual = window.scrollY;
        navbar.classList.toggle('scrolled', atual > 40);
        const esconder = atual > ultimoScroll && atual > 300;
        navbar.classList.toggle('nav-hidden', esconder);
        document.body.classList.toggle('nav-is-hidden', esconder);
        ultimoScroll = atual;
    }, { passive: true });
})();

// --- CARROSSEL ---
(function iniciarCarrossel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.getElementById('carousel-dots');
    if (!slides.length) return;

    let atual = 0;
    let timer;

    // Carrega a imagem de um slide só quando ele for necessário
    const carregar = i => {
        const slide = slides[i];
        if (slide && slide.dataset.bg && !slide.style.backgroundImage) {
            slide.style.backgroundImage = `url('${slide.dataset.bg}')`;
        }
    };

    const dots = Array.from(slides).map((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Foto ${i + 1}`);
        dot.addEventListener('click', () => { irPara(i); reiniciar(); });
        dotsContainer.appendChild(dot);
        return dot;
    });

    // No celular, o texto vai para o topo ou para a base conforme onde o casal está na foto
    const overlay = document.getElementById('hero-overlay');
    const celular = window.matchMedia('(max-width: 768px)');
    let trocaTexto;
    function posicionarTexto(slide, animar) {
        const noTopo = slide.dataset.text === 'top';
        if (overlay.classList.contains('text-top') === noTopo) return;
        clearTimeout(trocaTexto);
        if (!animar || !celular.matches || reduzMovimento) {
            overlay.classList.toggle('text-top', noTopo);
            return;
        }
        overlay.classList.add('text-swap');
        trocaTexto = setTimeout(() => {
            overlay.classList.toggle('text-top', noTopo);
            overlay.classList.remove('text-swap');
        }, 450);
    }

    function irPara(i) {
        slides[atual].classList.remove('active');
        dots[atual].classList.remove('active');
        atual = (i + slides.length) % slides.length;
        carregar(atual);
        carregar((atual + 1) % slides.length); // já deixa a próxima pronta
        slides[atual].classList.add('active');
        dots[atual].classList.add('active');
        posicionarTexto(slides[atual], true);
    }

    function reiniciar() {
        clearInterval(timer);
        timer = setInterval(() => irPara(atual + 1), 5000);
    }

    // Deslizar o dedo para trocar de foto no celular
    let toqueX = null;
    const container = document.querySelector('.carousel-container');
    container.addEventListener('touchstart', e => { toqueX = e.touches[0].clientX; }, { passive: true });
    container.addEventListener('touchend', e => {
        if (toqueX === null) return;
        const dx = e.changedTouches[0].clientX - toqueX;
        if (Math.abs(dx) > 50) { irPara(atual + (dx < 0 ? 1 : -1)); reiniciar(); }
        toqueX = null;
    }, { passive: true });

    // Pausa quando a aba não está visível (economiza bateria)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) clearInterval(timer); else reiniciar();
    });

    carregar(0);
    carregar(1);
    posicionarTexto(slides[0], false);
    reiniciar();
})();

// --- CONTAGEM REGRESSIVA ---
const dataCasamento = new Date('2027-03-06T16:00:00-03:00').getTime();
let contagemTimer;

function atualizarContagem() {
    const distancia = dataCasamento - Date.now();
    const titulo = document.getElementById('countdown-title');
    const timer = document.getElementById('countdown-timer');

    if (distancia <= 0) {
        const diasDepois = Math.floor(-distancia / 86400000);
        titulo.textContent = diasDepois === 0 ? 'É hoje! 💍' : 'Obrigado por celebrar conosco! 💙';
        timer.hidden = true;
        clearInterval(contagemTimer);
        return;
    }

    const valores = {
        days: Math.floor(distancia / 86400000),
        hours: Math.floor((distancia % 86400000) / 3600000),
        minutes: Math.floor((distancia % 3600000) / 60000),
        seconds: Math.floor((distancia % 60000) / 1000)
    };
    for (const [id, valor] of Object.entries(valores)) {
        document.getElementById(id).textContent = String(valor).padStart(2, '0');
    }
}

// --- ANIMAÇÃO AO APARECER NA TELA ---
function iniciarRevelacao() {
    const elementos = document.querySelectorAll('.reveal');
    if (reduzMovimento || !('IntersectionObserver' in window)) {
        elementos.forEach(el => el.classList.add('visible'));
        return;
    }
    const observer = new IntersectionObserver(entradas => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
                observer.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.12 });
    elementos.forEach(el => observer.observe(el));
}

// --- CONFIGURAÇÕES DO PIX ---
const chavePix = '08709906673';
// O padrão do PIX aceita no máximo 25 caracteres no nome e 15 na cidade
const nomeBeneficiario = 'Breno Pereira dos S Bispo';
const cidadeBeneficiario = 'Bom Despacho';

// --- LISTA DE PRESENTES E CARRINHO ---
let carrinho = [];

function criarCardPresente(presente) {
    const card = document.createElement('div');
    card.className = 'gift-item';
    card.dataset.id = presente.id;
    card.innerHTML = `
        <img src="${presente.img}" alt="" loading="lazy" decoding="async" width="260" height="180">
        <h3></h3>
        <p class="gift-price">R$ ${formatarPreco(presente.preco)}</p>
        <button type="button" class="add-to-cart-btn">Adicionar ao carrinho</button>
    `;
    card.querySelector('h3').textContent = presente.nome;
    card.querySelector('img').alt = presente.nome;
    card.querySelector('button').addEventListener('click', () => adicionarAoCarrinho(presente.id));
    return card;
}

// Monta os cards uma única vez; depois só reordena/filtra
const cardsPresentes = new Map();
function montarPresentes() {
    const lista = document.getElementById('gift-list');
    const fragmento = document.createDocumentFragment();
    presentes.forEach(p => {
        const card = criarCardPresente(p);
        cardsPresentes.set(p.id, card);
        fragmento.appendChild(card);
    });
    lista.appendChild(fragmento);
    aplicarFiltro();
}

const normalizar = texto => texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const POR_PAGINA = 12;
let limiteVisivel = POR_PAGINA;
let categoriaAtual = 'todos';

function aplicarFiltro(resetarLimite = true) {
    if (resetarLimite) limiteVisivel = POR_PAGINA;
    const busca = normalizar(document.getElementById('gift-search').value.trim());
    const ordem = document.getElementById('gift-sort').value;
    const lista = document.getElementById('gift-list');

    let itens = [...presentes];
    if (ordem === 'menor') itens.sort((a, b) => a.preco - b.preco);
    else if (ordem === 'maior') itens.sort((a, b) => b.preco - a.preco);
    else itens.sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' }));

    let encontrados = 0;
    const fragmento = document.createDocumentFragment();
    itens.forEach(p => {
        const card = cardsPresentes.get(p.id);
        const combina = (categoriaAtual === 'todos' || p.categoria === categoriaAtual)
            && (!busca || normalizar(p.nome).includes(busca));
        if (combina) encontrados++;
        card.hidden = !combina || encontrados > limiteVisivel;
        fragmento.appendChild(card);
    });
    lista.appendChild(fragmento);

    document.getElementById('gift-empty').hidden = encontrados > 0;
    const botaoMais = document.getElementById('gift-more');
    const restantes = encontrados - limiteVisivel;
    botaoMais.hidden = restantes <= 0;
    botaoMais.textContent = `Ver mais presentes (${restantes})`;
}

function mostrarMais() {
    limiteVisivel += POR_PAGINA;
    aplicarFiltro(false);
}

function escolherCategoria(botao) {
    categoriaAtual = botao.dataset.cat;
    document.querySelectorAll('.gift-categories .chip').forEach(chip => {
        const ativo = chip === botao;
        chip.classList.toggle('active', ativo);
        chip.setAttribute('aria-selected', ativo);
    });
    botao.scrollIntoView({ behavior: reduzMovimento ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
    aplicarFiltro();
}

function atualizarBotao(id) {
    const card = cardsPresentes.get(id);
    if (!card) return;
    const btn = card.querySelector('button');
    const noCarrinho = carrinho.some(item => item.id === id);
    btn.disabled = noCarrinho;
    btn.textContent = noCarrinho ? 'No carrinho ✓' : 'Adicionar ao carrinho';
    card.classList.toggle('in-cart', noCarrinho);
}

function adicionarAoCarrinho(id) {
    const presente = presentes.find(p => p.id === id);
    if (!presente || carrinho.some(item => item.id === id)) return;
    carrinho.push(presente);
    atualizarBotao(id);
    renderizarCarrinho();
    mostrarAviso('🎁 Adicionado ao carrinho!');
    animarBarra();
}

function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    atualizarBotao(id);
    renderizarCarrinho();
}

function limparCarrinho() {
    const ids = carrinho.map(item => item.id);
    carrinho = [];
    ids.forEach(atualizarBotao);
    renderizarCarrinho();
}

const totalCarrinho = () => carrinho.reduce((acc, item) => acc + item.preco, 0);

function renderizarCarrinho() {
    const itensDiv = document.getElementById('cart-items');
    const totalDiv = document.getElementById('cart-total');
    const form = document.getElementById('checkout-form');

    itensDiv.innerHTML = '';
    if (carrinho.length === 0) {
        itensDiv.innerHTML = '<p class="cart-empty">Seu carrinho está vazio.</p>';
        totalDiv.textContent = '';
        form.hidden = true;
    } else {
        carrinho.forEach(item => {
            const linha = document.createElement('div');
            linha.className = 'cart-item';
            linha.innerHTML = `
                <span class="cart-item-name"></span>
                <strong class="cart-item-price">R$ ${formatarPreco(item.preco)}</strong>
                <button type="button" class="cart-remove" aria-label="Remover">&times;</button>
            `;
            linha.querySelector('.cart-item-name').textContent = item.nome;
            linha.querySelector('.cart-remove').setAttribute('aria-label', `Remover ${item.nome}`);
            linha.querySelector('.cart-remove').addEventListener('click', () => removerDoCarrinho(item.id));
            itensDiv.appendChild(linha);
        });
        totalDiv.textContent = `Total: R$ ${formatarPreco(totalCarrinho())}`;
        form.hidden = false;
    }
    atualizarBarraCarrinho();
}

// --- BARRA FLUTUANTE DO CARRINHO (CELULAR) ---
let carrinhoVisivel = false;

function atualizarBarraCarrinho() {
    const barra = document.getElementById('cart-bar');
    document.getElementById('cart-bar-count').textContent = carrinho.length;
    document.getElementById('cart-bar-total').textContent = `R$ ${formatarPreco(totalCarrinho())}`;
    barra.classList.toggle('show', carrinho.length > 0 && !carrinhoVisivel);
}

function animarBarra() {
    const barra = document.getElementById('cart-bar');
    barra.classList.remove('bump');
    void barra.offsetWidth; // reinicia a animação
    barra.classList.add('bump');
}

function iniciarBarraCarrinho() {
    const cart = document.getElementById('cart');
    document.getElementById('cart-bar').addEventListener('click', () => {
        cart.scrollIntoView({ behavior: reduzMovimento ? 'auto' : 'smooth', block: 'start' });
    });
    if ('IntersectionObserver' in window) {
        new IntersectionObserver(([entrada]) => {
            carrinhoVisivel = entrada.isIntersecting;
            atualizarBarraCarrinho();
        }, { threshold: 0.15 }).observe(cart);
    }
}

// --- PIX ---
function finalizarCompra() {
    const total = totalCarrinho();
    if (total <= 0) {
        mostrarAviso('Seu carrinho está vazio!');
        return;
    }

    const nomeInput = document.getElementById('buyer-name');
    const nome = nomeInput.value.trim();
    const msg = document.getElementById('buyer-msg').value.trim();

    if (!nome) {
        nomeInput.classList.add('input-error');
        nomeInput.focus();
        mostrarAviso('Preencha seu nome para sabermos de quem é o presente! 😉');
        return;
    }
    nomeInput.classList.remove('input-error');

    if (typeof qrcode === 'undefined') {
        mostrarAviso('Não foi possível gerar o QR Code. Verifique sua internet e tente de novo.');
        return;
    }

    let descricao = nome + (msg ? ` - ${msg}` : '');
    // Remove acentos e emojis para evitar erro de formatação no PIX
    descricao = descricao.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-zA-Z0-9\s.,-]/g, '').trim().substring(0, 60);

    gerarQrCodePix(total.toFixed(2), descricao);
    document.getElementById('pix-valor').textContent = formatarPreco(total);
    abrirModal();
}

function abrirModal() {
    document.getElementById('toast').classList.remove('show');
    const modal = document.getElementById('pix-modal');
    modal.hidden = false;
    requestAnimationFrame(() => modal.classList.add('open'));
    document.body.classList.add('no-scroll');
    document.getElementById('close-modal').focus();
}

function fecharModal() {
    const modal = document.getElementById('pix-modal');
    modal.classList.remove('open');
    document.body.classList.remove('no-scroll');
    setTimeout(() => {
        modal.hidden = true;
        document.getElementById('qrcode').innerHTML = '';
    }, 250);
}

function confirmarPagamento() {
    fecharModal();
    limparCarrinho();
    document.getElementById('buyer-name').value = '';
    document.getElementById('buyer-msg').value = '';
    mostrarAviso('Muito obrigado pelo presente! 💙');
}

function crc16(data) {
    let crc = 0xFFFF;
    for (let i = 0; i < data.length; i++) {
        crc ^= data.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            crc = (crc & 0x8000) ? (crc << 1) ^ 0x1021 : crc << 1;
        }
    }
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
}

const campo = (id, valor) => id + String(valor.length).padStart(2, '0') + valor;

function gerarQrCodePix(valor, descricao = '') {
    let contaPix = campo('00', 'br.gov.bcb.pix') + campo('01', chavePix);
    if (descricao) contaPix += campo('02', descricao);

    const payload = [
        campo('00', '01'),
        campo('26', contaPix),
        campo('52', '0000'),
        campo('53', '986'),
        campo('54', valor),
        campo('58', 'BR'),
        campo('59', nomeBeneficiario),
        campo('60', cidadeBeneficiario),
        campo('62', campo('05', '***')),
        '6304'
    ].join('');

    const brCode = payload + crc16(payload);

    const qr = qrcode(0, 'M');
    qr.addData(brCode);
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createImgTag(6, 16, 'QR Code do PIX');
    document.getElementById('pix-code').value = brCode;
}

function copiarPix() {
    const input = document.getElementById('pix-code');
    const btn = document.getElementById('copy-btn');
    const sucesso = () => {
        btn.textContent = 'Copiado ✓';
        btn.classList.add('copied');
        mostrarAviso('Código Pix copiado!');
        setTimeout(() => { btn.textContent = 'Copiar'; btn.classList.remove('copied'); }, 2000);
    };

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(input.value).then(sucesso).catch(() => copiarFallback(input) && sucesso());
    } else if (copiarFallback(input)) {
        sucesso();
    }
}

function copiarFallback(input) {
    input.select();
    input.setSelectionRange(0, 99999);
    try {
        return document.execCommand('copy');
    } catch {
        mostrarAviso('Não foi possível copiar. Selecione o código e copie manualmente.');
        return false;
    }
}

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    atualizarContagem();
    contagemTimer = setInterval(atualizarContagem, 1000);

    montarPresentes();
    renderizarCarrinho();
    iniciarBarraCarrinho();
    iniciarRevelacao();

    let buscaTimer;
    document.getElementById('gift-search').addEventListener('input', () => {
        clearTimeout(buscaTimer);
        buscaTimer = setTimeout(() => aplicarFiltro(), 150);
    });
    document.getElementById('gift-sort').addEventListener('change', () => aplicarFiltro());
    document.getElementById('gift-more').addEventListener('click', mostrarMais);
    document.querySelectorAll('.gift-categories .chip').forEach(chip => {
        chip.addEventListener('click', () => escolherCategoria(chip));
    });

    document.getElementById('checkout-btn').addEventListener('click', finalizarCompra);
    document.getElementById('buyer-name').addEventListener('input', e => e.target.classList.remove('input-error'));
    document.getElementById('copy-btn').addEventListener('click', copiarPix);
    document.getElementById('close-modal').addEventListener('click', fecharModal);
    document.getElementById('paid-btn').addEventListener('click', confirmarPagamento);

    const modal = document.getElementById('pix-modal');
    modal.addEventListener('click', e => { if (e.target === modal) fecharModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) fecharModal(); });
});
