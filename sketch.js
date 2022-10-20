var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;


function preload() {
  //carregar imagem da path

  //carregar imagem do boy

}

function setup() {

  createCanvas(400, 400);


  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;


  boy = createSprite(180, 340, 30, 30);
  boy.scale = 0.08;
  boy.addAnimation("JakeRunning", boyImg);

  //  (Limite) esquerdo
  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  //(limite) direito
  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;

  // menino se movendo no eixo X com o mouse
  boy.x = World.mouseX;

  //bordas
  edges = createEdgeSprites();

  //colidindo com as bordas 
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //código para reiniciar o fundo
  if (path.y > 400) {
    path.y = height / 2;
  }

  drawSprites();
}
