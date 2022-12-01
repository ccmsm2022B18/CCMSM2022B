function setup() {
  createCanvas(400, 400);
}
//variaveis da bolinha
let xBol=200;
let yBol=200;
let diametro=50;
let velocidadeX=1;
let velocidadey=1
//variaveis da raquete
let eux=20;
let euy=150;
let eul =10;
let eua=50;
function draw() {
  
  background(0);
  //desenha a bolinha
circle(xBol, yBol, diametro);
  //movimenta a bolinha
  xBol +=velocidadeX;
  yBol +=velocidadey;
  //faz a bolinha voltar quando bate na direita
  if (xBol+diametro/2>=400){
    velocidadeX*=-1;
 
  }
  //faz a bolinha voltar quando bate na esquerda
  if (xBol-diametro/2<=0) {
    velocidadeX*=-1
  }
  rect(10,150,10,50);
}