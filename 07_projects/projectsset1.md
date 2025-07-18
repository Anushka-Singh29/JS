# projects related to DOM

## project link
[click here]()

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

