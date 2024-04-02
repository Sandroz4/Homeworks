// //v1
// const child = document.getElementById("child-container");

// let position = 0;
// let moveRightInterval;

// function moveRight() {
//     if (position < 300) {
//         child.style.left = position + "px";
//         position++;
//     } else {
//         clearInterval(moveRightInterval);
//         moveBack();
//     }
// }

// function moveBack() {
//     moveRightInterval = setInterval(function() {
//         if (position > 0) {
//             child.style.left = position + "px";
//             position--;
//         } else {
//             clearInterval(moveRightInterval);
//         }
//     }, 10);
// }















//  გადააკეთეთ ამჟამინდელი პროექტი ისე რომ როდესაც დივ
//  ბლოკი წავა მარჯვნივ გაუტოლდება 300 პიქსელს / მაგ 
//  დროს დაიწყოს ქვემოთ სვლა! / როცა ქვემოთ პოზიციას 
//  გაუტოლდება კიდეზე წავიდეს მარცხნივ / შემდეგ ავიდეს ისევ
//  ზემოთ და გაჩერდეს. gg

// //v2
// const child = document.getElementById("child-container");

// let position = 1;
// let count = 1;

// const moveRight = setInterval(function(){
//     if(position == 300){
//         count = -1;
//     }
//     else if(position == 0){
//         clearInterval(moveRight)
//     }

//     child.style.left = position + "px";
//     position += count;
// }, 10)


const child = document.getElementById("child-container");

let positionX = 1;
let positionY = 1;
let countX = 1;
let countY = 0;

const move = setInterval(function(){
    if(positionY == 300){
        countX = -1; 
        countY = 0; 
    }
    else if(positionX == 300){
        countX = 0; 
        countY = 1; 
    }
    else if(positionX == 0){
        countX = 0;
        countY = 1;
    }
    else if(positionY == 0){
        clearInterval(move); 
    }

    child.style.left = positionX + "px";
    child.style.top = positionY + "px";
    positionX += countX;
    positionY += countY;
}, 5);
