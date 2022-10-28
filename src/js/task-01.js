const categories = document.querySelector("ul#categories");
const items = categories?.querySelectorAll("li.item");
console.log(`Number of categories: ${items.length}`);

items.forEach((element) => {
  const categoryName = element.querySelector("h2").textContent;
  const categoryItemsCount = element.querySelectorAll("li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItemsCount}`);
});
