// r.question("How many numbers do you want in your Fibonacci sequence: ", (n) =>{
//     let seq = [0, 1]
//     let n1 = 0;
//     let n2 = 1;
//     let n3;
//     for (let i=2; i<n; i++){
//         n3 = n1 + n2;
//         n1 = n2;
//         n2 = n3;
//         seq.push(n3)
//     }
//     console.log(`Fibonacci sequence with ${n} terms: \n${seq}`)
//     r.close()
// })

// const d = new Date();
// const ds = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// console.log(`Today is ${ds[d.getDay()]}!`);

// const y = d.getFullYear();
// const m = d.getMonth() + 1;
// const dm = d.getDate(); 

// console.log(`Date in three formats: \n ${dm}.${m}.${y} \n ${m}.${dm}.${y} \n ${y}.${m}.${dm}`);

// r.question("Enter year to check if it's leap or not: ", (uy) =>{
//     if (uy % 4 == 0){
//         if (uy % 100 == 0){
//             if (uy % 400 == 0){
//                 console.log(`${uy} is a leap year!`)
//             } else{
//                 console.log(`${uy} is not a leap year!`)
//             }
//         } else{
//             console.log(`${uy} is a leap year!`)
//         }
//     } else{
//         console.log(`${uy} is not a leap year!`)
//     }
//     r.close()
// })

// console.log("You have to enter date in following format: day.month.year")
// r.question("Enter first date: ", (d1) => {
//     r.question("Enter past date: ", (d2) => {
//         let a1 = d1.split(".");
//         let a2 = d2.split(".");

//         let da1 = parseInt(a1[0]);
//         let ma1 = parseInt(a1[1]) - 1; 
//         let ya1 = parseInt(a1[2]);
//         let da2 = parseInt(a2[0]);
//         let ma2 = parseInt(a2[1]) - 1; 
//         let ya2 = parseInt(a2[2]);

//         let fd = new Date(ya1, ma1, da1);
//         let sd = new Date(ya2, ma2, da2);

//         let m = Math.abs(fd - sd) 
//         let d = Math.ceil(m / (1000 * 60 * 60 * 24))

//         console.log(`The day difference between ${d1} and ${d2} is ${d}`)

//         r.close()
//     })
// })

// console.log("You have to enter birthday date in following format: day.month.year")
// r.question("Enter your birthday here: ", (bd) => {
//     let bda = bd.split(".");
//     let bdD = parseInt(bda[0]);
//     let bdM = parseInt(bda[1]) - 1; 
//     let bdY = parseInt(bda[2]);

//     let cd = new Date();
//     let cdD = cd.getDate(); 
//     let cdM = cd.getMonth();
//     let cdY = cd.getFullYear();

//     if (bdM < cdM || (bdM === cdM && bdD < cdD)) {
//         console.log(`You are ${cdY - bdY} years old.`);
//     } else if (bdD < cdD || (bdD === cdD && bdM >= cdM)) {
//         console.log(`You are ${cdY - bdY - 1} years old.`);
//     } else {
//         console.log(`You are ${cdY - bdY - 1} years old.`);
//     }
//     r.close();
// });


// const cal = require('readline');

// const r = cal.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// setInterval(function(){
//     const t = new Date();
//     const h = t.getHours().toString();
//     const m = t.getMinutes().toString();
//     const s = t.getSeconds().toString();
//     console.log(`${h} : ${m} : ${s}`)
// }, 1000)

// r.question("Enter radius of your circle: ", (r) =>{
//     r = parseInt(r);
//     const a = 2 * Math.PI * (r**2);
//     console.log(`Circle with radius of ${r} has area: ${a}`);
//     r.close();
// })

// r.question("Enter your camelCase string here: ", (s) => {
//     let n = "";
//     const nums = "0123456789";
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== s[i].toUpperCase()) {
//             n += s[i];
//         } else if (!nums.includes(s[i]) && s[i] === s[i].toUpperCase()) {
//             n += `-${s[i].toLowerCase()}`;
//         }
//     }
//     if (n !== "") {
//         if (n[0] === "-") {
//             n = n.slice(1);
//         }
//         console.log(`Kebabized string for ${s} is ${n}`);
//     } else {
//         console.log("Input string is empty.");
//     }
//     r.close();
// });

// r.question("Target for how many seconds: ", (s) =>{
//     let c = setInterval(function(){
//         s--;
//         console.log(`${s} seconds remaining!`);

//         if (s == 0){
//             console.log("Timer has ended!");
//             clearInterval(c);
//         }
//     }, 1000);
//     r.close();
// });