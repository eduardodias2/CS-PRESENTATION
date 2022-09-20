let username = document.querySelector("#user-name");
let email = document.querySelector("#user-email");
let password = document.querySelector("#user-password");
let submit = document.querySelector(".submit");
let user_count = 1;
let imageMode = document.querySelector(".image-mode");
let moon = document.querySelector(".image-mode svg:nth-child(2)");
let sun = document.querySelector(".image-mode svg:nth-child(1)");

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  if (username.value == "" || email.value == "" || password.value == "") {
    return alert("All fields must be filled!");
  }
  let user = {
    name: username.value,
    email: email.value,
    password: password.value
  };
  localStorage.setItem(`user${user_count}`, JSON.stringify(user));
  document.querySelector("form").reset();
  for (let index = 0; index < user_count; index++) {
    let users = JSON.parse(localStorage.getItem(`user${user_count}`));
    alert(`
    persons-name: ${users.name}
    persons-email: ${users.email}
    Your registration was successfully completed!
    `);
  }
  user_count = user_count + 1;
});

document.querySelector(".button").addEventListener("click", () => {
  document.querySelector(".button").classList.toggle("moon");
  moon.classList.toggle("show");
  sun.classList.toggle("hidden");
  imageMode.classList.toggle("on");
  document.body.classList.toggle("dark-mode");
});
