
function setup() {
  createCanvas(windowWidth, windowHeight);
}
var radius = 50;
function draw() {
  clear();
  background(25);
  var smesh = false;
  for (let posY = 0; posY <= height+100; posY += radius * 2 * 3 / 4) {
    smesh = !smesh;
    var mils = millis()/1000;
    for (let posX = 0; posX <= width+100; posX += sqrt(3) * radius  ) {
      drawHex(
        posX+(smesh?-sqrt(3) * radius/2:0),
        posY,
        radius/2-(Math.cos(posY/2000+posX/1000-mils)*radius/2),
        30,
        50+Math.sin(posY/2000+posX/1000-mils)*128);
    }
  }
  //drawHex(mouseX,mouseY,20,ang,Math.sin(-millis()/1000)*200);


}

function drawHex(posX, posY, radius, angle = 0, color = 255) {
  fill(color);
  noStroke();
  beginShape();
  for (let i = 0; i < 360; i += 360 / 6) {
    var rad = radians(i + angle);
    vertex(posX + Math.cos(rad) * radius, posY + Math.sin(rad) * radius);
  }
  return endShape(CLOSE);

}

function mouseClicked() {

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}