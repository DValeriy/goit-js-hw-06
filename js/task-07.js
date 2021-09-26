const rangeEl = document.querySelector("#font-size-control")
// console.log(rangeEl)
const spanEl = document.querySelector("#text")
// console.log(spanEl)
rangeEl.addEventListener("input", e => {
  spanEl.style.fontSize=`${e.currentTarget.value}px`
})