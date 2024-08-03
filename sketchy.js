let currentPage = 0; // Variável para rastrear a página atual
let botaoSim, botaoNao;

function setup() {
  createCanvas(480, 800);
  loadPage();
}

function draw() {
  // O código de desenho agora é controlado pela função loadPage
}

function preload() {
  img1 = loadImage('https://i.imgur.com/tGUoAp6.jpeg');
  img2 = loadImage('https://i.imgur.com/FEYxsIM.jpeg');
  img3 = loadImage('https://i.imgur.com/dHXWlAh.jpeg');
  img4 = loadImage('https://i.imgur.com/noKh2MR.jpeg');
  img5 = loadImage('https://i.imgur.com/EUHfXjm.jpeg');
  img6 = loadImage('https://i.imgur.com/KOei4Es.jpeg');
  img7 = loadImage('https://i.imgur.com/U6SiT52.jpeg');
  img8 = loadImage('https://i.imgur.com/vVhPRe2.jpeg');
  img9 = loadImage('https://i.imgur.com/gv7bZhS.jpeg');
}

function loadPage() {
  // Remove os botões anteriores, se existirem
  if (botaoSim) botaoSim.remove();
  if (botaoNao) botaoNao.remove();

  if (currentPage === 0) {
    perguntaIdadeDez();
  } else if (currentPage === 1) {
    perguntaIdadeDoze();
  } else if (currentPage === 2) {
    perguntaIdadeQuatorze();
  } else if (currentPage === 3) {
    perguntaIdadeDezesseis();
  } else if (currentPage === 4) {
    perguntaIdadeDezoito();
  } // ☝🏻☝🏻 Páginas de perguntas de idade
  
    else if (currentPage === 5) {
    dezNaoFiccao();
  } else if (currentPage === 6) {
    dezNaoAnimacao();
  } else if (currentPage === 7) {
    dezNaoFantasia();
  } 
    else if (currentPage === 8) {
    dozeNaoAnimacao();
  }
    else if (currentPage === 9) {
    quatorzeNaoAnimacao();
  } 
    else if (currentPage === 10) {
    dezesseisNaoSuspense();
  } else if (currentPage === 11) {
    dezesseisNaoTerror();
  } 
    else if (currentPage === 12) {
    dezoitoNaoSuspense();
  } else if (currentPage === 13) {
    dezoitoSimTerror();
  } // ☝🏻☝🏻 Páginas de perguntas dos gêneros
  
    else if (currentPage === 14) {
    naoTemRecomendacao();
  } // ☝🏻☝🏻 Página de falta de recomendação

  else if (currentPage === 15) {
    harryPotter();
  } else if (currentPage === 16) {
    procurandoNemo();
  } else if (currentPage === 17) {
    extraTerrestre();
  } else if (currentPage === 18) {
    aViagemDeChihiro();
  } else if (currentPage === 19) {
    aChegada();
  } else if (currentPage === 20) {
    aIlhaDoMedo();
  } else if (currentPage === 21) {
    oSextoSentido();
  } else if (currentPage === 22) {
    garotaExemplar();
  } else if (currentPage === 23) {
    aMorteDoDemonio();
  } // ☝🏻☝🏻 Páginas dos filmes à serem recomendados
  
}

function perguntaIdadeDez() {
  background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você tem", 240, 210);
  text("10 anos ou mais?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 1;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 5;
    loadPage();
  });
}

function perguntaIdadeDoze() {
  background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você tem", 240, 210);
  text("12 anos ou mais?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 2;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 8;
    loadPage();
  });
}

function perguntaIdadeQuatorze() {
  background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você tem", 240, 210);
  text("14 anos ou mais?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 3;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 9;
    loadPage();
  });
}

function perguntaIdadeDezesseis() {
  background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você tem", 240, 210);
  text("16 anos ou mais?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 4;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 10;
    loadPage();
  });
}

function perguntaIdadeDezoito() {
  background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você tem", 240, 210);
  text("18 anos ou mais?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 13;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 12;
    loadPage();
  });
}



