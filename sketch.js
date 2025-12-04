// Classifier Variable
let classifier;
// Model URL
let imageModelURL = './model/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let texto = ""
let confianza = 0

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(320, 260);
  // Create the video
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  flippedVideo = ml5.flipImage(video);
  // Start classifying
  classifyVideo();
}

function draw() {
  background(0);
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(255);
  textSize(16);
  textAlign(CENTER);
  if (label === "Control") {
    texto = "Control de Cinisplit!🎛️🎛️"
  } else if (label === "Vaso") {
    texto = "Vaso detected!🥤🥤"
  } else if (label === "Cuchara") {
    texto = "Cuchara detected!🥄🥄"
  } else if (label === "Pared") {
    texto = "Pared detected!🧱🧱"
  } 
  text(texto + " " + confianza, width / 2, height - 4);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();

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
  label = results[0].label;// Classifier Variable
  let classifier;
  // Model URL
  let imageModelURL = './model/';
  
  // Video
  let video;
  let flippedVideo;
  // To store the classification
  let label = "";
  let texto = ""
  let confianza = 0

  // Load the model first
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  }

  function setup() {
    createCanvas(320, 260);
    // Create the video
    video = createCapture(VIDEO);
    video.size(320, 240);
    video.hide();

    flippedVideo = ml5.flipImage(video);
    // Start classifying
    classifyVideo();
  }

  function draw() {
    background(0);
    // Draw the video
    image(flippedVideo, 0, 0);

    // Draw the label
    fill(255);
    textSize(16);
    textAlign(CENTER);
    if (label === "Pikachu") {
      texto = "⚡⚡¡Pikachu detected!⚡⚡"
    } else if (label === "Spiderman") {
      texto = "🕷️🕷️¡Spiderman detected!🕷️🕷️"
    } else if (label === "Botella") {
      texto = "💧💧¡Bottle detected!💧💧"
    } else if (label === "Labial") {
      texto = "💄💄¡Lipstick detected!💄💄"
    } 
    text(texto + " " + confianza, width / 2, height - 4);
  }

  // Get a prediction for the current video frame
  function classifyVideo() {
    flippedVideo = ml5.flipImage(video)
    classifier.classify(flippedVideo, gotResult);
    flippedVideo.remove();

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
    confianza = results[0].confidence.toFixed(4);
    // Classifiy again!
    classifyVideo();
  }
  // Classifiy again!
  classifyVideo();
}
