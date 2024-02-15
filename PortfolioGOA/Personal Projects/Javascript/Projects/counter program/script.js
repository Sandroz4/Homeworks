const decreaseBtn = document.getElementById("decreaseBtn");
const reserBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
const increase5Btn = document.getElementById("increase5Btn");
const decrease5Btn = document.getElementById("decrease5Btn")

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count
}

increase5Btn.onclick = function(){
    count += 5;
    countLabel.textContent = count
}

decrease5Btn.onclick = function(){
    count -= 5;
    countLabel.textContent = count
}

