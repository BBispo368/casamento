// --- LÓGICA DA CONTAGEM REGRESSIVA ---
const dataCasamento = new Date("2027-03-06T16:00:00-03:00").getTime();

function atualizarContagem() {
    const agora = new Date().getTime();
    const distancia = dataCasamento - agora;

    const dSpan = document.getElementById("days");
    if(!dSpan) return;

    if (distancia < 0) {
        dSpan.innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    dSpan.innerText = dias.toString().padStart(2, '0');
    document.getElementById("hours").innerText = horas.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutos.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = segundos.toString().padStart(2, '0');
}

setInterval(atualizarContagem, 1000);

// --- CONFIGURAÇÕES DO PIX ---
const chavePix = "08709906673";
const nomeBeneficiario = "Breno Pereira dos Santos Bispo";
const cidadeBeneficiario = "Bom Despacho";

// --- LISTA DE PRESENTES ---
const presentes =[
  {
    "id": 1,
    "nome": "5 meses de streaming de filmes para o casal curtir juntinhos",
    "preco": 205.02,
    "img": "./images/streaming.jpg"
  },
  {
    "id": 2,
    "nome": "Adote os boletos dos primeiros meses juntos!",
    "preco": 892.29,
    "img": "./images/boletos.jpg"
  },
  {
    "id": 3,
    "nome": "Ajuda financeira para o futuro do casal",
    "preco": 457.37,
    "img": "./images/futuro.jpg"
  },
  {
    "id": 4,
    "nome": "Ajuda para mobiliar a casa",
    "preco": 606.16,
    "img": "./images/mobiliario.jpg"
  },
  {
    "id": 5,
    "nome": "ALEXA – PARA A NOIVA NÃO MANDAR SÓ NO NOIVO.",
    "preco": 348.12,
    "img": "./images/alexa-pop.png"
  },
  {
    "id": 6,
    "nome": "Aluguel de um bebê para treinamento",
    "preco": 136.35,
    "img": "./images/bebe.jpg"
  },
  {
    "id": 7,
    "nome": "Amassador de alimentos",
    "preco": 75.69,
    "img": "./images/amassador-de-alimentos-inox.jpg"
  },
  {
    "id": 8,
    "nome": "Aparelho de Fondue Preto",
    "preco": 160.39,
    "img": "./images/aparelho_fondue_preto.jpg"
  },
  {
    "id": 9,
    "nome": "Aparelho de jantar",
    "preco": 272.44,
    "img": "./images/aparelho-de-jantar-em-porcelana-12-pecas.jpg"
  },
  {
    "id": 10,
    "nome": "Apoio psicológico para o casal comer mais saúdavel",
    "preco": 84.85,
    "img": "./images/psicologico.jpg"
  },
  {
    "id": 11,
    "nome": "Aspirador de Pó Ciclônico 2 em 1 Vertical 1200W",
    "preco": 324.05,
    "img": "./images/Aspirador_de_Po_Ciclonico.jpg"
  },
  {
    "id": 12,
    "nome": "Assadeira Retangular Alumínio Ecolon 43 cm x 21 cm",
    "preco": 359.97,
    "img": "./images/Assadeira_Retangular_Aluminio_Ecolon.jpg"
  },
  {
    "id": 13,
    "nome": "Bandeja de café da manhã",
    "preco": 104.31,
    "img": "./images/bandejadecafedamanha.jpg"
  },
  {
    "id": 14,
    "nome": "BARBA, CABELO E BIGODE PARA O NOIVO",
    "preco": 157.65,
    "img": "./images/corte-cabelo-noivo.png"
  },
  {
    "id": 15,
    "nome": "Belas obras de arte para decorar a casa",
    "preco": 480.26,
    "img": "./images/arte.jpg"
  },
  {
    "id": 16,
    "nome": "Cafeteira",
    "preco": 153.52,
    "img": "./images/cafeteira.jpg"
  },
  {
    "id": 17,
    "nome": "Cafeteira elétrica para acordar com cheiro de café",
    "preco": 434.48,
    "img": "./images/cafeteira(1).jpg"
  },
  {
    "id": 18,
    "nome": "Caixa de ferramentas",
    "preco": 134.06,
    "img": "./images/caixadeferramentas.jpg"
  },
  {
    "id": 19,
    "nome": "CALENDÁRIO PARA O NOIVO NÃO ESQUECER OS ANIVERSÁRIOS DE CASAMENTO",
    "preco": 47.88,
    "img": "./images/calendario-esquecer.png"
  },
  {
    "id": 20,
    "nome": "Caminho de mesa",
    "preco": 91.72,
    "img": "./images/caminho-de-mesa-renda-45x120cm.jpg"
  },
  {
    "id": 21,
    "nome": "CAPACETE PARA O NOIVO CONTRA ROLO DE MACARRÃO",
    "preco": 78.47,
    "img": "./images/capacete.png"
  },
  {
    "id": 22,
    "nome": "Cesto de Roupa Trama com Tampa e Rodízios",
    "preco": 430.48,
    "img": "./images/Cesto_de_Roupa_Trama_com_Tampa.jpg"
  },
  {
    "id": 23,
    "nome": "Chá para aguentar a ansiedade de dizer sim",
    "preco": 44.79,
    "img": "./images/cha.jpg"
  },
  {
    "id": 24,
    "nome": "COBERTOR PARA O NOIVO, PORQUE A NOIVA SEMPRE ESTÁ COBERTA DE RAZÃO",
    "preco": 110.47,
    "img": "./images/coberta-de-razão.png"
  },
  {
    "id": 25,
    "nome": "Conjunto de descascador de alimentos",
    "preco": 113.35,
    "img": "./images/conjunto-de-descascador-de-alimentos.jpg"
  },
  {
    "id": 26,
    "nome": "Conjunto de facas",
    "preco": 131.77,
    "img": "./images/conjuntodefacasdecozinha.jpg"
  },
  {
    "id": 27,
    "nome": "Conjunto de panelas",
    "preco": 285.14,
    "img": "./images/conjuntodepanelas.jpg"
  },
  {
    "id": 28,
    "nome": "Conjunto de peneiras",
    "preco": 210.75,
    "img": "./images/conjunto-de-3-peneiras-inox.jpg"
  },
  {
    "id": 29,
    "nome": "Conjunto de Potes Herméticos Redondos 4 peças",
    "preco": 146.54,
    "img": "./images/Conjunto_de_Potes_Hermeticos_Redondos4.jpeg"
  },
  {
    "id": 30,
    "nome": "Conjunto de Potes Herméticos Redondos Electrolux",
    "preco": 79.13,
    "img": "./images/Conjunto_de_Potes_Hermeticos_Redondos.jpeg"
  },
  {
    "id": 31,
    "nome": "Conjunto de potes para alimentos",
    "preco": 84.85,
    "img": "./images/conjunto-de-potes-para-alimentos-6-pecas.jpg"
  },

  {
    "id": 33,
    "nome": "Contribuição para a aposentadoria do casal",
    "preco": 1178.42,
    "img": "./images/aposentadoria.jpg"
  },
  {
    "id": 34,
    "nome": "Contribuição para um hotel 5 estrelas na lua de mel",
    "preco": 354.37,
    "img": "./images/hotel.jpg"
  },
  {
    "id": 35,
    "nome": "COPO PARA A COCA COLA DO NOIVO",
    "preco": 159.74,
    "img": "./images/copo-de-coca-cola.png"
  },
  {
    "id": 36,
    "nome": "Coral pra cantar \"Aleluia\" na entrada do noivo",
    "preco": 726.34,
    "img": "./images/coral_de_casamento.jpg"
  },
  {
    "id": 37,
    "nome": "Cortador de Pizza com Cabo de Bambu",
    "preco": 92.86,
    "img": "./images/cortador_de_pizza_cabo_de_bambu.jpg"
  },
  {
    "id": 38,
    "nome": "Cota \"amigos para sempre\"",
    "preco": 3181.34,
    "img": "./images/amigos_velhinhos.jpg"
  },
  {
    "id": 39,
    "nome": "Cota para garantir restaurantes de luxo na viagem",
    "preco": 583.27,
    "img": "./images/restaurantes.jpg"
  },
  {
    "id": 40,
    "nome": "Câmera instantânea para momentos românticos",
    "preco": 514.60,
    "img": "./images/camera.jpg"
  },
  {
    "id": 41,
    "nome": "Espelho Redondo 40 cm com Alça em Couro",
    "preco": 367.52,
    "img": "./images/espelho_redondo_alca_couro.jpg"
  },
  {
    "id": 42,
    "nome": "Faqueiro Bellagio 24 peças - Brinox",
    "preco": 189.34,
    "img": "./images/Faqueiro_Bellagio_24_pecas.jpg"
  },
  {
    "id": 43,
    "nome": "Ferro a Vapor FX2200 1200W - Black+Decker",
    "preco": 146.54,
    "img": "./images/Ferro_a_Vapor_FX2200_1200W.jpg"
  },
  {
    "id": 44,
    "nome": "Ferro a Vapor Oster",
    "preco": 185.57,
    "img": "./images/ferro-de-passar-roupa.jpg"
  },
  {
    "id": 45,
    "nome": "Forma para cupcakes",
    "preco": 88.28,
    "img": "./images/forma-para-12-cupcakes.jpg"
  },
  {
    "id": 46,
    "nome": "Forno Elétrico 10 Litros Compact 127V - Oster",
    "preco": 410.33,
    "img": "./images/Forno_Eletrico_10_Litros.jpg"
  },
  {
    "id": 47,
    "nome": "Frigideira Smart Plus New 20 cm - Brinox",
    "preco": 104.31,
    "img": "./images/Frigideira_Smart_Plus_New_20.jpg"
  },
  {
    "id": 48,
    "nome": "Fritadeira Sem Óleo Air Fryer",
    "preco": 511.05,
    "img": "./images/Fritadeira_Sem_oleo_Air_Fryer.jpeg"
  },
  {
    "id": 49,
    "nome": "Garanta novos filhos para os pais de planta",
    "preco": 400.15,
    "img": "./images/plantas.jpg"
  },
  {
    "id": 50,
    "nome": "Garanta o jantar do noivo durante o 1º mês de casado",
    "preco": 663.39,
    "img": "./images/jantar.jpg"
  },

  {
    "id": 52,
    "nome": "Jogo de Banho Buddemeyer",
    "preco": 248.52,
    "img": "./images/jogo-de-potes-para-cereal-4-pecas.jpg"
  },
  {
    "id": 53,
    "nome": "Jogo de Edredom Queen Max 3 Peças",
    "preco": 682.27,
    "img": "./images/Jogo_de_Edredom_Queen_Max_3.jpg"
  },
  {
    "id": 54,
    "nome": "Jogo de Panelas Vermont 5 Peças",
    "preco": 600.44,
    "img": "./images/Jogo_de_Panelas_Vermont_5.jpg"
  },
  {
    "id": 55,
    "nome": "Jogo de Porta-Condimentos com Suporte Rack 6 Peças",
    "preco": 160.39,
    "img": "./images/Jogo_de_Porta_Condimentos_com_Suporte.jpg"
  },
  {
    "id": 56,
    "nome": "Jogo de potes para cereal",
    "preco": 84.85,
    "img": "./images/jogo-de-potes-para-cereal-4-pecas.jpg"
  },
  {
    "id": 57,
    "nome": "Jogo de Prato Raso Legacy 6 Peças - Germer",
    "preco": 209.49,
    "img": "./images/Jogo_de_Prato_Raso_Legacy.jpg"
  },
  {
    "id": 58,
    "nome": "Jogo de Taça de Vinho Salute 710 ml 4 Peças",
    "preco": 248.52,
    "img": "./images/Jogo_de_Taca_de_Vinho_Salute.jpg"
  },
  {
    "id": 59,
    "nome": "Jogo de Xícaras para Café com Pires - 12 peças",
    "preco": 317.08,
    "img": "./images/jogo_xicaras_para_cafe_com_pires.jpg"
  },
  {
    "id": 60,
    "nome": "Kit banheiro",
    "preco": 96.29,
    "img": "./images/kitbanheiro.jpg"
  },
  {
    "id": 61,
    "nome": "KIT TPM PARA PRESERVAR A INTEGRIDADE FÍSICA DO NOIVO",
    "preco": 127.80,
    "img": "./images/kit-tpm.png"
  },
  {
    "id": 62,
    "nome": "Lava e seca saladas",
    "preco": 123.88,
    "img": "./images/lava-e-seca-saladas.jpg"
  },
  {
    "id": 63,
    "nome": "Lenço para a noiva não borrar toda a maquiagem",
    "preco": 79.13,
    "img": "./images/lenco_noiva_chorando.jpg"
  },
  {
    "id": 64,
    "nome": "LICENÇA OFICIAL DO NOIVO PARA COMPRAS EM JOGOS",
    "preco": 329.54,
    "img": "./images/licença-jogos.png"
  },
  {
    "id": 65,
    "nome": "Liquidificador",
    "preco": 182.13,
    "img": "./images/liquidificador.jpg"
  },
  {
    "id": 66,
    "nome": "Liquidificador Super Chef 750W",
    "preco": 261.11,
    "img": "./images/Liquidificador_Super_Chef.jpg"
  },
  {
    "id": 67,
    "nome": "Livro de receitas com variações de macarrão instantâneo",
    "preco": 147.80,
    "img": "./images/Cesto_de_Roupa_Trama_com_Tampa.jpg"
  },
  {
    "id": 68,
    "nome": "Lixeira Inox 3 litros",
    "preco": 79.13,
    "img": "./images/lixeira_inox_3_litros.jpg"
  },
  {
    "id": 69,
    "nome": "Lixeira para cozinha",
    "preco": 77.98,
    "img": "./images/lixeira-para-cozinha-5-litros.jpg"
  },
  {
    "id": 70,
    "nome": "Mixer de Mão com Velocidade Variável - KitchenAid",
    "preco": 789.28,
    "img": "./images/Mixer.png"
  },
  {
    "id": 71,
    "nome": "Moedor de Pimenta AMD 1721 de Madeira",
    "preco": 73.40,
    "img": "./images/moedor_de_pimenta_AMD_1721_de_madeira.jpg"
  },
  {
    "id": 72,
    "nome": "Multiprocessador Chrome 7 Peças",
    "preco": 550.08,
    "img": "./images/Multiprocessador_Chrome_7_Pecas.jpg"
  },
  {
    "id": 73,
    "nome": "Panela de Arroz Elétrica",
    "preco": 146.54,
    "img": "./images/panela_arroz_eletrica.jpg"
  },
  {
    "id": 74,
    "nome": "Panela de Pressão Rochedo em Alumínio Polida",
    "preco": 359.97,
    "img": "./images/Panela_de_Pressao_Rochedo.jpeg"
  },
  {
    "id": 75,
    "nome": "Panificadora",
    "preco": 499.60,
    "img": "./images/panificadora-aco-inox.jpg"
  },
  {
    "id": 76,
    "nome": "Passadeira São Carlos 50x100",
    "preco": 104.31,
    "img": "./images/tapete.jpg"
  },
  {
    "id": 77,
    "nome": "Pipoqueira Elétrica Pop Movie 1200W 127V - Cadence",
    "preco": 185.57,
    "img": "./images/Pipoqueira_Eletrica_Pop_Movie.jpg"
  },
  {
    "id": 78,
    "nome": "Poder ir junto com os noivos para a lua de mel",
    "preco": 125931.31,
    "img": "./images/segurando_vela.jpg"
  },
  {
    "id": 79,
    "nome": "Poltrona confortável para o noivo esperar a noiva",
    "preco": 170.69,
    "img": "./images/poltrona.jpg"
  },
  {
    "id": 80,
    "nome": "Potes de armazenamento",
    "preco": 119.18,
    "img": "./images/conjuntodepotesdearmazenamento.jpg"
  },
  {
    "id": 81,
    "nome": "PRIMEIRO JANTAR NA CASA DOS NOIVOS",
    "preco": 163.19,
    "img": "./images/jantar_1.png"
  },
  {
    "id": 82,
    "nome": "Processador de Alimentos Oster",
    "preco": 424.18,
    "img": "./images/Processador_de_Alimentos_Oster.jpeg"
  },
  {
    "id": 83,
    "nome": "Purificador de água",
    "preco": 388.70,
    "img": "./images/purificador.jpg"
  },
  {
    "id": 84,
    "nome": "Ralador",
    "preco": 67.68,
    "img": "./images/ralador.jpg"
  },
  {
    "id": 85,
    "nome": "Rolo de macarrão caso o noivo não se comporte",
    "preco": 147.80,
    "img": "./images/mulher_rolo_de_massa.jpg"
  },
  {
    "id": 86,
    "nome": "Roupão grego",
    "preco": 224.59,
    "img": "./images/roupao-grego.jpg"
  },
  {
    "id": 87,
    "nome": "SHAMPOO ANTIQUEDAS PARA O NOIVO NÃO PERDER O RESTO DOS CABELOS",
    "preco": 175.73,
    "img": "./images/shampoo.png"
  },
  {
    "id": 88,
    "nome": "Tampão de ouvido pra noiva enquanto noivo ronca",
    "preco": 113.46,
    "img": "./images/tampoes.jpg"
  },

  {
    "id": 90,
    "nome": "Tapete de Banheiro Camesa",
    "preco": 79.13,
    "img": "./images/tapete_camesa.jpg"
  },
  {
    "id": 91,
    "nome": "Toalha de Rosto Egitto Elegance 40 cm x 90 cm",
    "preco": 87.14,
    "img": "./images/Toalha_de_Rosto_egitto_elegance.webp"
  },
  {
    "id": 92,
    "nome": "Torradeira",
    "preco": 170.69,
    "img": "./images/torradeira.jpg"
  },
  {
    "id": 93,
    "nome": "Travessa Refratária Retangular Grande Vianagrés",
    "preco": 160.39,
    "img": "./images/Travessa_Refrataria_Retangular_Grande_Vianagres.jpeg"
  },
  {
    "id": 94,
    "nome": "Travesseiros",
    "preco": 130.63,
    "img": "./images/travesseiros.jpg"
  },
  {
    "id": 95,
    "nome": "Tábua para Churrasco BBQ Madeira Natural",
    "preco": 229.63,
    "img": "./images/Tabua_para_Churrasco_BBQ_Madeira_Natural.jpg"
  }
]
;

let carrinho = [];

// --- FUNÇÕES PRINCIPAIS ---

// Exibe os presentes na página
function renderizarPresentes() {
    const lista = document.getElementById('gift-list');
    lista.innerHTML = '';
    presentes.forEach(presente => {
        const itemNoCarrinho = carrinho.find(item => item.id === presente.id);
        const desabilitado = itemNoCarrinho ? 'disabled' : '';
        const textoBotao = itemNoCarrinho ? 'No Carrinho' : 'Adicionar ao Carrinho';

        lista.innerHTML += `
            <div class="gift-item">
                <img src="${presente.img}" alt="${presente.nome}">
                <h3>${presente.nome}</h3>
                <p>R$ ${presente.preco.toFixed(2).replace('.', ',')}</p>
                <button class="add-to-cart-btn" id="btn-${presente.id}" onclick="adicionarAoCarrinho(${presente.id})" ${desabilitado}>
                    ${textoBotao}
                </button>
            </div>
        `;
    });
}

// Adiciona um item ao carrinho
function adicionarAoCarrinho(id) {
    const presente = presentes.find(p => p.id === id);
    if (presente) {
        carrinho.push(presente);
        renderizarCarrinho();
        renderizarPresentes(); // Para atualizar o estado do botão
    }
}

// Remove um item do carrinho
function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    renderizarCarrinho();
    renderizarPresentes();
}

