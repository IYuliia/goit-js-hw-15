const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", handlerTextSize);

function handlerTextSize() {
  console.dir(input);
  text.style.fontSize = `${input.value}px`;
}
