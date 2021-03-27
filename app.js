
const form = document.getElementById('container');
const numberInput = document.getElementById('number-input');
const numberSubmit = document.getElementById('number-submit');
const result = document.getElementById('result');
const minNumber = document.getElementById('min-num');
const maxNumber = document.getElementById('max-num');

let min = 1;
let max = 10;
let guesses = 3;
const winningNumber = getRandomNumber(min, max);


minNumber.textContent = min;
maxNumber.textContent = max;

form.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again')
        window.location.reload()
});

numberSubmit.addEventListener('click', play);

function play(e) {

    console.log(winningNumber);

    const guess = parseInt(numberInput.value);
    
    if(guess === winningNumber) {

        gameOver(true, 'You won')

    } else {

        if(guess !== winningNumber && guesses === 1) {

            gameOver(false, 'You loose');

        }

        else {
            guesses -= 1
            result.innerHTML = `That's not the right number. You have ${guesses} guesses left`
            numberInput = ''
        }
        }

    }

    function gameOver (win, msg) {

        let color;
        win === true ? color = 'green' : color = 'red';

        numberInput.color = color;
        numberInput.style.borderColor = color;
        result.style.color = color;

        numberInput.disabled = 'true'

        numberSubmit.value = 'Play Again';
        numberSubmit.className = 'play-again';

        setmsg(msg)
    }

    function setmsg(msg, color) {
        result.style.color = color;
        result.textContent = msg;

    }


    function getRandomNumber() {
        return Math.floor(Math.random()*(max-min+1)+min);    
    }










