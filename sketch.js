//Link para o Vídeo:
//https://youtu.be/ubhU1Sx2EGM

//coordenadas dos botoes na tela
var tela = 1
var largura = 200
var altura = 50
var xMenu = 155
var yMenu1 = 145
var yMenu2 = 225
var yMenu3 = 295

//Posição do balão
var xbalao = 225
var ybalao = 335

//Movimentação das nuvens 
var xnuvem1 = 275;
var ynuvem1 = 170
var xnuvem2 = 10;
var ynuvem2 = 30
var xnuvem3 = -200;
var ynuvem3 = 40;
var xnuvem4 = 10
var ynuvem4 = 130

//Nuvens secudarias
var Nuvem_secund1 = [], xsecund1 = [], ysecund1 = []

//Balões e nuvens da fase 2
var xbalao_pensamento = -10
var ybalao_pensamento = 100
var xbalao_grito = -10
var ybalao_grito = 80
var xbalao_dialogo = -10
var ybalao_dialogo = 125
var xbalao_conversa = 20
var ybalao_conversa = 225

var Nuvem_secund2 = [], xsecund2 = [], ysecund2 = []

//Posição dos botões de voltar
var xback = 2
var yback = 5
var alturaBack = 25
var larguraBack = 50

//Posições do botão continuar
var xcontinue = 220
var ycontinue = 345
var alturacontinue = 25
var larguracontinue = 75

//Jogar novamente
var xnovamente_sim = 125
var ynovamente_sim = 275
var xnovamente_nao = 275
var ynovamente_nao = 275
var altura_novamente = 50
var largura_novamente = 100


//textos
var  Text1 = "Encontre a nuvem que representa a onomatopéia dos"+"\n"+"quadrinhos e gibis"+"\n"+"de uma pessoa dormindo"

var Text2 = "Crianças do 1°ano do ensino fundamental em diante."+"\n"+"\n"+"Disciplina: Português"

var Text3 = "Objetivo do jogo - (EF15LP14)"+"\n"+"e"+"\n"+"como jogar:"+"\n"+"\n"+"Para aprender um pouco mais sobre o sentido"+"\n"+ "dos quadrinhos e gibis, use as setas do teclado"+"\n"+ "para movimentar o balão de ar e encontrar as nuvens"+"\n"+"com as onomatopéias e os tipos de balões"+"\n"+ "que pedem no enunciado."

var Text4 = "Olá amiguinho, você sabe o que São onomatopéias?"+"\n"+"\n"+"\n"+"Onomatopéias são palavras que representam"+"\n"+ "os sons a nossa volta"+"\n"+ "como o de animais e ações que nós humanos realizamos"+"\n"+"\n"+"Para aprender um pouco mais sobre esse assunto"+"\n"+ "use as setas do teclado e faça o que o enuciado pede!"

var Text5 = "Agora que você aprendeu um pouco mais sobre"+"\n"+"as Onomatopéias que encontramos nos quadrinhos e gibis"+"\n"+"Vamos aprender um pouco mais sobre os tipos de balões "+"\n"+"que podem expressar pensamentos, falas e outras ações"

var  Text6 = "Encontre o balão que representa o diálogo (conversa) "+"\n"+"dos quadrinhos e gibis"+"\n"+"de um único personagem"

//Colisões FASE 1
var colision, contato;
var colision2, contato2;
var colision3, contato3;
var colision_AA, contato_AA;
var colision_Nuvem_secund1, contato_Nuvem_secund1;

//Colisões FASE 2
var colision_1, contato_1
var colision_2, contato_2
var colision_3, contato_3
var colision_Nuvem_secund2, contato_Nuvem_secund2
var colision_balao_errado, contato_balao_errado

//Score fase 1 e Vida
Score_fase1 = 0
Vida_fase1 = 3

//Score fase 2 e Vida
Score_fase2 = 0
Vida_fase2 = 3






