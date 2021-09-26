const inputEl = document.querySelector("#validation-input")
console.log(inputEl)
inputEl.addEventListener("blur", e => {
  console.log( e.currentTarget.value.length)
  console.log( Number(e.currentTarget.dataset.length))
  if (e.currentTarget.value.length === Number(e.currentTarget.dataset.length)) {
    e.currentTarget.classList.remove("invalid")
    e.currentTarget.classList.add("valid");
  }
  
  else {
    e.currentTarget.classList.add("invalid");
e.currentTarget.classList.remove("valid")  };
})