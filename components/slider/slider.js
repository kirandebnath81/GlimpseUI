const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.innerHTML = slider.value;

slider.addEventListener("input", (e) => {
  sliderValue.innerHTML = e.target.value * 50;
});
