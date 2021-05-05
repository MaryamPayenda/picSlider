const slider = document.querySelector(".slider input");
const drag = document.querySelector(".drag");

slider.oninput = () => {
  let sliderVal = slider.value;
  drag.style.left = sliderVal + "%";
};
