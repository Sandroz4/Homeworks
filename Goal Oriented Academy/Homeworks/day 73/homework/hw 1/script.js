const child = document.getElementById("child-container");
const parent = document.getElementById("parent-container");

let modifier = 5;

child.style.top = '0px';
child.style.left = '0px';

window.addEventListener("keydown", (event) => {
  const { style } = child;
  const parentRect = parent.getBoundingClientRect();
  const childRect = child.getBoundingClientRect();
  
  switch (event.key) {
    case "ArrowUp":
      if (childRect.top > parentRect.top) {
        style.top = `${parseInt(style.top) - modifier}px`;
      }
      break;

    case "ArrowDown":
      if (childRect.bottom < parentRect.bottom) {
        style.top = `${parseInt(style.top) + modifier}px`;
      }
      break;

    case "ArrowLeft":
      if (childRect.left > parentRect.left) {
        style.left = `${parseInt(style.left) - modifier}px`;
      }
      break;

    case "ArrowRight":
      if (childRect.right < parentRect.right) {
        style.left = `${parseInt(style.left) + modifier}px`;
      }
      break;
  }
});
