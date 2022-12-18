const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector("#menu");
const componentBody = document.querySelector(".component-body");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-times");
  menu.classList.toggle("menu-active");
  componentBody.classList.toggle("display-none");
});
