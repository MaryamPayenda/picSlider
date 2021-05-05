const slider = document.querySelector(".slider input");
const img = document.querySelector(".images .img-2");
const drag = document.querySelector(".slider .drag");

slider.oninput = () => {
  let sliderVal = slider.value;
  drag.style.left = sliderVal + "%";
  img.style.width = sliderVal + "%";
};
