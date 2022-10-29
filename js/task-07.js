const input = document.querySelector("input#font-size-control");
const text = document.getElementById("text");
const fontChangeFunc = (event) => {
  text.style.fontSize = `${event.target.value}px`;
};

input.addEventListener("input", fontChangeFunc);
