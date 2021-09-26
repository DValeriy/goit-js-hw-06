const formEl = document.querySelector(".login-form")

formEl.addEventListener("submit", e => {
  e.preventDefault();

  let eventEL = e.currentTarget;
  // let obj = {}  
  const {
    elements: { email, password }
  } = eventEL;

// console.log(email.value)
// console.log(password.value)
  if (email.value === "" || password.value === "") {
  return alert("Please fill in all the fields!");
  }
  // obj['email']=email.value
  // obj['password']=password.value
 let  obj = {
    ['email']: email.value,
    ['password']: password.value
  }
  console.log(obj)
  eventEL.reset();
  return obj
})
