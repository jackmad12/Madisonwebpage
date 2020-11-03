
let img;
let img1;
let img2;
let img3;
let x = 0;
let y = 0;
let m= 0;
let t= 0;
let partImage;



function preload(){

img= loadImage('https://i.imgur.com/xe61aKX.png');
img1= loadImage('https://i.imgur.com/EFvHtZ0.png ');
img2= loadImage('https://i.imgur.com/g9VerVH.png');
img3= loadImage('https://i.imgur.com/vpfwmdy.png');



}


function setup() {
  // create a full sized window to add the images to and make multiple partImage butterflies along the top of the screen to create a sense of multiple butterflies flying above
createCanvas(windowWidth,windowHeight);
image(img2,0,0,);
partImage= get(120,50,150,150);



}

function draw() {
  //The background is light green to create an environment more connected to nature, to make it appear more like the butterfly garden being portrayed
background(0,150,80);

// Add some larger images of butterflies to create a range of different sized butterflies and thus, a more diverse group of butterflies
image(img,0,0,500,500);

image(img,1000,200,500,500);

  for(let i=0;i< width;i=i+150){
      image(partImage,i,0);

}



// create a few butterflies that vare flying across the screen at different speeds so that it looks more natural than if they all flew at the same speed
image(img1,x,0,200,200);
x = x + 1;

image(img1,t,250,200,200);
t = t + 6;


image(img1,y,450,200,200);
y = y + 3;

image(img1,m,450,200,200);
m = m + 10;

// add two blended images of butterflies to create a more abstract feel to the art piece
blend(img3,250,200,250,350,500,300,250,250,DIFFERENCE);

blend(img1,250,100,250,250,1000,300,250,250,SCREEN);


}
