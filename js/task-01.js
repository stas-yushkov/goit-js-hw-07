// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const logUlCategories = () => {
  const ulCategoriesRef = document.querySelector('ul#categories');
  // console.log(ulCategoriesRef);
  // console.log(ulCategoriesRef.children.length);
  // const countUlCategories =
  //   document.querySelector('ul#categories').childElementCount;

  console.log(`В списке ${ulCategoriesRef.childElementCount} категории.`);

  [...ulCategoriesRef.children].map(category => {
    console.log(`\nКатегория: ${category.querySelector('h2').textContent}`);
    console.log(
      `Количество элементов: ${category.querySelector('ul').childElementCount}`,
    );
  });
};

logUlCategories();
