const input = document.getElementById("validation-input");

const checkNumFun = (event) => {
  if (event.target.value.length == input.getAttribute("data-length")) {
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
    input.classList.add("valid");
  } else {
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
    input.classList.add("invalid");
  }
};
input.addEventListener("blur", checkNumFun);
