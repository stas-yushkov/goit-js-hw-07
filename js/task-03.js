// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('ul#gallery');
// console.log(galleryRef);
// galleryRef.innerHTML = '<li><img />112</li>';
// console.log(galleryRef.innerHTML);

const createGallery = (imagesArr, ulInHTML) => {
  ulInHTML.innerHTML = imagesArr
    .map(image => `<li><img src='${image.url}' alt='${image.alt}' /></li>`)
    .join('');
};

createGallery(images, galleryRef);

const flexGridGap = 20;
const bodyRef = document.querySelector('body');
bodyRef.style.width = '1170px';
bodyRef.style.paddingLeft = `${flexGridGap}px`;
bodyRef.style.paddingRight = `${flexGridGap}px`;
bodyRef.style.backgroundColor = '#c7c9b1';
bodyRef.style.marginLeft = 'auto';
bodyRef.style.marginRight = 'auto';
bodyRef.style.boxSizing = 'border-box';
bodyRef.style.display = ' block';

galleryRef.style.display = 'flex';
galleryRef.style.flexWrap = 'wrap';
galleryRef.style.padding = 0;
galleryRef.style.margin = 0;
galleryRef.style.marginTop = ` ${-flexGridGap}px`;
galleryRef.style.marginLeft = ` ${-flexGridGap}px`;
galleryRef.style.listStyle = 'none';
galleryRef.style.boxSizing = 'border-box';

[...galleryRef.children].map(li => {
  li.style.flexBasis = `calc( 100% / 3 -  ${flexGridGap}px)`;
  li.style.marginTop = ` ${flexGridGap}px`;
  li.style.marginLeft = `${flexGridGap}px`;
  li.style.borderRadius = '10px';
  li.style.backgroundColor = '#b4e39f';
  li.style.boxSizing = 'border-box';
  li.style.maxHeight = '260px';
  li.style.display = 'block';
  li.style.overflow = 'hidden';
});

[...galleryRef.children].map(li => {
  // li.firstChild.setAttribute('width', 270);
  li.firstChild.style.display = 'block';
  li.firstChild.style.maxWidth = '100%';
  li.firstChild.style.height = '100%';
  li.firstChild.style.objectFit = 'cover';
  li.firstChild.style.boxSizing = 'border-box';
});
