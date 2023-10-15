const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();

  const filledForm = {};

  for (let element of form.elements) {
    if (element.type !== "submit") {
      if (!element.value) {
        alert("All fields are required");
        return;
      }
      filledForm[element.name] = element.value;
    }
  }
  console.log(filledForm);
  form.reset();
}
