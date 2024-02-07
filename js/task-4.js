"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const val = event.target;
  const email = val.elements.email.value;
  const password = val.elements.password.value;

  if (email == "" || password == "") {
    return alert("All form fields must be filled in");
  }

  let obj = {
    email: email.trim(),
    password: password.trim(),
  };

  console.log(obj);
  form.reset();
});
