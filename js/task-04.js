// let counterValue = parseInt(document.querySelector("#value").textContent);
let counterValue =0;
const valueEl = document.querySelector("#value");
document.querySelector("#counter").addEventListener("click", e => {
  if (e.target.tagName === 'BUTTON' && e.target.dataset.action=== "decrement")
    counterValue -= 1;
  if (e.target.tagName === 'BUTTON' && e.target.dataset.action === "increment")
    counterValue += 1;
  valueEl.textContent=counterValue
  // console.log(counterValue)
})

// спитати на практиці
// valueEl.textContent=counterValue
// console.log(valueEl.textContent)
// console.log(counterValue)