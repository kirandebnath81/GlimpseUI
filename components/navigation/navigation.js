//btns
const menuOpenBtn = document.querySelector("#menu-ham-icon");
const menuCloseBtn = document.querySelector("#close-icon");

//menu
const navMenu = document.querySelector("#nav-menu");

//handle menu
const menuHandler = () => {
  navMenu.classList.toggle("active");
};

// open menu
menuOpenBtn.addEventListener("click", menuHandler);

//close menu
menuCloseBtn.addEventListener("click", menuHandler);
