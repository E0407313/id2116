let on = false;
let bulbOn;
let bulbOff;


function setup() { 
  createCanvas(400, 400);
  bulbOn = loadImage("images/bulb_on.png");
  bulbOff = loadImage("images/bulb_off.png");
} 


function draw() { 
 
  background(220);
  
  if (on) {
    //draw bulbOn image at the coordinate x:0 y:0
    background(bulbOn);
  } else {
    background(bulbOff);
  }
}

function mousePressed() {
  if (on) {
    on = false;
  } else {
    on = true;}
}