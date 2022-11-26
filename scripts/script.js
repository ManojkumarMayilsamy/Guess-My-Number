const inputEl = document.querySelector('.user-input');
const scoreEl = document.querySelector('.guess');
const randomEl = document.querySelector('.random-guess');
const messageEl = document.querySelector('.error-msg');
const btnClick = document.querySelector('.btn-submit');

//global variables
const randomNumber=Math.floor(Math.random() * 100) + 1;
let score= 40;
let guess= 20;

//functions
const displayMessage = function(message,color){
    messageEl.style.display = 'block';
    messageEl.style.color = color;
    messageEl.innerText = message;
}

// Event Listeners
btnClick.addEventListener('click',function(){
    const userInput = Math.ceil(Number(inputEl.value),
    );
if(userInput < 1 || userInput > 100){
        displayMessage('Enter a valid Number!','red');
    }else{
        if(score > 1){
            if(userInput === randomNumber){
                randomEl.innerText= randomNumber;
                displayMessage(`You won the Game, Score: ${score}`, 'green');
        } else {
            let message = `Your guess is ${ userInput > randomNumber ? 'greater' : 'Lower'}`;
                displayMessage(message,'red');
                score = score - 1;
                guess = guess - 1;
                scoreEl.innerText= guess;
        }
} else {
        displayMessage('Game Over','Red');
        randomEl.innerText= randomNumber;
        }
    }
    console.log(userInput);
});
