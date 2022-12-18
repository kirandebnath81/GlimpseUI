const toastOpenBtn = document.querySelector("#demo-taost-open");
const toastCloseBtn = document.querySelector("#demo-toast-close");

const demoToast = document.querySelector(".demo-toast");

//handle toast
const toastHandler = () => {
  demoToast.classList.toggle("active");
};

//show toast
toastOpenBtn.addEventListener("click", toastHandler);

//close toast
toastCloseBtn.addEventListener("click", toastHandler);
