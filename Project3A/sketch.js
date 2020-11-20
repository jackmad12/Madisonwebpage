




let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let x4;
let y4;

let offset;

function setup() {
  // make the canvas full screen in order to fill the background with one pattern and overlap the other patterns on top
  createCanvas(windowWidth,windowHeight);
  background(118,94,135);// the background; apart from the pattern; is dark to give a more gloomy atmosphere
  noFill();
  stroke(245,217,131);
  offset=0.0;









  }



function draw() {
  //Put draw code here


   // creates random shapes that change each time the page is refreshed
  x1=noise(offset)*width;
  x2=noise(offset+10)*width;
  x3=noise(offset+20)*width;
  x4=noise(offset+30)*width;




  y1=noise(offset+50)*height;
  y2=noise(offset+60)*height;
  y3=noise(offset+70)*height;
  y4=noise(offset+80)*height;





  bezier(x1,y1,x2,y2,x3,y3,x4,y4);
  offset=offset + 0.01;











}
