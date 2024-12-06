let capture;

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('canvas-holder'); // Attach canvas to the specific div

  capture = createCapture(VIDEO);
  capture.hide();
  background(0);
  // Make the div its parent
  // using its ID "container".
  
}

function draw() {

 image(capture, mouseX, mouseY, 100, 80);
  
//     for(let x = 0; x< width; x = x + 100){
//     for (let y = 0; y<height; y = y+80){
//         image(capture, x, y, 100, 80);
//         filter(POSTERIZE, 3);
//     }
//   }
}