function dezNaoFiccao() {
  
    background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você gosta", 240, 210);
  textSize(40);
  text("de Ficção Científica?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 17;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 6;
    loadPage();
  });
  
}

function dezNaoAnimacao() {
  
    background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você gosta", 240, 210);
  text("de Animação?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 16;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 7;
    loadPage();
  });
  
}

function dezNaoFantasia() {
  
    background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você gosta", 240, 210);
  text("de Fantasia?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 15;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 14;
    loadPage();
  });
  
}


function dozeNaoAnimacao() {
  
    background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você gosta", 240, 210);
  text("de Animação?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 18;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 14;
    loadPage();
  });
  
}


function quatorzeNaoAnimacao() {
  
    background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você gosta", 240, 210);
  text("de Animação?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 19;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 14;
    loadPage();
  });
  
}


function dezesseisNaoSuspense() {
  
    background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você gosta", 240, 210);
  text("de Suspense?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 20;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 11;
    loadPage();
  });
  
}

function dezesseisNaoTerror() {
  
    background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você gosta", 240, 210);
  text("de Terror?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 21;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 14;
    loadPage();
  });
  
}


function dezoitoNaoSuspense() {
  
    background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você gosta", 240, 210);
  text("de Suspense?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 22;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 14;
    loadPage();
  });
  
}

function dezoitoSimTerror() {
  
    background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Você gosta", 240, 210);
  text("de Terror?", 240, 255);

  botaoSim = createButton("Sim");
  botaoSim.position(240, 500);
  botaoSim.mousePressed(() => {
    currentPage = 23;
    loadPage();
  });

  botaoNao = createButton("Não");
  botaoNao.position(240, 650);
  botaoNao.mousePressed(() => {
    currentPage = 14;
    loadPage();
  });
  
}


function naoTemRecomendacao() {
  
    background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(45);
  text("Não temos", 240, 185);
  text("recomendações", 240, 230);
  text("para seu perfil 😔", 240, 275);
  
}


function harryPotter() {
  
   background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Talvez você goste de:", 240, 210);
  textSize(45);
  text("Harry Potter!", 240, 255);

  image(img1,135, 415, 220, 350)
}

function procurandoNemo() {
  
   background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Talvez você goste de:", 240, 210);
  textSize(45);
  text("Procurando Nemo!", 240, 255);

  image(img2,135, 415, 220, 350)
}

function extraTerrestre() {
  
   background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Talvez você goste de:", 240, 210);
  textSize(38);
  text("E.T. - O Extraterrestre!", 240, 255);

  image(img3,135, 415, 220, 350)
}

function aViagemDeChihiro() {
  
   background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Talvez você goste de:", 240, 210);
  textSize(40);
  text("A Viagem de Chihiro!", 240, 255);

  image(img4,135, 415, 220, 350)
}

function aChegada() {
  
   background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Talvez você goste de:", 240, 210);
  textSize(50);
  text("A Chegada!", 240, 255);

  image(img5,135, 415, 220, 350)
}

function aIlhaDoMedo() {
  
   background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Talvez você goste de:", 240, 210);
  textSize(50);
  text("A Ilha do Medo!", 240, 255);

  image(img6,135, 415, 220, 350)
}

function oSextoSentido() {
  
   background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Talvez você goste de:", 240, 210);
  textSize(48);
  text("O Sexto Sentido!", 240, 255);

  image(img7,135, 415, 220, 350)
}

function garotaExemplar() {
  
   background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Talvez você goste de:", 240, 210);
  textSize(46);
  text("Garota Exemplar!", 240, 255);

  image(img8,135, 415, 220, 350)
}

function aMorteDoDemonio() {
  
   background("#B0E0E6");
  fill("#FFC0CB");
  stroke("#FF1493");
  strokeWeight(3);
  rect(42, 80, 400, 300);

  strokeWeight(0);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Talvez você goste de:", 240, 210);
  textSize(40);
  text(" A Morte do Demônio!", 240, 255);

  image(img9,135, 415, 220, 350)
}