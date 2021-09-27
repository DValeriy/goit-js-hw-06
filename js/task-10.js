function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("#controls input")
const btnCreateEl = document.querySelector("#controls [data-create]")
const btnClearEl = document.querySelector("#controls [data-destroy]")
const divBox = document.querySelector("#boxes")

const createBoxes = (amount) => {
  let styleSize=30
  for (let i = 0; i < amount; i++) {
    let divEl = document.createElement("div")
    divEl.style.display="block"
    divEl.style.width = `${styleSize}px`;
    divEl.style.height = `${styleSize}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    divBox.append(divEl);
    styleSize+=10
  }

}
btnCreateEl.addEventListener("click", e => {
  destroyBoxes()
  
  if (inputEl.value === '')
    return alert("Please fill in the fields!");
  createBoxes(inputEl.value)
})

const destroyBoxes = () =>
  divBox.innerHTML=''

  btnClearEl.addEventListener("click", e => {
  destroyBoxes()

})