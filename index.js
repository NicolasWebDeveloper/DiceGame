const text = document.getElementById("text");
const imageOne = document.getElementById("imageOne");
const imageTwo = document.getElementById("imageTwo");


function generate() {
  let number = Math.round(Math.random()*6);
  if (number == 0) {
    number++;
  }
  return number;
}



const numberOne = generate();
const numberTwo = generate();
imageOne.setAttribute("src", "images/dice" + numberOne + ".png")
imageTwo.setAttribute("src", "images/dice" + numberTwo + ".png")

if (numberOne === numberTwo) {
  text.innerText = "Both are the same";
} else if(numberOne > numberTwo) {
  text.innerText = "Player 1 won!";
} else {
  text.innerText = "Player 2 won!";
}
