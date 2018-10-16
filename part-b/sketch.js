function setup() {
  createCanvas(500, 500)
  background(50, 100,150)
}

function draw() {
  background(0)
  stroke(255, 80, 0)
  fill(0,80,25)
  triangle(mouseX, mouseY, 30, 60, 40, 50)

}
