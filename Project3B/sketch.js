

let xpos;
let ypos;
let xoffset;
let yoffset;
let xpos2;
let ypos2;
let xoffset2;
let yoffset2;

function setup() {
  createCanvas(windowWidth,windowWidth);
  background(47,94,162);
  noStroke();
  xoffset=random(0,3);
  yoffset=random(0,2)

  xoffset2=random(0,1);
  yoffset2=random(0,3);

}

function draw() {

xpos=noise(xoffset)*width;
ypos=noise(yoffset)*height;
fill(26,203,41);
circle(xpos,ypos,100);


xoffset=xoffset + 0.1;
yoffset= yoffset + 0.1;


xpos2=noise(xoffset2)*width;
ypos2=noise(yoffset2)*height;
fill(240,86,150);
rect(xpos2,ypos2,100);

xoffset2=xoffset2 + 0.09;
yoffset2=yoffset2 + 0.09;

}
