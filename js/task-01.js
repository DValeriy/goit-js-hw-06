// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const countAllCategories = [...document.querySelectorAll("#categories .item")].length
console.log(`Number of categories: ${countAllCategories}`)


const countCategoriesOfAnimals = document.querySelectorAll(".item")
  .forEach(item => {
  console.log(`Category: ${item.querySelector("h2").textContent}\n`+
`Elements: ${item.querySelectorAll("li").length}`) })