let img;
function preload() {
  img = loadImage('fundo-tela1.jpg');
  fund1 = loadImage('Fundo-jogo.jpg');
  fund2 = loadImage('assets/fundo/fundo_tela.jpg');
  fund3 = loadImage('assets/fundo/Fundo_fase2.jpg');
  fund2_1 = loadImage('assets/fundo/fundo_tela.jpg');
  fund4 = loadImage('assets/fundo/Game over.jpg');
  fund5 = loadImage('assets/fundo/Vitoria.jpg');
  balao = loadImage('assets/balão-jogo2.png');
  plataforma = loadImage('plataforma-jogo.png');
  nuvem1 = loadImage('assets/Nuvem_grito.png');
  nuvem2 = loadImage('assets/Nuvem_sono.png');
  nuvem3 = loadImage('assets/Nuvem-Toc-Toc.png');
  nuvem4 = loadImage('assets/Nuvem-AuAu.png');
  for(i=0;i<2;i++){
    Nuvem_secund1[i] = loadImage('assets/Nuvem-esquerda.png');
 }
  for(j=0;j<2;j++){
    Nuvem_secund2[j] = loadImage('Fase2/nuvem_direita.png');
  }
  balao_conversa = loadImage('Fase2/balão_conversas.png');
  balao_dialogo = loadImage('Fase2/balão_dialogof2.png');
  balao_grito = loadImage('Fase2/balão_gritof2.png');
  balao_pensamento = loadImage('Fase2/balão_pensamentof2.png');
  desen = loadImage('Desenvolvedor_Vinícius_.jpg');
  orient = loadImage('Orientadora_Elizabeth_.jpg');
  
  
//Sons
soundFormats('mp3')
  song  = loadSound("Music/Caketown 1.mp3");
  song2 = loadSound("Music/happy.mp3");
  song3 = loadSound("Music/forest.mp3");
  song4 = loadSound("Music/Intro Theme.mp3");
}



function setup() {
  createCanvas(500, 450);
  song.play()
  //Movimentação das nuvens secundárias
  for(i=0;i<2;i++){
    xsecund1[i] = 10
    ysecund1[i] = 230-(160*i)
  }
  
  for(j=0;j<2;j++){
    xsecund2[j] = 10
    ysecund2[j] = 200-(130*j)
  }
  //if(tela==1){
    
  //}
  
}


