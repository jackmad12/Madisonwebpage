let brainimage1;
let circleWidth;
let musicimage;
let paintimage;
let spongebobimage;
let musicnotes;
let x = 0;
let y = 0;
let m= 0;
let t= 0;

function preload(){

brainimage1= loadImage('https://i.imgur.com/hoyClz6.jpg');
musicimage= loadImage('https://i.imgur.com/QIhH4kc.jpg');
paintimage= loadImage('https://i.imgur.com/ICMPqwH.jpg');
spongebobimage= loadImage('https://i.imgur.com/4pfwzTn.jpg');
musicnotes= loadImage('https://i.imgur.com/6lvK4Ib.png');


}


function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);

noStroke();
 circleWidth= width/4;




}

function draw() {







//the background image is a colorful brain that is directed toward the right side of the screen. This is meant to represent the right side of the brain, which is the more creative side
  background(brainimage1);


  //the music notes image and the paint image highlight the fact that the right side of the brain is the creative side
  image(musicimage,940,450,300,300);
image(paintimage,15,450,300,300);
//the spongebob image represents imagination, like the scene that this image came from
image(spongebobimage,200,235,350,350);

//the blended effects on the photos adds a sort of unusual, quirky feel to the piece
blend(paintimage,250,100,250,250,1000,300,250,250,SCREEN);
blend(musicimage,200,0,300,300,300,300,300,300,SCREEN);
blend(spongebobimage,200,0,300,300,300,300,300,300,BURN);

image(musicnotes,x,0,200,200);
x = x + 1;

image(musicnotes,t,250,200,200);
t = t + 6;


image(musicnotes,y,450,200,200);
y = y + 3;

image(musicnotes,m,450,200,200);
m = m + 10;










  y++;
  if (y > height) {
  y = 0;
  }






}
// when the keys are pressed, random colored circles will appear and will layer on top of each other. They will also be a different color each time they appear
function keyPressed(){

let keyIndex= -1;
if(key>= 'a' && key <= 'z'){
keyIndex= key.charCodeAt(0) -'a'.charCodeAt(0);


}

if(keyIndex === -1){
background(230);


}
else{

randFill_r=Math.floor(Math.random() * 255 + 1);
randFill_g=Math.floor(Math.random() * 255 + 1);
randFill_b=Math.floor(Math.random() * 255 + 1);
fill(randFill_r,randFill_g,randFill_b);
let x= map(keyIndex, 0, 25, 0, width-circleWidth);
circle(x,0,circleWidth,height);




}




}
