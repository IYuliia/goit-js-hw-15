const input = document.querySelector("#validation-input");
input.addEventListener("blur", handlerInputLength);

function handlerInputLength() {
  if (Number(input.dataset.length) === input.value.length) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
