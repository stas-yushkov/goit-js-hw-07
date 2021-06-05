// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const rangeInputRef = document.querySelector(
  'input#font-size-control[type="range"]',
);

const sizedTextRef = document.querySelector('span#text');

rangeInputRef.addEventListener('input', e => {
  sizedTextRef.style.fontSize = `${rangeInputRef.value}px`;
  // console.log(rangeInputRef.value);
});
