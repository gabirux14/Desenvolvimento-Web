const atletas = [
    {
      "id": 1,
      "elenco": "feminino",
      "nome": "INGRID SABINO",
      "posicao": "Goleira",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/ingrid-sabino.png",
      "descricao": "A goleira possui uma forte ligação com o futebol desde pequena. Assim como a maioria, Ingrid iniciou sua trajetória jogando com os meninos na rua. Como sempre se destacou entre os demais, passou a disputar campeonatos amadores espalhados pelo Rio até passar pela peneira realizada pelo Botafogo em 2020, onde foi aprovada e escolhida para fazer parte das Gloriosas.",
      "nome_completo": "Ingrid Sabino de Oliveira",
      "nascimento": "25/06/1997, Rio de Janeiro (RJ)",
      "altura": "1,72"
    },
    {
      "id": 2,
      "elenco": "feminino",
      "nome": "YASMIM",
      "posicao": "goleira",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/yasmin.png",
      "descricao": "A arqueira se destaca pela boa imposição física, experiência e muita técnica. Yasmim é a responsável por fechar o gol das Gloriosas e por grandes defesas.",
      "nome_completo": "Yasmim Cristina Seabra Pereira",
      "nascimento": "11/06/1995, Rio de Janeiro (RJ)",
      "altura": "1,77"
    },
    {
      "id": 3,
      "elenco": "feminino",
      "nome": "KELLY",
      "posicao": "goleira",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/chiavaro.png",
      "descricao": "Nascida no Canadá e com nacionalidade italiana, Kelly iniciou sua carreira nos Estados Unidos antes de desembarcar em solo europeu. Em 2022 a goleira disputou três partidas pela Seleção Italiana de beach soccer, pela Eurocopa da modalidade. Chiavaro chega no Botafogo para somar com sua segurança nas jogadas e muita técnica.",
      "nome_completo": "Kelly Chiavaro",
      "nascimento": "03/07/1996, Montreal (Canadá)",
      "altura": "1,74"
    },
    {
      "id": 4,
      "elenco": "feminino",
      "nome": "BRUNA SOUZA",
      "posicao": "Lateral-direita",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/bruna.png",
      "descricao": "Apaixonada por futebol desde criança, Bruna iniciou sua trajetória jogando com os meninos. Foram 5 anos fazendo parte de escolinhas até chegar ao Centro Olímpico. Lateral voluntariosa, de muita força e de extrema regularidade. Chegou ao Glorioso em agosto de 2018, conquistou o acesso para a série A1 em 2020 e dois títulos cariocas nos últimos anos.",
      "nome_completo": "Bruna de Souza dos Santos",
      "nascimento": "14/12/2000, São Paulo",
      "altura": "1,69"
    },
    {
      "id": 5,
      "elenco": "feminino",
      "nome": "LUANA",
      "posicao": "lateral-direita",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/luana.png",
      "descricao": "Luana é uma lateral com características ofensivas, excelente nos cruzamentos e muito disciplinada taticamente. Com ela, disposição nunca falta em campo.",
      "nome_completo": "Luana Mayara Neves",
      "nascimento": "05/08/1997, Volta Redonda (RJ)",
      "altura": "1,58"
    },
    {
      "id": 6,
      "elenco": "feminino",
      "nome": "JÉSSICA BAHIA",
      "posicao": "Lateral-direita",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/jessica-bahia.png",
      "descricao": "Jéssica chama a atenção na lateral-direita por sua velocidade e agilidade. Iniciou sua trajetória no campo mais tradicional das crianças: a rua. Incentivada pelo ex-treinador e pela família, passou por um teste no São Francisco do Conde (BA), seu primeiro clube. A lateral chega ao Botafogo após duas temporadas no Fluminense.",
      "nome_completo": "Jessica Alves Sousa",
      "nascimento": "23/08/1991, Salvador (BA)",
      "altura": "1,70"
    },
    {
      "id": 7,
      "elenco": "feminino",
      "nome": "CHAI",
      "posicao": "Lateral-esquerda",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/chai.png",
      "descricao": "Lateral esquerda de técnica apurada, comprometida com a equipe e diferenciada nas bolas paradas. Chai está em sua terceira temporada no Glorioso e faz parte do grupo das atletas que conquistaram o acesso para a série A1 em 2020. A atleta é peça essencial da equipe.",
      "nome_completo": "Chaiane Locatelli",
      "nascimento": "20/02/1995, Garibaldi (RS)",
      "altura": "1,63"
    },
    {
      "id": 8,
      "elenco": "feminino",
      "nome": "SANDRA",
      "posicao": "Zagueira",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/sandra.png",
      "descricao": "Sandra chegou ao Botafogo em 2019 e é uma das atletas que faz parte do primeiro time formado pelo Clube. Revelada pelo São Bernardo, equipe de sua cidade natal, a zagueira seguiu encantando e mostrando seu futebol mundo a fora. Ao chegar no Glorioso, a atleta conquistou o acesso para a série A1 em 2020 e dois títulos cariocas.",
      "nome_completo": "Sandra Figueiredo",
      "nascimento": "08/01/1987, São Bernardo do Campo (SP)",
      "altura": "1.68"
    },
    {
      "id": 9,
      "elenco": "feminino",
      "nome": "KÁREN",
      "posicao": "Zagueira",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/karen.png",
      "descricao": "Karen se destaca na zaga Gloriosa pelo seu cabeceio e garra nas disputas de bola. A atleta conta com passagens em clubes nacionais e internacionais, além de fazer parte do elenco que garantiu o acesso para a série A1 na temporada 2020. No ano de 2022, a zagueira conquistou o segundo título Carioca com o Glorioso.",
      "nome_completo": "Káren Bender",
      "nascimento": "21/02/1996, Passo Fundo (RS)",
      "altura": "1,75"
    },
    {
      "id": 10,
      "elenco": "feminino",
      "nome": "THAMIRES",
      "posicao": "Zagueira",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/thamires.png",
      "descricao": "Identificada com o clube desde o berço, representa a torcida dentro de campo com sua garra e técnica. Durante sua carreira, a zagueira defendeu diferentes clubes do cenário nacional que somaram em sua bagagem na modalidade. Thamires conta com um título carioca em sua passagem pelo Vasco e na terceira temporada seguida pelo Botafogo, a atleta soma dois títulos estaduais.",
      "nome_completo": "Thamires Ferreira Alves dos Santos",
      "nascimento": "26/04/1994, Rio de Janeiro",
      "altura": "1.72"
    },
    {
      "id": 11,
      "elenco": "feminino",
      "nome": "JANA QUEIROZ",
      "posicao": "Zagueira",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/jana-queiroz.png",
      "descricao": "Jana Queiroz iniciou sua carreira aos 14 anos no futsal em sua cidade natal e, ao realizar uma peneira, iniciou sua carreira no Santos, onde fez a transição para o campo. Ainda no clube paulista, a zagueira recebeu sua primeira convocação para a Seleção Brasileira Sub-20, onde foi campeã sul-americana. A atleta possui passagens pela Europa e por outros clubes do Brasil.",
      "nome_completo": "Janaina Queiroz Cavalcante",
      "nascimento": "02/04/1988, Fortaleza (CE)",
      "altura": "1.73"
    },
    {
      "id": 12,
      "elenco": "feminino",
      "nome": "NALON",
      "posicao": "zagueira",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/nalon.png",
      "descricao": "Após período na categoria Sub-20 das Gloriosas, a zagueira reforça a equipe principal e tem como principal característica a sua força no combate contra as adversárias.",
      "nome_completo": "Natalie Gabrieli Nalon",
      "nascimento": "21/09/2002, Bituruna (PR)",
      "altura": "1.69"
    },
    {
      "id": 13,
      "elenco": "feminino",
      "nome": "JU SANTOS",
      "posicao": "Volante",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/ju-santos.png",
      "descricao": "Ju Santos chegou ao Botafogo em 2022 para reforçar o meio-campo das Gloriosas e têm como características força física e bom passe. Possui diversos títulos nos clubes por onde passou e conquistou uma Libertadores com a Ferroviária.",
      "nome_completo": "Juliana Santos Cardoso",
      "nascimento": "24/04/1995, Curitiba (PR)",
      "altura": "1,65"
    },
    {
      "id": 14,
      "elenco": "feminino",
      "nome": "TREYCI",
      "posicao": "volante",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/treyci.png",
      "descricao": "Treyci representa muita força e agilidade no meio de campo. A defensora também fez parte da campanha do Napoli no Campeonato Brasileiro da Série A2 em 2020, ano onde o time subiu para a primeira divisão.",
      "nome_completo": "Treyci da Silva Campos",
      "nascimento": "27/02/1998, Porto Alegre (RS)",
      "altura": "1,60"
    },
    {
      "id": 15,
      "elenco": "feminino",
      "nome": "Japa",
      "posicao": "Meia",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/japa.png",
      "descricao": "Japa se destaca pela sua inteligência nas tomadas de decisões e possui uma técnica apurada. Chegou no Botafogo para a categoria Sub-20, onde conquistou o título inédito de campeã carioca em 2022. Na temporada 2023, a meia compõe a equipe principal das Gloriosas.",
      "nome_completo": "Ana Paula Emy Satake Yamada",
      "nascimento": "11/06/2002, São Paulo",
      "altura": "1,69"
    },
    {
      "id": 16,
      "elenco": "feminino",
      "nome": "DRIELY",
      "posicao": "meia",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/driely.png",
      "descricao": "Conhecida pela sua garra nas disputas de bola, a experiente volante é respeitada por toda a equipe. A jogadora fez parte do elenco do São Paulo na conquista do Campeonato Brasileiro A2.",
      "nome_completo": "Driely Severino Ferreira",
      "nascimento": "06/07/1990, Formosas (GO)",
      "altura": "1,66"
    },
    {
      "id": 17,
      "elenco": "feminino",
      "nome": "CAMILA OLIVEIRA",
      "posicao": "meia",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/camila.png",
      "descricao": "Camila chegou ao Botafogo em 2021 e agrega valor com sua técnica e visão de jogo. A meia marcou a temporada 2022 com um belíssimo gol de falta na final do Campeonato Carioca contra o Flamengo, que ajudou a dar o título de campeão para o Glorioso.",
      "nome_completo": "Camila Cristina de Oliveira Cruz",
      "nascimento": "26/10/1990, Rio de Janeiro (RJ)",
      "altura": "1,61"
    },
    {
      "id": 18,
      "elenco": "feminino",
      "nome": "VITORINHA",
      "posicao": "meia",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/vitorinha.png",
      "descricao": "A atleta chegou ao Glorioso em 2022 para agregar a equipe com sua técnica. Vitorinha é o tipo de volante clássica com uma visão apurada, assim ela comanda o meio-campo alvinegro.",
      "nome_completo": "Josefa Victoria da Silva Souza",
      "nascimento": "14/08/1999, União dos Palmares (AL)",
      "altura": "1.61"
    },
    {
      "id": 19,
      "elenco": "feminino",
      "nome": "MAYARA VAZ",
      "posicao": "Meia atacante",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/mayara-vaz.png",
      "descricao": "Conhecida como o motorzinho da equipe, Mayara possui agilidade e velocidade com a bola nos pés. Meia experiente, possui passagem em clubes importantes no Brasil e pela China.",
      "nome_completo": "Mayara Andreia Vaz Moreira",
      "nascimento": "22/04/1995, Belém (PA)",
      "altura": "1.6"
    },
    {
      "id": 20,
      "elenco": "feminino",
      "nome": "ELISA",
      "posicao": "Atacante",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/elisa.png",
      "descricao": "Elisa iniciou sua trajetória no futsal, a transição para o campo ocorreu na sua ida para o Kindermann. Com o incentivo da família, a atacante seguiu buscando maiores objetivos. Ela se destaca pela sua inteligência, mobilidade e forte finalização",
      "nome_completo": "Elisa Lopes Amorim",
      "nascimento": "05/01/1998, São Francisco do Sul (SC)",
      "altura": "1,62"
    },
    {
      "id": 21,
      "elenco": "feminino",
      "nome": "KÉLEN",
      "posicao": "Atacante",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/kelen.png",
      "descricao": "A trajetória de Kelen no futebol iniciou em um campo de terra e de pés descalços, assim como a maioria das atletas. A atacante se destaca pela sua velocidade, habilidade, cabeceio e finalização. A atleta chegou ao Botafogo no ano de 2019, conquistando o acesso para a série A1 em 2020 e conta com dois títulos cariocas.",
      "nome_completo": "Kélen Bender",
      "nascimento": "21/02/1996, Passo Fundo (RS)",
      "altura": "1.76"
    },
    {
      "id": 22,
      "elenco": "feminino",
      "nome": "MAISA",
      "posicao": "atacante",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/maisa.png",
      "descricao": "A atacante iniciou sua trajetória no Inter de Limeira. Depois de se destacar na equipe do interior paulista, a atleta passou pela Ferroviária, em 2019, onde jogou nos últimos quatro anos. Maísa chega ao Botafogo para reforçar o ataque para a temporada de 2023, se destaca pela sua velocidade, agilidade e boa finalização.",
      "nome_completo": "Maisa Aparecida Caverzan",
      "nascimento": "23/06/2002, Limeira (SP)",
      "altura": "1.59"
    },
    {
      "id": 23,
      "elenco": "feminino",
      "nome": "KAMILLA",
      "posicao": "Atacante",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/kamilla.png",
      "descricao": "Kamilla se destaca na equipe pela sua garra em campo, boa técnica e visão de jogo. A atleta está no Botafogo desde 2021 e um dos seus jogos marcantes foi a final do Campeonato Carioca de 2022, onde marcou um gol fora da área, abrindo o placar na conquista sobre o Flamengo.",
      "nome_completo": "Kamilla Morais Sotero",
      "nascimento": "25/08/1994, Belo Horizonte (MG)",
      "altura": "1,64"
    },
    {
      "id": 24,
      "elenco": "feminino",
      "nome": "THAYNARA",
      "posicao": "Atacante",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/thaynara.png",
      "descricao": "Thaynara se destaca pela sua velocidade e boa finalização. A jogadora se apresenta na temporada 2023 das Gloriosas como uma das armas ofensivas da categoria.",
      "nome_completo": "Thaynara Virgílio Ribeiro",
      "nascimento": "02/07/2000, São Luís (MA)",
      "altura": "1.69"
    },
    {
      "id": 25,
      "elenco": "feminino",
      "nome": "VALÉRIA",
      "posicao": "atacante",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/valeria.png",
      "descricao": "Atacante de muita velocidade e agilidade para buscar a finalização. Valéria é do interior do Acre e iniciou sua carreira vestindo a camisa do Assermurb por 8 anos, após esse período passou por diversos clubes no Brasil até chegar na Europa, onde atuou por 4 temporadas. Em 2022, chegou ao Botafogo e agrega valor à equipe.",
      "nome_completo": "Valéria Paula de Lima",
      "nascimento": "08/07/1993, Plácido de Castro (AC)",
      "altura": "1,70"
    },
    {
      "id": 26,
      "elenco": "feminino",
      "nome": "DRIKA",
      "posicao": "Atacante",
      "imagem": "https://botafogo.com.br/images/futebol-feminino/perfil/drika.png",
      "descricao": "Natural do Maranhão, Drika se destaca em campo pela sua velocidade e agilidade em transitar na defesa adversária. O chute forte também é uma característica marcante em seu jogo.",
      "nome_completo": "",
      "nascimento": "12/01/1998, Coelho Neto (MA)",
      "altura": "1.58"
    }
  ]