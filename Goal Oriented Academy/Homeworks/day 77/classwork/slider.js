const nextButton = document.getElementById("nextButton")
const prevButton = document.getElementById("prevButton")
const sliderD = document.getElementById("slider")
let count = 0

const images = [
  "./imgs/1.jpg",
  "./imgs/2.jpg",
  "./imgs/3.jpg"
]



nextButton.addEventListener("click", function(){
  count += 1
  sliderD.src = images[count]
  if(count > images.length){
    count = 0
  }
})


prevButton.addEventListener("click", function(){
  count -= 1
  sliderD.src = images[count]
})