// Background Image Array
const background = [
  "background_1.jpg",
  "background_2.jpg",
  "background_3.jpg",
  "background_4.jpg"
];

// Random Background Image
const selectImage = background[Math.floor(Math.random() * background.length)];

// HTML Tag img 추가
const backgroundImage = document.createElement('img');

backgroundImage.src = `images/${selectImage}`;

document.body.appendChild(backgroundImage);