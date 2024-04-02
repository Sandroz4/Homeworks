const child = document.getElementById("child-container");

let left = 0;
let y = 0;
let direct = "right"

const moveRight = setInterval(function(){
    if(direct == "right"){
        left++;
        if(left == 300){
            direct = "bottom"
        }
    } else if(direct == "bottom"){
        y++;
        if(y == 300){
            direct = "left";
        }
    } else if(direct == "left"){
        left--;
        if(left == 0){
            direct = "top"
        }
    } else{
        y--;
        if(y == 0 && left == 0){
            clearInterval(moveRight);
        }
    }

    child.style.left = left + 'px';
    child.style.top = y + 'px';
}, 10);