// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputNameRef = document.querySelector('input#name-input');
console.log('🚀 ~  inputNameRef', inputNameRef);
const outputNameRef = document.querySelector('span#name-output');
console.log('🚀 ~  outputNameRef', outputNameRef);
