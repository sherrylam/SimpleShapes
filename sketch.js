let eyes = 50;

// Setup code goes here
function setup() {
  createCanvas(1000, 800);
  print("hello hello");
  ellipseMode(CENTER);
  rectMode(CENTER);
  background('#E6E6FA');
 }


// Draw code goes here
function draw() {
  strokeWeight(0);
  
  fill(255);
  circle(width/2, height/3, 150);
  circle(width/2, height/2, 200);
  circle(width/2, height/1.4, 250);
  
  fill('#333333');
  rect(width/2, height/3-100, 100, 100);
  rect(width/2, height/3-60, 150, 25,10);
  
  fill(0);
  ellipse(width/2-50, height/3-20, 20, eyes);
  ellipse(width/2+50, height/3-20, 20, eyes);
  circle(width/2, height/2-50, 15);
  circle(width/2, height/2, 15);
  circle(width/2, height/2+50, 15);
  
  fill('orange');
  triangle(width/2, height/3, width/2+50, height/3+10, width/2, height/3+20);
  
  strokeWeight(8);
  stroke('#401B0C');
  line(300, 300, width/2-100, height/2);
  line(700, 300, width/2+100, height/2);
  
  strokeWeight(1)
  stroke(0);
  fill('#F0F0F0');
  if (mouseIsPressed) {
    hexagon();
  }

}

function hexagon() {
	beginShape();
	vertex(mouseX-7.5, mouseY-13);
	vertex(mouseX+7.5, mouseY-13);
	vertex(mouseX+15, mouseY);
	vertex(mouseX+7.5, mouseY+13);
    vertex(mouseX-7.5, mouseY+13);
	vertex(mouseX-15, mouseY);
	endShape(CLOSE);
}

function mousePressed() {

	print("mouse pressed at x:" + mouseX + " y:" + mouseY);
}