// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

let collection = [];
let numberOfBoxes = 0;

const numberOfBoxesRef = document.querySelector('#controls input');
const createBtnRef = document.querySelector(
  '#controls button[data-action="render"]',
);
const destroyBtnRef = document.querySelector(
  '#controls button[data-action="destroy"]',
);
const boxesRef = document.querySelector('div#boxes');

const createBoxes = amount => {
  if (amount) {
    let boxWidth = 30;
    let boxHeight = 30;
    for (let i = 0; i < amount; i += 1) {
      const div = document.createElement('div');
      div.style.backgroundColor = `#${(() =>
        Math.floor(Math.random() * 16777215).toString(16))()}`;
      console.dir(div);
      collection.push(div);
      console.log(collection);

      div.style.width = `${boxWidth + i * 10}px`;
      div.style.height = `${boxHeight + i * 10}px`;
    }
  }

  boxesRef.append(...collection);
  console.log(boxesRef);
};

console.log((() => Math.floor(Math.random() * 16777215).toString(16))());

const handleCreateBtnClick = e => {
  e.preventDefault();
  createBoxes(numberOfBoxes);
};

createBtnRef.addEventListener('click', handleCreateBtnClick);

destroyBtnRef.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target);
  collection = [];
  console.log('🚀 ~ collection', collection);
  boxesRef.innerHTML = '';
});

numberOfBoxesRef.addEventListener('input', e => {
  e.preventDefault();

  numberOfBoxes = e.target.value;
  console.log(numberOfBoxes);
});
