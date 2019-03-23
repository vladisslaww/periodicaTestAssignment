// Create variables

const image = document.getElementById('image');
const form = document.querySelector('form');
const urlInput = document.getElementById('url_input');
const slider = document.getElementById('slider_range');


let baseWidth, baseHeight, imageX, imageY, mousePosition, startPosition, sliderStart;

// Object reference
let currentWidth = image.width.baseVal;
let currentHeight = image.height.baseVal;

let currentX = image.x.baseVal;
let currentY = image.y.baseVal;


let isImageEvent = false;
let isSliderEvent = false;

let minVals = getMinVals();

const maxVals = {
  x: 178,
  y: 178,
};


// Input value selection
urlInput.addEventListener('focus', function (event) {
  event.target.select();
});

// Form submission. Changes urlInput's href
form.addEventListener('submit', function (event) {

  event.preventDefault();

  if (urlInput.value){

    fetch(urlInput.value) // Check if it's possible to fetch the image
      .then( (res) => {

        if (res.ok) {
          image.removeAttribute('width');  // Remove width and height to reset them with the new image
          image.removeAttribute('height');
          image.href.baseVal = urlInput.value; // Assign new value for the image url

        }
      })
      .catch( e => console.log(e));
  }

});

// Image load
image.addEventListener('load', function () {

  resetValues();

  let img = new Image();
  img.src = image.href.baseVal;

  // Set height or width based on the aspect ratio
  if (img.width / img.height > 1) {
    baseHeight = currentHeight.value = 228;
    baseWidth = currentWidth.value = 228 * img.width / img.height;
  } else {
    baseWidth = currentWidth.value = 228;
    baseHeight = currentHeight.value = 228 *  img.height / img.width;
  }

  minVals = getMinVals();
});

// Beginning of the image dragging event
image.addEventListener('mousedown', function(event) {

  event.preventDefault(); // Prevent Firefox image dragging
  isImageEvent = true;
  startPosition = getMousePosition(event); // Assign initial mouse position

}, true);

// Beginning of the slider dragging event
slider.addEventListener('mousedown', function () {

  isSliderEvent = true;
  sliderStart = slider.value;

});

// End of the mouse events. Reset
document.addEventListener('mouseup', function() {

  isImageEvent = false;
  isSliderEvent = false;

}, true);

document.addEventListener('mousemove', function(event) {

  if (isImageEvent) {
    dragImage(event);
  }

  if (isSliderEvent) {
    zoom();
  }

}, true);



function resetValues () {

  slider.value = 100;
  currentX.value = 178;
  currentY.value = 178;

}

function getMousePosition (event) {
  return { x : event.clientX, y : event.clientY };
}

function getMinVals () {
  return { x: 178 - (currentWidth.value - 228), y: 178 - (currentHeight.value - 228) };
}

function getAxisValue (axisName) {
  return image[axisName].baseVal.value + ( mousePosition[axisName] - startPosition[axisName] ) * 1.2;
}

function zoom () {

  currentHeight.value  = baseHeight *  +slider.value / 100;
  currentWidth.value   = baseWidth  *  +slider.value / 100;

  minVals = getMinVals();

  if (currentX.value < minVals.x){
    currentX.value = minVals.x
  }

  if (currentY.value < minVals.y){
    currentY.value = minVals.y
  }

}


function dragImage (event) {

  mousePosition = getMousePosition(event);

  imageX = getAxisValue('x');
  imageY = getAxisValue('y');

  if (imageX >= minVals.x && imageX <= maxVals.x) currentX.value = imageX;
  if (imageY >= minVals.y && imageY <= maxVals.y) currentY.value = imageY;

  startPosition = mousePosition;

}