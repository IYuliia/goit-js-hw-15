const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", handlerTextSize);

text.style.fontSize = `${input.value}px`;

function handlerTextSize() {
  console.dir(input);
  text.style.fontSize = `${input.value}px`;
}
