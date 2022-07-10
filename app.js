const submitButton = document.getElementById("checkButton");
console.log(submitButton);
const message = document.getElementById("message");
const lives = document.getElementById("attemptsLabel");
var randomNumber = Math.round(Math.random() * 100);
var text;
var live = 10;

submitButton.onclick = () =>{
    var inputValue = document.getElementById("textBox").value;
    console.log(randomNumber);
    console.log(inputValue);
    live--;
    //Winning condition
    if(inputValue == randomNumber){
        location.href = "./win.html";
    }
    else if(live == 0){
        location.href = "./lose.html";
    }
    else if(inputValue > randomNumber)
    {
        text = `too high. ${live} remaining`;
    }
    else if(inputValue < randomNumber)
    {
        text = `too low. ${live} remaining`;
    }
// console.log(live);
// console.log(text);
message.style.display = "inherit";
message.innerHTML = text;
lives.innerHTML = live;
}
