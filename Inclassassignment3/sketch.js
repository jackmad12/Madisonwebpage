
function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(80,110,130);

for(let i=0; i < width; i = i + 20){
for(let j=0; j < height; j = j + 20){
  let rcol = random(0,130);
  let gcol = random(0,130);
  let bcol = random(0,130);
  fill(rcol,gcol,bcol);
  circle(i,j,10);
}
}
}
function draw() {
  //Put draw code here

var step = 40;
for(var x = 0; x < 400; x = x + step){
for(var y=0; y < 400; y = y + step){
  strokeWeight(3);
  fill(200,0,100);
  line(x,y,x+20,y+20);

}

}

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




}
