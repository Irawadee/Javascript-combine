let firstParagraph = document.body.firstElementChild;

// console.log(firstParagraph);

function changeParagraphText() {
  firstParagraph.textContent = "Clicked!";
  console.log(firstParagraph);
}

firstParagraph.addEventListener("click", changeParagraphText);

// define input

let firstInput = document.body.children[1];
console.log(firstInput);

function getUserInput(event) {
  //   let enterText = firstInput.value;
  let enterText = event.target.value;
  //   let enterText = event.data;
  console.log(enterText);
  //   console.log(event);
}

firstInput.addEventListener("input", getUserInput);
