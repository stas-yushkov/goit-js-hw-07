// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputRef = document.querySelector('input#validation-input');

const handleBlur = e => {
  if (
    Number(e.currentTarget.dataset.length) ===
    //=== e.currentTarget.value.trim().length
    e.currentTarget.value.length
  ) {
    // console.log(
    //   `Введено подходящее количество символов - ${e.currentTarget.value.length}`,
    // );
    // console.log(`Ввели: '${e.currentTarget.value}'`);
    // console.log(
    //   `Строка после удаления пробелов начале и в конце: '${e.currentTarget.value.trim()}'`,
    // );
    if (e.currentTarget.classList.contains('invalid')) {
      e.currentTarget.classList.remove('invalid');
    }
    e.currentTarget.classList.add('valid');
  } else if (e.currentTarget.value.length !== 0) {
    // console.log(
    //   `Введено неправильное количество символов - ${e.currentTarget.value.length}. Пробелы в начале и в конце строки удаляются`,
    // );
    // console.log(`Ввели: '${e.currentTarget.value}'`);
    // console.log(
    //   `Строка после удаления пробелов начале и в конце: '${e.currentTarget.value.trim()}'`,
    // );
    if (e.currentTarget.classList.contains('valid')) {
      e.currentTarget.classList.remove('valid');
    }
    e.currentTarget.classList.add('invalid');
  } else {
    // console.log('Ничего не введено');
    if (e.currentTarget.classList.contains('valid')) {
      e.currentTarget.classList.remove('valid');
    }
    if (e.currentTarget.classList.contains('invalid')) {
      e.currentTarget.classList.remove('invalid');
    }
  }
};

inputRef.addEventListener('blur', handleBlur);
