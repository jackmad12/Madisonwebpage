

let offset=0.0;
let offset1= 0.0;
let offset2= 0.0;
let offset3= 0.0;
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);

noLoop();
stroke(244,60,4);
}

function draw() {
  //Put draw code here
background(53,79,150);
// the waves made up of lines are almost like sound waves
for(let i= 0; i<width; i=i +10){
let lineh = noise(offset)*1000;
let lineb = noise(offset1)*1500;
line(i,lineb,i,lineh)

offset=offset  + 0.02;
offset1=offset1 + 0.02;

// the soundwave pattern reminds me of music, so I made it a bright color to represent upbeat, happy music
}
for(let j= 0; j<width; j=j +10){
let linet = noise(offset2)*500;
let linem = noise(offset3)*800;
line(j,linet,j,linem)

offset2=offset2  + 0.02;
offset3=offset3 + 0.02;
}
}
