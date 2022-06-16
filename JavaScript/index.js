var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Generates a random number between 1-6
var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //This variable stores the dice image corresponding to the random number generated
var randomSource1 = "images/" + randomDiceImage1; //This variable stores the final address of the image
var player1 = document
  .querySelectorAll("img")[0]
  .setAttribute("src", randomSource1); //This will set the src attribute of the img element to our random dice image that we generated

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //Generates a random number between 1-6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //This variable stores the dice image corresponding to the random number generated
var randomSource2 = "images/" + randomDiceImage2; //This variable stores the final address of the image
var player2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomSource2); //This will set the src attribute of the img element to our random dice image that we generated

//Here, we use if-else condition to change the h1 tag to display certain content depending on which player wins the dice game
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎀 Player 1 wins!";
} else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "It is a Draw!";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🎀";
}
