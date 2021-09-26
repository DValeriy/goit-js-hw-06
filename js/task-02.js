const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const root = document.querySelector("#ingredients")
// const list = [...ingredients]
// .forEach(item => {
//   const li = document.createElement("li");
//   // console.log(li);
//   li.textContent = item;
//   li.classList.add('item');
//   root.append(li)
// })

const root = document.querySelector("#ingredients")
const list = [...ingredients]
.map(item => {
  const li = document.createElement("li");
  console.log(li);
  li.textContent = item;
  console.log(li);
  // li.classList.add('item');
  // console.log(li);
  return li
})
// console.log(list) 
root.append(...list)
