const viewModalBtn = document.querySelector("#view-modal-btn");
const cancelModalBtn = document.querySelector("#cancel-modal-btn");

const modalWrapper = document.querySelector(".modal-wrapper");

//handle modal
const modalHandler = () => {
  modalWrapper.classList.toggle("active");
};

//view modal
viewModalBtn.addEventListener("click", modalHandler);

//cancel modal
cancelModalBtn.addEventListener("click", modalHandler);
