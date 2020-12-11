


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // creates a wall of circles that fill the whole screen
  for (i = 0; i <= windowWidth; i = i + 20) {
    for (j = 0; j <= windowHeight; j = j + 20) {
      ellipse(i, j, 15, 15);
      distance = dist(mouseX, mouseY, i, j);// allows a space where the circles change color when the mouse hovers over them; simulates a spotlight
      if (distance < 50) {
        fill(255,0,255);
        r = 15;
      } else {
        fill(53,8,62);
        r = distance / 5;
      }
      ellipse(i, j, r, r);
    }
  }
}
