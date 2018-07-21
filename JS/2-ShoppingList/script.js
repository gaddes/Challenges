var buttonEnter = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

buttonEnter.addEventListener("click", addListItemAfterClick); // Add list item when button is clicked
input.addEventListener("keypress", addListItemAfterKeypress); // Add list item when 'enter' key is pressed
ul.addEventListener("click", toggleDone); // Toggle .done class on/off when list item clicked

function createListElement() {
  // Create element & text
  var newElement = document.createElement("li");
  var newText = document.createTextNode(input.value);
  // Add text to element
  newElement.appendChild(newText);
  // Update DOM
  ul.appendChild(newElement);
  // Clear input box
  input.value = "";
}

function inputLength() {
  return input.value.length;
}

function addListItemAfterClick() {
  if (inputLength() > 0) { // Check input box is NOT empty
    createListElement();
  }
}

function addListItemAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) { // Check input box is NOT empty and that ENTER key has been pressed
    createListElement();
  }
}

function toggleDone(e){
  // e.target refers to the clicked <li> element
  listItem = e.target;
  // This is different than e.currentTarget which would refer to the parent <ul> in this context
  listItem.classList.toggle("done");
  console.log("The element being targeted is ", listItem);
}
