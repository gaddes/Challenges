var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var buttonRandom = document.querySelector(".buttonRandom");

document.addEventListener("DOMContentLoaded", updateBackgroundColor); // Show background color on page load
color1.addEventListener("input", updateBackgroundColor); // Change background color1
color2.addEventListener("input", updateBackgroundColor); // Change background color2
buttonRandom.addEventListener("click", displayRandomColor); // Display random color

function updateBackgroundColor() {
  body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
};

function displayRandomColor() {
  color1.value = getRandomColor();
  color2.value = getRandomColor();
  updateBackgroundColor();
};

// Random color generator, stolen from StackOverflow - https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
