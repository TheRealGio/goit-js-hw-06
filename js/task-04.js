let counterValue = 0;

const incrementButton = document.querySelector(
  `button[data-action="increment"]`
);
const decrementButton = document.querySelector(
  `button[data-action="decrement"]`
);
const counterSelector = document.getElementById("value");

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  counterSelector.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  counterSelector.textContent = counterValue;
});
