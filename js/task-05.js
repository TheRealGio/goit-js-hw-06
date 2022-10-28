const DEFAULT_VALUE = "Anonymous";

const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");
const replaceInput = (event) => {
  if (event.target.value === "") {
    nameOutput.textContent = DEFAULT_VALUE;
  } else {
    nameOutput.textContent = event.target.value;
  }
};

nameInput.addEventListener("input", replaceInput);
