const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];


// body.style.backgroundColor = colors[colors.length - 1]

// console.log(colors[colors.length - 1])

                                      
// const start = document.querySelector('[data-action="start"]');
// const stop = document.querySelector('[data-action="stop"]');
// const body = document.querySelector('body');

// // btnStart = document.querySelector('[data-action="start"]')
// start.addEventListener('click', onBtnStartClick);
// stop.addEventListener('click', onBtnStopClick);
// function onBtnStartClick() {
//     body.style.backgroundColor = 'red'

// };


// function onBtnStopClick() {
//     body.style.backgroundColor = 'green'
// };

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const random = randomIntegerFromInterval(colors[0], colors[colors.length - 1])
// console.log(random)






let intervalId = null;
const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
}


refs.btnStart.addEventListener('click', onColorChangeStart);
refs.btnStop.addEventListener('click', OnColorChangeStop);

refs.btnStop.disabled = true;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};



function onColorChangeStart(evt) {
    
    intervalId = setInterval(() => { refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)] }, 1000);

    refs.btnStop.disabled = false;
    refs.btnStart.disabled = true;
};

function OnColorChangeStop(evt) {
    
    clearInterval(intervalId);

    refs.btnStop.disabled = true;
    refs.btnStart.disabled = false;

}