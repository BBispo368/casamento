// Lista de presentes. Mantenha o formato: id único, nome, preço, imagem e categoria ("divertidos", "casa" ou "cotas").
const presentes = [
  {
    "id": 1,
    "nome": "5 meses de streaming de filmes para o casal curtir juntinhos",
    "preco": 205.02,
    "img": "./images/streaming.jpg",
    "categoria": "cotas"
  },
  {
    "id": 2,
    "nome": "Adote os boletos dos primeiros meses juntos!",
    "preco": 892.29,
    "img": "./images/boletos.jpg",
    "categoria": "cotas"
  },
  {
    "id": 3,
    "nome": "Ajuda financeira para o futuro do casal",
    "preco": 457.37,
    "img": "./images/futuro.jpg",
    "categoria": "cotas"
  },
  {
    "id": 4,
    "nome": "Ajuda para mobiliar a casa",
    "preco": 606.16,
    "img": "./images/mobiliario.jpg",
    "categoria": "cotas"
  },
  {
    "id": 5,
    "nome": "Alexa – para a noiva não mandar só no noivo",
    "preco": 348.12,
    "img": "./images/alexa-pop.png",
    "categoria": "divertidos"
  },
  {
    "id": 6,
    "nome": "Aluguel de um bebê para treinamento",
    "preco": 136.35,
    "img": "./images/bebe.jpg",
    "categoria": "divertidos"
  },
  {
    "id": 7,
    "nome": "Amassador de alimentos",
    "preco": 75.69,
    "img": "./images/amassador-de-alimentos-inox.jpg",
    "categoria": "casa"
  },
  {
    "id": 8,
    "nome": "Aparelho de Fondue Preto",
    "preco": 160.39,
    "img": "./images/aparelho_fondue_preto.jpg",
    "categoria": "casa"
  },
  {
    "id": 9,
    "nome": "Aparelho de jantar",
    "preco": 272.44,
    "img": "./images/aparelho-de-jantar-em-porcelana-12-pecas.jpg",
    "categoria": "casa"
  },
  {
    "id": 10,
    "nome": "Apoio psicológico para o casal manter a dieta saudável",
    "preco": 84.85,
    "img": "./images/psicologico.jpg",
    "categoria": "divertidos"
  },
  {
    "id": 11,
    "nome": "Aspirador de Pó Ciclônico 2 em 1 Vertical 1200W",
    "preco": 324.05,
    "img": "./images/Aspirador_de_Po_Ciclonico.jpg",
    "categoria": "casa"
  },
  {
    "id": 12,
    "nome": "Assadeira Retangular Alumínio Ecolon 43 cm x 21 cm",
    "preco": 359.97,
    "img": "./images/Assadeira_Retangular_Aluminio_Ecolon.jpg",
    "categoria": "casa"
  },
  {
    "id": 13,
    "nome": "Bandeja de café da manhã",
    "preco": 104.31,
    "img": "./images/bandejadecafedamanha.jpg",
    "categoria": "casa"
  },
  {
    "id": 14,
    "nome": "Barba, cabelo e bigode para o noivo",
    "preco": 157.65,
    "img": "./images/corte-cabelo-noivo.png",
    "categoria": "divertidos"
  },
  {
    "id": 15,
    "nome": "Belas obras de arte para decorar a casa",
    "preco": 480.26,
    "img": "./images/arte.jpg",
    "categoria": "cotas"
  },
  {
    "id": 16,
    "nome": "Cafeteira",
    "preco": 153.52,
    "img": "./images/cafeteira.jpg",
    "categoria": "casa"
  },
  {
    "id": 17,
    "nome": "Cafeteira elétrica para acordar com cheiro de café",
    "preco": 434.48,
    "img": "./images/cafeteira-eletrica.jpg",
    "categoria": "casa"
  },
  {
    "id": 18,
    "nome": "Caixa de ferramentas",
    "preco": 134.06,
    "img": "./images/caixadeferramentas.jpg",
    "categoria": "casa"
  },
  {
    "id": 19,
    "nome": "Calendário para o noivo não esquecer os aniversários de casamento",
    "preco": 47.88,
    "img": "./images/calendario-esquecer.png",
    "categoria": "divertidos"
  },
  {
    "id": 20,
    "nome": "Caminho de mesa",
    "preco": 91.72,
    "img": "./images/caminho-de-mesa-renda-45x120cm.jpg",
    "categoria": "casa"
  },
  {
    "id": 21,
    "nome": "Capacete para o noivo contra rolo de macarrão",
    "preco": 78.47,
    "img": "./images/capacete.png",
    "categoria": "divertidos"
  },
  {
    "id": 22,
    "nome": "Cesto de Roupa Trama com Tampa e Rodízios",
    "preco": 430.48,
    "img": "./images/Cesto_de_Roupa_Trama_com_Tampa.jpg",
    "categoria": "casa"
  },
  {
    "id": 23,
    "nome": "Chá para aguentar a ansiedade de dizer sim",
    "preco": 44.79,
    "img": "./images/cha.jpg",
    "categoria": "divertidos"
  },
  {
    "id": 24,
    "nome": "Cobertor para o noivo, porque a noiva sempre está coberta de razão",
    "preco": 110.47,
    "img": "./images/coberta-de-razao.png",
    "categoria": "divertidos"
  },
  {
    "id": 25,
    "nome": "Conjunto de descascador de alimentos",
    "preco": 113.35,
    "img": "./images/conjunto-de-descascador-de-alimentos.jpg",
    "categoria": "casa"
  },
  {
    "id": 26,
    "nome": "Conjunto de facas",
    "preco": 131.77,
    "img": "./images/conjuntodefacasdecozinha.jpg",
    "categoria": "casa"
  },
  {
    "id": 27,
    "nome": "Conjunto de panelas",
    "preco": 285.14,
    "img": "./images/conjuntodepanelas.jpg",
    "categoria": "casa"
  },
  {
    "id": 28,
    "nome": "Conjunto de peneiras",
    "preco": 210.75,
    "img": "./images/conjunto-de-3-peneiras-inox.jpg",
    "categoria": "casa"
  },
  {
    "id": 29,
    "nome": "Conjunto de Potes Herméticos Redondos 4 peças",
    "preco": 146.54,
    "img": "./images/Conjunto_de_Potes_Hermeticos_Redondos4.jpeg",
    "categoria": "casa"
  },
  {
    "id": 30,
    "nome": "Conjunto de Potes Herméticos Redondos Electrolux",
    "preco": 79.13,
    "img": "./images/Conjunto_de_Potes_Hermeticos_Redondos.jpeg",
    "categoria": "casa"
  },
  {
    "id": 31,
    "nome": "Conjunto de potes para alimentos",
    "preco": 84.85,
    "img": "./images/conjunto-de-potes-para-alimentos-6-pecas.jpg",
    "categoria": "casa"
  },
  {
    "id": 33,
    "nome": "Contribuição para a aposentadoria do casal",
    "preco": 1178.42,
    "img": "./images/aposentadoria.jpg",
    "categoria": "cotas"
  },
  {
    "id": 34,
    "nome": "Contribuição para um hotel 5 estrelas na lua de mel",
    "preco": 354.37,
    "img": "./images/hotel.jpg",
    "categoria": "cotas"
  },
  {
    "id": 35,
    "nome": "Copo para a Coca-Cola do noivo",
    "preco": 159.74,
    "img": "./images/copo-de-coca-cola.png",
    "categoria": "divertidos"
  },
  {
    "id": 36,
    "nome": "Coral para cantar \"Aleluia\" na entrada do noivo",
    "preco": 726.34,
    "img": "./images/coral_de_casamento.jpg",
    "categoria": "divertidos"
  },
  {
    "id": 37,
    "nome": "Cortador de Pizza com Cabo de Bambu",
    "preco": 92.86,
    "img": "./images/cortador_de_pizza_cabo_de_bambu.jpg",
    "categoria": "casa"
  },
  {
    "id": 38,
    "nome": "Cota \"amigos para sempre\"",
    "preco": 3181.34,
    "img": "./images/amigos_velhinhos.jpg",
    "categoria": "cotas"
  },
  {
    "id": 39,
    "nome": "Cota para garantir restaurantes de luxo na viagem",
    "preco": 583.27,
    "img": "./images/restaurantes.jpg",
    "categoria": "cotas"
  },
  {
    "id": 40,
    "nome": "Câmera instantânea para momentos românticos",
    "preco": 514.6,
    "img": "./images/camera.jpg",
    "categoria": "cotas"
  },
  {
    "id": 41,
    "nome": "Espelho Redondo 40 cm com Alça em Couro",
    "preco": 367.52,
    "img": "./images/espelho_redondo_alca_couro.jpg",
    "categoria": "casa"
  },
  {
    "id": 42,
    "nome": "Faqueiro Bellagio 24 peças - Brinox",
    "preco": 189.34,
    "img": "./images/Faqueiro_Bellagio_24_pecas.jpg",
    "categoria": "casa"
  },
  {
    "id": 43,
    "nome": "Ferro a Vapor FX2200 1200W - Black+Decker",
    "preco": 146.54,
    "img": "./images/Ferro_a_Vapor_FX2200_1200W.jpg",
    "categoria": "casa"
  },
  {
    "id": 44,
    "nome": "Ferro a Vapor Oster",
    "preco": 185.57,
    "img": "./images/ferro-de-passar-roupa.jpg",
    "categoria": "casa"
  },
  {
    "id": 45,
    "nome": "Forma para cupcakes",
    "preco": 88.28,
    "img": "./images/forma-para-12-cupcakes.jpg",
    "categoria": "casa"
  },
  {
    "id": 46,
    "nome": "Forno Elétrico 10 Litros Compact 127V - Oster",
    "preco": 410.33,
    "img": "./images/Forno_Eletrico_10_Litros.jpg",
    "categoria": "casa"
  },
  {
    "id": 47,
    "nome": "Frigideira Smart Plus New 20 cm - Brinox",
    "preco": 104.31,
    "img": "./images/Frigideira_Smart_Plus_New_20.jpg",
    "categoria": "casa"
  },
  {
    "id": 48,
    "nome": "Fritadeira Sem Óleo Air Fryer",
    "preco": 511.05,
    "img": "./images/Fritadeira_Sem_oleo_Air_Fryer.jpeg",
    "categoria": "casa"
  },
  {
    "id": 49,
    "nome": "Garanta novos filhos para os pais de planta",
    "preco": 400.15,
    "img": "./images/plantas.jpg",
    "categoria": "divertidos"
  },
  {
    "id": 50,
    "nome": "Garanta o jantar do noivo durante o 1º mês de casado",
    "preco": 663.39,
    "img": "./images/jantar.jpg",
    "categoria": "divertidos"
  },
  {
    "id": 52,
    "nome": "Jogo de Banho Buddemeyer",
    "preco": 248.52,
    "img": "./images/toalha.jpg",
    "categoria": "casa"
  },
  {
    "id": 53,
    "nome": "Jogo de Edredom Queen Max 3 Peças",
    "preco": 682.27,
    "img": "./images/Jogo_de_Edredom_Queen_Max_3.jpg",
    "categoria": "casa"
  },
  {
    "id": 54,
    "nome": "Jogo de Panelas Vermont 5 Peças",
    "preco": 600.44,
    "img": "./images/Jogo_de_Panelas_Vermont_5.jpg",
    "categoria": "casa"
  },
  {
    "id": 55,
    "nome": "Jogo de Porta-Condimentos com Suporte Rack 6 Peças",
    "preco": 160.39,
    "img": "./images/Jogo_de_Porta_Condimentos_com_Suporte.jpg",
    "categoria": "casa"
  },
  {
    "id": 56,
    "nome": "Jogo de potes para cereal",
    "preco": 84.85,
    "img": "./images/jogo-de-potes-para-cereal-4-pecas.jpg",
    "categoria": "casa"
  },
  {
    "id": 57,
    "nome": "Jogo de Prato Raso Legacy 6 Peças - Germer",
    "preco": 209.49,
    "img": "./images/Jogo_de_Prato_Raso_Legacy.jpg",
    "categoria": "casa"
  },
  {
    "id": 58,
    "nome": "Jogo de Taça de Vinho Salute 710 ml 4 Peças",
    "preco": 248.52,
    "img": "./images/Jogo_de_Taca_de_Vinho_Salute.jpg",
    "categoria": "casa"
  },
  {
    "id": 59,
    "nome": "Jogo de Xícaras para Café com Pires - 12 peças",
    "preco": 317.08,
    "img": "./images/jogo_xicaras_para_cafe_com_pires.jpg",
    "categoria": "casa"
  },
  {
    "id": 60,
    "nome": "Kit banheiro",
    "preco": 96.29,
    "img": "./images/kitbanheiro.jpg",
    "categoria": "casa"
  },
  {
    "id": 61,
    "nome": "Kit TPM para preservar a integridade física do noivo",
    "preco": 127.8,
    "img": "./images/kit-tpm.png",
    "categoria": "divertidos"
  },
  {
    "id": 62,
    "nome": "Lava e seca saladas",
    "preco": 123.88,
    "img": "./images/lava-e-seca-saladas.jpg",
    "categoria": "casa"
  },
  {
    "id": 63,
    "nome": "Lenço para a noiva não borrar toda a maquiagem",
    "preco": 79.13,
    "img": "./images/lenco_noiva_chorando.jpg",
    "categoria": "divertidos"
  },
  {
    "id": 64,
    "nome": "Licença oficial do noivo para compras em jogos",
    "preco": 329.54,
    "img": "./images/licenca-jogos.png",
    "categoria": "divertidos"
  },
  {
    "id": 65,
    "nome": "Liquidificador",
    "preco": 182.13,
    "img": "./images/liquidificador.jpg",
    "categoria": "casa"
  },
  {
    "id": 66,
    "nome": "Liquidificador Super Chef 750W",
    "preco": 261.11,
    "img": "./images/Liquidificador_Super_Chef.jpg",
    "categoria": "casa"
  },
  {
    "id": 67,
    "nome": "Livro de receitas com variações de macarrão instantâneo",
    "preco": 147.8,
    "img": "./images/receitas.png",
    "categoria": "divertidos"
  },
  {
    "id": 68,
    "nome": "Lixeira Inox 3 litros",
    "preco": 79.13,
    "img": "./images/lixeira_inox_3_litros.jpg",
    "categoria": "casa"
  },
  {
    "id": 69,
    "nome": "Lixeira para cozinha",
    "preco": 77.98,
    "img": "./images/lixeira-para-cozinha-5-litros.jpg",
    "categoria": "casa"
  },
  {
    "id": 70,
    "nome": "Mixer de Mão com Velocidade Variável - KitchenAid",
    "preco": 789.28,
    "img": "./images/Mixer.png",
    "categoria": "casa"
  },
  {
    "id": 71,
    "nome": "Moedor de Pimenta AMD 1721 de Madeira",
    "preco": 73.4,
    "img": "./images/moedor_de_pimenta_AMD_1721_de_madeira.jpg",
    "categoria": "casa"
  },
  {
    "id": 72,
    "nome": "Multiprocessador Chrome 7 Peças",
    "preco": 550.08,
    "img": "./images/Multiprocessador_Chrome_7_Pecas.jpg",
    "categoria": "casa"
  },
  {
    "id": 73,
    "nome": "Panela de Arroz Elétrica",
    "preco": 146.54,
    "img": "./images/panela_arroz_eletrica.jpg",
    "categoria": "casa"
  },
  {
    "id": 74,
    "nome": "Panela de Pressão Rochedo em Alumínio Polida",
    "preco": 359.97,
    "img": "./images/Panela_de_Pressao_Rochedo.jpeg",
    "categoria": "casa"
  },
  {
    "id": 75,
    "nome": "Panificadora",
    "preco": 499.6,
    "img": "./images/panificadora-aco-inox.jpg",
    "categoria": "casa"
  },
  {
    "id": 76,
    "nome": "Passadeira São Carlos 50x100",
    "preco": 104.31,
    "img": "./images/tapete.jpg",
    "categoria": "casa"
  },
  {
    "id": 77,
    "nome": "Pipoqueira Elétrica Pop Movie 1200W 127V - Cadence",
    "preco": 185.57,
    "img": "./images/Pipoqueira_Eletrica_Pop_Movie.jpg",
    "categoria": "casa"
  },
  {
    "id": 78,
    "nome": "Poder ir junto com os noivos para a lua de mel",
    "preco": 125931.31,
    "img": "./images/segurando_vela.jpg",
    "categoria": "divertidos"
  },
  {
    "id": 79,
    "nome": "Poltrona confortável para o noivo esperar a noiva",
    "preco": 170.69,
    "img": "./images/poltrona.jpg",
    "categoria": "divertidos"
  },
  {
    "id": 80,
    "nome": "Potes de armazenamento",
    "preco": 119.18,
    "img": "./images/conjuntodepotesdearmazenamento.jpg",
    "categoria": "casa"
  },
  {
    "id": 81,
    "nome": "Primeiro jantar na casa dos noivos",
    "preco": 163.19,
    "img": "./images/jantar_1.png",
    "categoria": "cotas"
  },
  {
    "id": 82,
    "nome": "Processador de Alimentos Oster",
    "preco": 424.18,
    "img": "./images/Processador_de_Alimentos_Oster.jpeg",
    "categoria": "casa"
  },
  {
    "id": 83,
    "nome": "Purificador de água",
    "preco": 388.7,
    "img": "./images/purificador.jpg",
    "categoria": "casa"
  },
  {
    "id": 84,
    "nome": "Ralador",
    "preco": 67.68,
    "img": "./images/ralador.jpg",
    "categoria": "casa"
  },
  {
    "id": 85,
    "nome": "Rolo de macarrão caso o noivo não se comporte",
    "preco": 147.8,
    "img": "./images/mulher_rolo_de_massa.jpg",
    "categoria": "divertidos"
  },
  {
    "id": 86,
    "nome": "Roupão grego",
    "preco": 224.59,
    "img": "./images/roupao-grego.jpg",
    "categoria": "casa"
  },
  {
    "id": 87,
    "nome": "Shampoo antiqueda para o noivo não perder o resto dos cabelos",
    "preco": 175.73,
    "img": "./images/shampoo.png",
    "categoria": "divertidos"
  },
  {
    "id": 88,
    "nome": "Tampão de ouvido para a noiva enquanto o noivo ronca",
    "preco": 113.46,
    "img": "./images/tampoes.jpg",
    "categoria": "divertidos"
  },
  {
    "id": 90,
    "nome": "Tapete de Banheiro Camesa",
    "preco": 79.13,
    "img": "./images/tapete_camesa.jpg",
    "categoria": "casa"
  },
  {
    "id": 91,
    "nome": "Toalha de Rosto Egitto Elegance 40 cm x 90 cm",
    "preco": 87.14,
    "img": "./images/Toalha_de_Rosto_egitto_elegance.webp",
    "categoria": "casa"
  },
  {
    "id": 92,
    "nome": "Torradeira",
    "preco": 170.69,
    "img": "./images/torradeira.jpg",
    "categoria": "casa"
  },
  {
    "id": 93,
    "nome": "Travessa Refratária Retangular Grande Vianagrés",
    "preco": 160.39,
    "img": "./images/Travessa_Refrataria_Retangular_Grande_Vianagres.jpeg",
    "categoria": "casa"
  },
  {
    "id": 94,
    "nome": "Travesseiros",
    "preco": 130.63,
    "img": "./images/travesseiros.jpg",
    "categoria": "casa"
  },
  {
    "id": 95,
    "nome": "Tábua para Churrasco BBQ Madeira Natural",
    "preco": 229.63,
    "img": "./images/Tabua_para_Churrasco_BBQ_Madeira_Natural.jpg",
    "categoria": "casa"
  }
];
