const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = [...ingredients]
.map(item => {
  let li = document.createElement("li");
  // console.log(li);
  // li.textContent = item;
  // console.log(li);
  // li.classList.add('item');
  return li
})
conssole.log(list) 
// const root = document.querySelector("#ingredients")
// root.append(list)



// console.log(root)
// let li = document.createElement("li")
// console.log(li);
// li.textContent = 'Potatoes';
// console.log(li);
//   li.classList.add('item');
// root.after(li)