function draw() {
  
  //Tela do Menu
  if(tela == 1){
  image(img, 2, -15, 500, 470);
  //menu com 3 opções
 
  //Nome do jogo 
  textStyle(NORMAL) 
  textAlign(CENTER);
  fill(250, 0, 150);
  stroke(230);
  textSize(23);
  text("BALÃO DOS QUADRINHOS", 255, 110);
    
  fill(240);
  stroke(200);
  textSize(15);
  text("Clique"+"\n"+"com"+"\n"+"o mouse!",400, 300)
    
   //inicar jogo 
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
  fill(100,0,100);
  rect(xMenu, yMenu1, largura, altura, 15);
    if(mouseIsPressed){
      tela = 1.1
    }
  }
  //Nome Iniciar
  textStyle(NORMAL)
  textAlign(CENTER);
  textSize(26);
  fill(240);
  text("Iniciar", 260, 180);
  
  //instruções do jogo
   if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
   fill(100,0,100);
   rect(xMenu, yMenu2, largura, altura, 15);
    if(mouseIsPressed){
      tela = 3
    }
 }
  //Nome "Instruções"  
  fill(240);
  text("Instruções", 260, 255);
  
  
  //Créditos do jogo
   
  if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
   fill(100,0,100);
   rect(xMenu, yMenu3, largura, altura, 15);
     if(mouseIsPressed){
      tela = 4
    }
 }
  fill(240);
  text("Créditos", 260, 330);
  
}
  
  //Saudações
  else if(tela == 1.1){
  createCanvas(500,450)
  image(fund2, 0, 0, 500,450);
  textStyle(NORMAL) 
  textAlign(CENTER);
  fill(20);
  stroke(100);
  textSize(17);
  text(Text4, 250, 150);
    
  textStyle(NORMAL)
  textAlign(CENTER);
  textSize(26);
  fill(200,0,200);
  text("VAMOS PARA A FASE 1",250, 110)
    
    
  }
  
  //Jogo na ativa - FASE 1
  else if(tela == 2){
    song.stop()
    
  createCanvas(500,450)
   image(fund1, -100, -20, 1000, 1000);
   image(balao, xbalao, ybalao);
   image(plataforma,-10,350,700, 200);
   image(nuvem1, xnuvem1, ynuvem1);
   image(nuvem2, xnuvem2, ynuvem2);
  
   
  //Text1
  textStyle(NORMAL) 
  textAlign(CENTER);
  fill(20);
  stroke(10)
  textSize(15);
  text(Text1, 250, 30);
    
  //score fase 1
  fill(20);
  stroke(10)
  textSize(15);
  text("Pontos:"+"\n"+Score_fase1+"/3", 470, 45);
    
  //vidas fase 1
  fill(20);
  stroke(10)
  textSize(15);
  text("Vidas:"+"\n"+Vida_fase1+"/3", 30, 45);
  
  //Movimentação do balão 
  if (xbalao>-15){
    if (keyIsDown(LEFT_ARROW)){
   xbalao-=1.7;
    }
  }
  if (xbalao<=430){
    if (keyIsDown(RIGHT_ARROW)){
   xbalao+=1.7;
    }
  }
  if (ybalao>-15){
    if (keyIsDown(UP_ARROW)){
   ybalao-=1.7;
    }
  }
  if (ybalao<335){
     ybalao+=0.3
   if (keyIsDown(DOWN_ARROW)){
    ybalao+=1.7;
   }
  }
    
    // Movimento das Nuvens
    xnuvem1 = xnuvem1 - 2
    if(xnuvem1<-150){
      xnuvem1 = 420
    }
    xnuvem2 = xnuvem2 + 2
     if(xnuvem2>530){
      xnuvem2 =-150
    }
   
    
    
    //Colisão da primeira onomatopeia "ZZZ"
    colision = collideRectRect(xbalao,ybalao,40,40,xnuvem2,ynuvem2,35,65);
    
    if(colision){
      contato = true
    }
   if(contato){
     ybalao = 335
     contato = false
     ynuvem2 = -200
     Score_fase1++
    Text1 = "Parabéns, agora encontre a onomatopéia" +"\n"+ "de alguém batento na porta"
     
     
   } 
    
    //Colisão da nuvem errada "AAAAA"
    colision_AA = collideRectRect(xbalao,ybalao,40,40,xnuvem1,ynuvem1,35,65);
    
    if(colision_AA){
      contato_AA = true
    }
   if(contato_AA){
     ybalao = 335
     contato_AA = false
     Vida_fase1--
    Text1 = "Você atingiu a nuvem errada, tente novamente"+"\n"+"Cuidado com suas vidas"
     
   } 
    if(ynuvem2 == -200){
      for(i=0;i<2;i++){
      image(Nuvem_secund1[i],xsecund1[i],ysecund1[i])
      }
      image(nuvem3, xnuvem3, ynuvem3)
    xnuvem3 = xnuvem3 + 2 
     if(xnuvem3>530){
      xnuvem3 =-150
        }
      
      //Colisão com as nuvens erradas, desafios, indo para a esquerda
    for(i=0;i<2;i++){
      colision_Nuvem_secund1 = collideRectRect(xbalao,ybalao,40,40,xsecund1[i],ysecund1[i],35,65);
    
    if(colision_Nuvem_secund1){
      contato_Nuvem_secund1 = true
    }
   if(contato_Nuvem_secund1){
     ybalao = 335
     contato_Nuvem_secund1 = false
     Vida_fase1--
    Text1 = "Você colidiu com a nuvem errada, tente novamente"+"\n"+"Cuidado com suas vidas"
    
       } 
      }
      colision2 = collideRectRect(xbalao,ybalao,40,40,xnuvem3,ynuvem3,35,65);
    }
     //Colisão segunda onomatopeia "TOC TOC"
   
    if(colision2){
      contato2 = true
    }
   if(contato2){
     ybalao = 335
     contato2 = false
     ynuvem3 = -200
     Score_fase1++
    Text1 = "Parabéns, agora encontre a onomatopéia do som"+"\n"+"que o cachorro faz"
    
   } 
    
    //movimentação das nuvens secundarias para esquerda
   for(i=0;i<2;i++){
      xsecund1[i] = xsecund1[i] - (2 + (i*0.5))
    if(xsecund1[i]<-150){
      xsecund1[i] = 420
      }
    
    }
    
 
    
    if(ynuvem3 == -200){
     
      
      image(nuvem4, xnuvem4, ynuvem4)
    xnuvem4 = xnuvem4 - 2 
     if(xnuvem4<-150){
      xnuvem4 = 420
    }
      
      //Colisão com a nuvem com a onomatopeia "AU AU"
        colision3 = collideRectRect(xbalao,ybalao,40,40,xnuvem4,ynuvem4,35,65);
    
    if(colision3){
      contato3 = true
    }
   if(contato3){
     ybalao = 335
     contato3 = false
     ynuvem4 = -200
     ynuvem1 = -200
     Score_fase1++
     for(i=0;i<2;i++){
      ysecund1[i] = -600
           }
     song4.stop();
     song.play()
     tela = 2.1
      } 
      
    }  
    
}
  
  //Instrução segunda Fase
  else if(tela == 2.1){
  
  image(fund2_1, 0, 0, 500, 450);
  textStyle(NORMAL) 
  textAlign(CENTER);
  fill(20);
  stroke(100);
  textSize(15.7);
  text(Text5, 250, 200);
    
  textStyle(NORMAL)
  textAlign(CENTER);
  textSize(26);
  fill(200,0,200);
  text("VAMOS PARA A FASE 2",250, 120)
    
    
    //CONTINUAR PARA A FASE 2
  if(tela == 2.1){
    if(mouseX > xcontinue && mouseX < xcontinue + larguracontinue && mouseY > ycontinue && mouseY < ycontinue + alturacontinue){
  stroke(240);
  rect(xcontinue, ycontinue, larguracontinue, alturacontinue, 15)
      if(mouseIsPressed){
       song.stop()
       song4.loop() 
      tela = 2.2
    }
   }
  
  fill(240,100,25);
  rect(xcontinue, ycontinue, larguracontinue, alturacontinue, 15)
  fill(240);
  textSize(15)
  text("Continuar", 257, 362);
 }
  }
  
  //FASE 2!!
  else if(tela == 2.2){
  createCanvas(500,450)
  image(fund3, 0,0,0,0);
  image(balao, xbalao, ybalao);
  image(plataforma,-10,350,700, 200);
  image(balao_conversa,xbalao_conversa,ybalao_conversa);
  image(balao_dialogo,xbalao_dialogo,ybalao_dialogo); 
    
    //Enunciado
  fill(20);
  stroke(10)
  textSize(15);
  text(Text6, 250, 30);
    
  //score fase 2
  fill(20);
  stroke(10)
  textSize(15);
  text("Pontos:"+"\n"+Score_fase2+"/3", 470, 45);
    
  //vidas fase 2
  fill(20);
  stroke(10)
  textSize(15);
  text("Vidas:"+"\n"+Vida_fase2+"/3", 30, 45);
    
   //Movimentação do balão 
  if (xbalao>-15){
    if (keyIsDown(LEFT_ARROW)){
   xbalao-=1.7;
    }
  }
  if (xbalao<=430){
    if (keyIsDown(RIGHT_ARROW)){
   xbalao+=1.7;
    }
  }
  if (ybalao>-15){
    if (keyIsDown(UP_ARROW)){
   ybalao-=1.7;
    }
  }
  if (ybalao<335){
     ybalao+=0.3
   if (keyIsDown(DOWN_ARROW)){
    ybalao+=1.7;
   }
  }
    
  
        // Movimento dos balões
    xbalao_conversa = xbalao_conversa - 2.5
      if(xbalao_conversa<-150){
      xbalao_conversa = 420
    }
    xbalao_dialogo = xbalao_dialogo + 2.3
     if(xbalao_dialogo>530){
      xbalao_dialogo =-150
    }
    
    //Colisão da balao errado 
    colision_balao_errado = collideRectRect(xbalao,ybalao,40,40,xbalao_conversa,ybalao_conversa,35,65);
    
    if(colision_balao_errado){
      contato_balao_errado = true
    }
   if(contato_balao_errado){
     ybalao = 335
     contato_balao_errado = false
     Vida_fase2--
    Text1 = "Você atingiu a nuvem errada, tente novamente"+"\n"+"Cuidado com suas vidas"
   }
    
    //Colisão balao certo - Balão diálogo
   colision_1 = collideRectRect(xbalao,ybalao,40,40,xbalao_dialogo,ybalao_dialogo,35,60);
    
    if(colision_1){
      contato_1 = true
    }
   if(contato_1){
     ybalao = 335
     contato_1 = false
     Score_fase2++
     ybalao_dialogo = -200
    Text6 = "Parabens, agora encontre o balão"+"\n"+ "que representa grito"
      }
    
    if( ybalao_dialogo == -200){
      
      image(balao_grito, xbalao_grito, ybalao_grito);
       for(j=0;j<2;j++){
      image(Nuvem_secund2[j],xsecund2[j],ysecund2[j], 90, 40)
      }
      
    // Movimento balao GRITO
       xbalao_grito = xbalao_grito + 2.3
     if(xbalao_grito >530){
      xbalao_grito  =-150
    }
      
    // colisão balao GRITO
        colision_2 = collideRectRect(xbalao,ybalao,40,40,xbalao_grito,ybalao_grito,35,65);
      
    if(colision_2){
      contato_2 = true
    }
   if(contato_2){
     ybalao = 335
     contato_2 = false
     Score_fase2++
     ybalao_grito = -200
    Text6 = "parabens, agora encontre o balão"+"\n"+"que representa Pensamento"
      }
    
    
    //colisão nuvens desafios
    
     for(j=0;j<2;j++){
      colision_Nuvem_secund2 = collideRectRect(xbalao,ybalao,40,40,xsecund2[j],ysecund2[j],60,40);
    
    if(colision_Nuvem_secund2){
      contato_Nuvem_secund2 = true
    }
   if(contato_Nuvem_secund2){
     ybalao = 335
     contato_Nuvem_secund2 = false
     Vida_fase2--
    Text1 = "Você colidiu com a nuvem errada, tente novamente"+"\n"+"Cuidado com suas vidas"
    
       } 
      }
    
   //movimentação das nuvens secundarias para direita
    for(j=0;j<2;j++){
      xsecund2[j] = xsecund2[j] + (2 + (j*0.7))
    if(xsecund2[j]>530){
      xsecund2[j] = -150
      }
    }
  }
    
    if( ybalao_grito == -200){
      image(balao_pensamento, xbalao_pensamento, ybalao_pensamento);
      
      //Movimento balão PENSAMENTO
       xbalao_pensamento = xbalao_pensamento + 2.3
     if(xbalao_pensamento >530){
      xbalao_pensamento  =-150
     }
      //colisão balao PENSAMENTO
      
            colision_3 = collideRectRect(xbalao,ybalao,40,40,xbalao_pensamento,ybalao_pensamento,35,65);
      
   if(colision_3){
  contato_3 = true
     }
    if(contato_3){
     ybalao = 335
     contato_3 = false
     Score_fase2++
     ybalao_pensamento = -200
     Text6 = "You win"
      song4.stop()
      song2.play()
      tela = 6
      }
  }
}
  
  //Informações
  else if(tela == 3){
  textAlign(CENTER);
  textSize(26);
  background(150, 0, 150)
  fill(240);
  stroke(20);
  text("Público alvo:", 250, 40);
    
  //Textos
  textSize(16);
  fill(240);
  stroke(20);
  text(Text2, 250, 100);
    
  textSize(16);
  fill(240);
  stroke(20);
  text(Text3, 250, 220);
  }

  
  //Créditos
  else if(tela == 4){
  
  background(150, 0, 150);
  image(desen, 50, 75, 175, 230);
  image(orient, 300, 75, 150, 230); 
  textAlign(CENTER);
  textSize(26);
  fill(240);
  stroke(20);
  text("Créditos", 250, 50);
    
  //Textos
  textSize(15);
  fill(240);
  stroke(20);
  text("Carlos Vinícius"+"\n"+"de Souza Rodrigues:"+"\n"+"\n"+"Programador", 140, 320);
  text("Elizabeth de Souza"+"\n"+"Lima Rodrigues:"+"\n"+"\n"+"Educadora",375, 320)
    
    
  }
  
  //Tela Game Over
  else if(tela == 5){
  
   createCanvas(500,450) 
   image(fund4, 0, 0, 500, 450);
   fill(240,0,0) 
   rect(100, 125, 300, 300);
   rect(0, 30, 500, 50);
    
  //Text Game Over
  fill(20);
  stroke(10)
  textSize(40);
  text("GAME OVER", 250, 70);
    
  //Text pergunta?
  fill(20);
  stroke(10)
  textSize(20);
  text("Deseja jogar novamente?", 250, 200);
    
  //Teclas para jogar novamente ou não 
  
    if(mouseX > xnovamente_sim && mouseX < xnovamente_sim + largura_novamente && mouseY > ynovamente_sim && mouseY < ynovamente_sim + altura_novamente){
  stroke(240);
  rect(xnovamente_sim, ynovamente_sim, largura_novamente, altura_novamente, 15)
      if(mouseIsPressed){
       song3.stop() 
       song4.loop() 
      tela = 2
    }
  }
  
  fill(240,100,25);
  rect(xnovamente_sim, ynovamente_sim, largura_novamente, altura_novamente, 15);
  fill(240);
  textSize(20)
  text("Sim", 173, 307);
      
    stroke(0)
    if(mouseX > xnovamente_nao && mouseX < xnovamente_nao + largura_novamente && mouseY > ynovamente_nao && mouseY < ynovamente_nao + altura_novamente){
  stroke(240);
  rect(xnovamente_nao, ynovamente_nao, largura_novamente, altura_novamente, 15)
      if(mouseIsPressed){
       song3.stop()  
       song.play() 
      tela = 1
    }
  } 
 
  fill(240,100,25);
  rect(xnovamente_nao, ynovamente_nao, largura_novamente, altura_novamente, 15);
  fill(240);
  textSize(20)
  text("Não", 324, 307);
    
    
    
    
}
  
  //Tela Vitória
  else if(tela == 6){
   createCanvas(500,450) 
   image(fund5, 0, 0, 500, 450);
   fill(0,0,240) 
   rect(80, 125, 350, 300);
   rect(0, 30, 500, 50);
    
  //Text Você venceu
  fill(20);
  stroke(10)
  textSize(40);
  text("VOCÊ VENCEU!!!", 250, 70);
    
    
    //Text pergunta?
  fill(20);
  stroke(10)
  textSize(20);
  text("Deseja jogar novamente?", 260, 200);
    
   //Teclas para jogar novamente ou não (ganhou)
  
    if(mouseX > xnovamente_sim && mouseX < xnovamente_sim + largura_novamente && mouseY > ynovamente_sim && mouseY < ynovamente_sim + altura_novamente){
  stroke(240);
  rect(xnovamente_sim, ynovamente_sim, largura_novamente, altura_novamente, 15)
      if(mouseIsPressed){
      song2.stop()  
      song4.loop() 
      tela = 2
    }
  }
  
  fill(240,100,25);
  rect(xnovamente_sim, ynovamente_sim, largura_novamente, altura_novamente, 15);
  fill(240);
  textSize(20)
  text("Sim", 173, 307);
    
     stroke(0)
    if(mouseX > xnovamente_nao && mouseX < xnovamente_nao + largura_novamente && mouseY > ynovamente_nao && mouseY < ynovamente_nao + altura_novamente){
  stroke(240);
  rect(xnovamente_nao, ynovamente_nao, largura_novamente, altura_novamente, 15)
      if(mouseIsPressed){
      song2.stop()  
      song.play()  
      tela = 4
    }
  } 
 
  fill(240,100,25);
  rect(xnovamente_nao, ynovamente_nao, largura_novamente, altura_novamente, 15);
  fill(240);
  textSize(20)
  text("Não", 324, 307);
    
    
     ynuvem1 = 170;
    ynuvem2 = 30;
    ynuvem3 = 40;
    ynuvem4 = 130
    ybalao_dialogo = 125;
    ybalao_grito = 80;
    ybalao_pensamento = 100;
    Vida_fase1 = 3;
    Vida_fase2 = 3
    Score_fase1 = 0;
    Score_fase2 = 0;
    xbalao = 225;
    ybalao = 335;
     for(j=0;j<2;j++){
    xsecund2[j] = 10
    ysecund2[j] = 200-(130*j)
     for(i=0;i<2;i++){
    xsecund1[i] = 10
    ysecund1[i] = 230-(160*i)
     }
    } 
    Text1 = "Encontre a nuvem que representa a onomatopéia dos"+"\n"+"quadrinhos e gibis"+"\n"+"de uma pessoa dormindo"
     Text6 = "Encontre o balão que representa o diálogo (conversa) "+"\n"+"dos quadrinhos e gibis"+"\n"+"de um único personagem"
}
  
  
    

  
  //Voltar e continuar
  if(tela == 1.1 || tela == 3 || tela == 4){
    if(mouseX > xback && mouseX < xback + larguraBack && mouseY > yback && mouseY < yback + alturaBack){
  stroke(240);
  rect(xback, yback, larguraBack, alturaBack, 15)
      if(mouseIsPressed){
      tela = 1
    }
   }
  
  fill(240,100,25);
  rect(xback, yback, larguraBack, alturaBack, 15)
  fill(240);
  textSize(15)
  text("Voltar", 27, 23);
 }
  stroke(0)
   if(tela == 1.1){
    if(mouseX > xcontinue && mouseX < xcontinue + larguracontinue && mouseY > ycontinue && mouseY < ycontinue + alturacontinue){
  stroke(240);
  rect(xcontinue, ycontinue, larguracontinue, alturacontinue, 15)
      if(mouseIsPressed){
      song4.loop()  
      tela = 2
    }
   }
 
  fill(240,100,25);
  rect(xcontinue, ycontinue, larguracontinue, alturacontinue, 15)
  fill(240);
  textSize(15)
  text("Continuar", 257, 362);
 }
    
  //Morte
  if(Vida_fase1 ==0 || Vida_fase2 == 0){
    song4.stop()
    song3.play()
    ynuvem1 = 170;
    ynuvem2 = 30;
    ynuvem3 = 40;
    ynuvem4 = 130
    ybalao_dialogo = 125;
    ybalao_grito = 80;
    ybalao_pensamento = 100;
    Vida_fase1 = 3;
    Vida_fase2 = 3
    Score_fase1 = 0;
    Score_fase2 = 0;
    xbalao = 225;
    ybalao = 335;
     for(j=0;j<2;j++){
    xsecund2[j] = 10
    ysecund2[j] = 200-(130*j)
     for(i=0;i<2;i++){
    xsecund1[i] = 10
    ysecund1[i] = 230-(160*i)
   }
  }
    Text1 = "Encontre a nuvem que representa a onomatopéia dos"+"\n"+"quadrinhos e gibis"+"\n"+"de uma pessoa dormindo"
    tela = 5;
     Text6 = "Encontre o balão que representa o diálogo (conversa) "+"\n"+"dos quadrinhos e gibis"+"\n"+"de um único personagem"
     
   }
  
}

   
