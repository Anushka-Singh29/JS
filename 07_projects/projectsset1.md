# projects related to DOM

# solution Code

## project 1

```javascript
console.log('project1')

const buttons = document.querySelectorAll('.button');
// console.log(buttons)

const body = document.querySelector('body');

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'purple') {
      body.style.backgroundColor = event.target.id;
    }
  });
});

```


## Project 2 Solution

```javascript
const form = document.querySelector('form');

//we need values only when submit is clicked
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);
  const r = document.querySelector('#results');

  //checks
  if (h === '' || h < 0 || isNaN(h)) {
    results.innerHTML = 'please give a valid height';
  } else if (w === '' || w < 0 || isNaN(w)) {
    results.innerHTML = 'please give a valid weight';
  } else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2);
    //showing result

    let message = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      message += '  are under weight';
    } else if (24.9 > bmi && bmi > 18.6) {
      message += ' you are in normal range';
    }
    if (bmi > 24.9) {
      message += ' you are over weight';
    }

    results.innerHTML = message;
  }
});
```

## Project 3 Solution
### to get date and time in real time 

```javascript
const clock = document.getElementById('clock')

setInterval(function(){
  
let date = new Date()
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString()
},1000)

```

## Project 4 Solution
### We need to guess numbers, we have upto 10 attempts to guess Workflow: we need to store the guessed inputs in an array and siplay those to users. lower down number of guesses

```javascript
let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

//whatevr user submits, all these values will be stored and shown
let prevGuess = [];

//tracking attempts
let numGuess = 1;

let playGame = true;

//are you available to play a game
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //valid number or not
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a valid number, more than 1');
  } else if (guess > 100) {
    alert('please enter a valid number, less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game over. Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage('you guessed it right');
    endGame();
  } else if (guess < randomNum) {
    displayMessage('Number is toooo low');
  } else if (guess > randomNum) {
    displayMessage('Number is toooo high');
  }
  //checking value and letting user know
}

//cleanup guess
function displayGuess(guess) {
  //interacts with DOM
  userInput.value = '';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newbutton = document.querySelector('#newGame');
  newbutton.addEventListener('click', function (e) {
    e.preventDefault;
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```

## Project 5 solution
### on a click of button we need to start and stop changing the bg colors

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());

const changeBgColor = function changeBgcolor() {
  document.body.style.backgroundColor = randomColor();
};

let intervalid;

const startChangingColor = function () {
  if (!intervalid) {
    intervalid = setInterval(changeBgColor, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(intervalid);
  intervalid = null; //cleaning up intervalid
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

```


# Project 6 solution
## whatever key is typed, we get the details

```javascript
console.log('Project 5');

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
<div class='color'> 
<table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
`;
});

```


