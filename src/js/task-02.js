const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const liList = [];
const ingredientsList = document.querySelector("ul#ingredients");
ingredients.forEach((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  liList.push(element);
});

ingredientsList.append(...liList);
