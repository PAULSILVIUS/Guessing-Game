//Paul Silvius
//JAVASCRIPT File
//HOMEWORK #1
//Guessing Game
var answer = 17;
var clicks = 5;

function guessNumber(){
	clicks --;
	var txt = document.getElementById("textBox").value;
if (isNaN(txt)){
	document.getElementById("highLow").innerHTML = "Invalid Entry";
}if (parseInt(txt) === answer){
  document.getElementById("winLose").innerHTML = "You Win!";
	document.getElementById("highLow").innerHTML = "Congratulations";
} if (answer > txt){
document.getElementById("highLow").innerHTML = "Your guess is too low";
} if (answer < txt){
document.getElementById("highLow").innerHTML = "Your guess is too high";
}if (clicks > 0){
document.getElementById("turns").innerHTML =  clicks + " " + "attemp(s) left";
} if (clicks === 0){
document.getElementById("winLose").innerHTML = "You Lose";
document.getElementById("turns").innerHTML =  "no attempts left";
document.getElementById("textBox").disabled = true;
}
}
