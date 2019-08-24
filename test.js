
var radius = 50;

var biggest, smaller;
var Hexagons = 40;
var sensetive, maxRadius, minRadius;
var bg;
function setup() {
  frameRate(60);
  biggest = (windowWidth <= windowHeight ? windowHeight : windowWidth);
  smaller = (windowWidth >= windowHeight ? windowHeight : windowWidth);
  radius = biggest / Hexagons;
  maxRadius = radius + 0.5;
  minRadius = radius * 0.5;
  sensetive = 2.3;
  bg = loadImage("bg.jpg");
  y = height / 2;
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('bg');
}
var mode = false;
function mousePressed() {
  mode = !mode;
}
function draw() {
  if (mode) {
    mouseX = 0;
    mouseY = 0;

  }


  background(bg);
  var smesh = false;

  function dist(x1, y1, x2, y2) {
    function diff(num1, num2) {
      if (num1 > num2) {
        return (num1 - num2);
      } else {
        return (num2 - num1);
      }
    };
    var deltaX = diff(x1, x2);
    var deltaY = diff(y1, y2);
    var dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    return (dist);
  };
  var r;
  var mils = millis() / 3000;
  //Hex Array Create
  var HexArray = [];
  for (let posY = 0; posY <= height + 100; posY += radius * 2 * 3 / 4) {
    smesh = !smesh;
    HexArray.push([]);
    for (let posX = 0; posX <= width + 100; posX += sqrt(3) * radius) {
      var Hex = {
        x: posX + (smesh ? -sqrt(3) * radius / 2 : 0),
        y: posY,
        color: (map(Math.sin(posY / 2000 + posX / 1000 - mils), -1, 1, -255, 255, true)),
        transparent: (map(Math.sin(posY / 2000 + posX / 1000 - mils), -1, 1, 170, 225, true)),
        maxRadius: maxRadius - (map(Math.sin(posY / 2000 + posX / 1000 - mils), -1, 1, -1, 1, true)),
        minRadius: minRadius,
        radius: radius,
        angle: 30
      }
      HexArray[HexArray.length - 1].push(Hex);
    }
  }



  HexArray.forEach(innerArray => {
    innerArray.forEach(
      Hex => {
        //Use transforms
        Hex.radius = map(dist(mouseX, mouseY, Hex.x, Hex.y) / (radius * sensetive), 0, 1, Hex.minRadius, Hex.maxRadius, true);
        if (mode) {
          Hex.maxRadius = Hex.maxRadius;
          Hex.minRadius = 0;
          Hex.radius = map(abs(sin(dist(mouseX, mouseY, Hex.x, Hex.y) / (radius * sensetive) - mils)), 0, 1, Hex.minRadius, Hex.maxRadius, true);
          
        }
        //DRAW!
        drawHex(
          Hex.x,
          Hex.y,
          Hex.radius,
          Hex.angle,
          Hex.color,
          Hex.transparent);
      }
    );
  });
}

function drawHex(posX, posY, radius, angle = 0, color = 255, transparent = 255) {
  fill(color, color, color, transparent);
  noStroke();
  beginShape();
  for (let i = 0; i < 360; i += 360 / 6) {
    var rad = radians(i + angle);
    vertex(posX + Math.cos(rad) * radius, posY + Math.sin(rad) * radius);
  }
  return endShape(CLOSE);
}

function mouseClicked() {
  trigger = true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}