// Exibe os itens do carrinho e o total
function renderizarCarrinho() {
    const itensCarrinhoDiv = document.getElementById('cart-items');
    const totalCarrinhoDiv = document.getElementById('cart-total');
    const formFinalizar = document.getElementById('checkout-form');

    if (carrinho.length === 0) {
        itensCarrinhoDiv.innerHTML = '<p>Seu carrinho está vazio.</p>';
        totalCarrinhoDiv.innerHTML = '';
        if (formFinalizar) formFinalizar.style.display = 'none';
    } else {
        itensCarrinhoDiv.innerHTML = '';
        let total = 0;
        carrinho.forEach(item => {
            itensCarrinhoDiv.innerHTML += `
                <div class="cart-item">
                    <span>${item.nome}</span>
                    <strong>R$ ${item.preco.toFixed(2).replace('.', ',')}</strong>
                    <span onclick="removerDoCarrinho(${item.id})" style="cursor:pointer; color:red;">&times;</span>
                </div>
            `;
            total += item.preco;
        });

        totalCarrinhoDiv.innerHTML = `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
        if (formFinalizar) formFinalizar.style.display = 'block';
    }
}

// --- LÓGICA DO PIX ---

function finalizarCompra() {
    const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    if (total > 0) {
        const nomeObj = document.getElementById('buyer-name');
        const msgObj = document.getElementById('buyer-msg');
        let nome = nomeObj ? nomeObj.value.trim() : "";
        let msg = msgObj ? msgObj.value.trim() : "";
        
        if (!nome) {
            alert("Por favor, preencha o seu nome para sabermos de quem é o presente!");
            if (nomeObj) nomeObj.focus();
            return;
        }

        let descricao = `🎁 ${nome}`;
        if (msg) descricao += ` - ${msg}`;
        
        // Remove acentos e emojis para evitar erro bancário de formatação de PIX
        descricao = descricao.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9\s.,-]/g, "");
        descricao = descricao.substring(0, 60); // Limite de 60 caracteres apenas p/ garantir

        gerarQrCodePix(total.toFixed(2), descricao);
        document.getElementById('pix-valor').innerText = total.toFixed(2).replace('.', ',');
        document.getElementById('pix-modal').style.display = 'flex';
    } else {
        alert("Seu carrinho está vazio!");
    }
}

function fecharModal() {
    document.getElementById('pix-modal').style.display = 'none';
    document.getElementById('qrcode').innerHTML = ''; // Limpa o QR Code anterior
}

function gerarQrCodePix(valor, descricao = "") {
    const identificador = '***'; // Fixo, pois cada transação é única
    
    // Constrói o conteúdo do ID 26
    let id26_data = "0014br.gov.bcb.pix" + "01" + chavePix.length.toString().padStart(2, '0') + chavePix;
    if (descricao) { // Adiciona infoAdicional (ID 02)
        id26_data += "02" + descricao.length.toString().padStart(2, '0') + descricao;
    }
    const id26 = "26" + id26_data.length.toString().padStart(2, '0') + id26_data;

    const payload = [
        "000201",
        id26,
        "52040000",
        "5303986",
        "54" + (valor.length.toString().padStart(2, '0') + valor),
        "5802BR",
        "59" + nomeBeneficiario.length.toString().padStart(2, '0') + nomeBeneficiario,
        "60" + cidadeBeneficiario.length.toString().padStart(2, '0') + cidadeBeneficiario,
        "62070503" + identificador,
        "6304"
    ].join('');

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

    const brCode = payload + crc16(payload);

    const qr = qrcode(0, 'M');
    qr.addData(brCode);
    qr.make();
    document.getElementById('qrcode').innerHTML = qr.createImgTag(6, 20);
}

// --- INICIALIZAÇÃO ---
// Chama as funções para montar a página quando ela carregar
window.onload = () => {
    atualizarContagem(); // Inicia logo
    renderizarPresentes();
    renderizarCarrinho();
};
