// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Webcam Image Classification using a pre-trained customized model and p5.js
This example uses p5 preload function to create the classifier
=== */

// Classifier Variable
let classifier;
// Model URL
let imageModelURL = "https://teachablemachine.withgoogle.com/models/96tukx8xE/";

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let x;
let y;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

function setup() {
  let c = createCanvas(320, 260);
  c.parent("canvas-holder");
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0);
  // // Draw the video
  // image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);

  if (label == "Class 1") {
    y--;
  }
  if (label == "Class 2") {
    y++;
  }
  if (label == "Class 3") {
    x--;
  }
  if (label == "Class 4") {
    x++;
  }

  ellipse(x, y, 20, 20);
  // print("x:"+ x);
  //  print("y:"+ y);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video);
  classifier.classify(flippedVideo, gotResult);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}
