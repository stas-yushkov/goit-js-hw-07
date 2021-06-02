// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const addLiToUl = arrayOfItems => {
  // console.log(arrayOfItems);
  // console.log(document.createElement('li'));
  ingredientsRef.append(
    ...arrayOfItems.map(itemName => {
      const li = document.createElement('li');
      li.textContent = itemName;
      return li;
    }),
  );
};

const ingredientsRef = document.querySelector('ul#ingredients');
// console.log(ul);

addLiToUl(ingredients);
