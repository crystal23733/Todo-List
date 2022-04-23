const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const flowerImg = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img");
bgImages.src = `img/${flowerImg}`;
document.body.appendChild(bgImages);