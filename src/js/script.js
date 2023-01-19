const elements = {
  inputElements: [
    document.getElementById("username"),
    document.getElementById("email"),
    document.getElementById("phone"),
    document.getElementById("message"),
  ],
  form: document.getElementById("message--form"),
};

const error = function (element, event) {
  event.preventDefault();
  element.nextElementSibling.style.display = "block";
  element.style.border = "1px solid #f52e2e";
};

const noError = function (element) {
  element.nextElementSibling.style.display = "none";
  element.style.border = "1px solid #000";
};

elements.form.addEventListener("submit", function (event) {
  elements.inputElements.forEach(function (element) {
    if (element.value === "") {
      error(element, event);
    } else {
      noError(element);
    }
  });
});
