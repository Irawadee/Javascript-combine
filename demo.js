// 1. access each element

let productnameElement = document.getElementById("product-name");
let remainCharacters = document.getElementById("remainChars");

// define required value into variable for further usages
let maxTextLength = productnameElement.maxLength;

// 2. Define Function

function updateRemainChars(event) {
  let enterText = event.target.value;
  let enterTextLength = enterText.length;

  let remainText = maxTextLength - enterTextLength;

  remainCharacters.textContent = remainText;
}

// 3. use the function on click listener

productnameElement.addEventListener("input", updateRemainChars);
