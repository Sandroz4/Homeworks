const backButton = document.getElementById("back");
const nextButton = document.getElementById("next");
const sliderImg = document.getElementById("slider-img");

const images = ["assets/1.png", "assets/2.png", "assets/3.png"];

let counter = 0;

nextButton.addEventListener("click", () => {
  counter += 1;
  sliderImg.src = images[counter];
  if (counter >= images.length) {
    counter = 0;
    sliderImg.src = images[counter];
  }
});

backButton.addEventListener("click", () => {
  counter -= 1;
  if (counter < 0) {
    counter = images.length - 1;
  }
  sliderImg.src = images[counter];
});
