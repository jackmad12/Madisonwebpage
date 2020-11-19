



let angleR;
let offsetR;
let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;

let xpos;
let ypos;
let xoffset;
let yoffset;


function setup() {
  // make the canvas full screen in order to fill the background with one pattern and overlap the other patterns on top
  createCanvas(windowWidth,windowHeight);
  background(0,0,30);// the background; apart from the pattern; is dark to give a more gloomy atmosphere
  noFill();
  stroke(0,10);
  offset=0.0;






  noStroke();
  noLoop();
  angleMode(DEGREES);
  offsetR=0.0;




  for(let i=0; i < width; i = i + 20){
  for(let j=0; j < height; j = j + 20){
    let col = random(0,255);
    fill(col);
    circle(i,j,10);
  }
  }

xoffset= random(0,1);
yoffset= random(0,1);



}







function draw() {
  //Put draw code here



// the first part of the code that creates the background patterns
  var step = 40;
  for(var x = 0; x < 400; x = x + step){
  for(var y=0; y < 400; y = y + step){
    strokeWeight(3);
    fill(200,0,100);
    line(x,y,x+20,y+20);

  }

  }
  // creates a circle that moves randomly when the page is refreshed to act as a random background element
  xpos=noise(xoffset)*width;
  ypos=noise(yoffset)*height;
  fill(0,125,25);// the circle is an out of place color to catch the eye
  circle(xpos,ypos,100);

  xoffset=xoffset + 0.01;
  yoffset=yoffset + 0.01;



// the second part of the code that creates the background patterns. It has the circles with multiple shades of black and gray and creates a line of purple squares that is another part of the piece that is meant to catch the eye
  for(var s=0; s < 400; s = s + 20){
    fill(500,10,20);
    line(s,0,s,400);
  }
  for(var n=0; n < 800; n = n + 20){
    fill(500,10,20);
    line(0,0,n,800);
  }

  for(let t=0; t < width; t = t + 20){
    fill(100,0,200);
    rect(t,t,20);


  }

  for(let m=0; m < width; m = m + 20){
  fill(100,0,200);
  rect(m,0,20);

  }

  for(let h=0; h < width; h = h + 20){
  fill(100,0,200);
  rect(0,h,20);
  }
for (let i=0; i < width; i=i + 120){
for (let j=0;  j < height; j=j + 120){


// creates the moving squares to create a sense of order in the piece
push();
translate(i,j);
angleR=noise(offsetR) * 90;
rotate(angleR);
fill(0,70,100);
rect(0,0,100);
offsetR = offsetR + 0.01;
pop();




}


}
// creates the pattern in the corner of the screen that acts as a pattern that randomly enters the page
for (i = 0; i <= 400; i = i + 20) {
   for (j = 0; j <= 400; j = j + 20) {
     ellipse(i, j, 15, 15);
     distance = dist(mouseX, mouseY, i, j);
     if (distance < 50) {
       fill(106,46,46);
       r = 20;
     } else {
       fill(76,5,76);
       r = distance / 15;
     }
     ellipse(i, j, r, r);
   }
 }
 // creates random shapes that change each time the page is refreshed
x1=noise(offset)*width;
x2=noise(offset+10)*width;
x3=noise(offset+20)*width;
x4=noise(offset+30)*width;

y1=noise(offset+50)*width;
y2=noise(offset+60)*width;
y3=noise(offset+70)*width;
y4=noise(offset+80)*width;

bezier(x1,y1,x2,y2,x3,y3,x4,y4);
offset=offset + 0.01;


}
