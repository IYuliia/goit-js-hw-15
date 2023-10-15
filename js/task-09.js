function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorName = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", handlerClick);

function handlerClick() {
  colorName.textContent = getRandomHexColor();
  document.body.style.backgroundColor = `${colorName.textContent}`;
}
