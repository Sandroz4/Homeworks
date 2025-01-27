// import { useState, useEffect } from 'react';

// const calcdetails = [7, 8, 9, "DEL", 4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "x", "RESET", "="];

// const Calculator = () => {
//     const [operators, setOperator] = useState([]);
//     const [firstNum, setFirstNum] = useState("");
//     const [secondNum, setSecondNum] = useState("");
//     const [isFirst, setIsFirst] = useState(false);

//     useEffect(() => {
//         if (operators.length === 1 && operators[0] === "=") {
//             setOperator([]); 
//         } else if (operators.length === 2) {
//             setIsFirst(true);
//             let result;
//             if (operators[0] === "+") {
//                 result = Number(firstNum) + Number(secondNum);
//             } else if (operators[0] === "-") {
//                 result = Number(firstNum) - Number(secondNum);
//             } else if (operators[0] === "x") {
//                 result = Number(firstNum) * Number(secondNum);
//             } else if (operators[0] === "/") {
//                 if (secondNum === "0") {
//                     result = "ERROR";
//                 } else {
//                     result = Number(firstNum) / Number(secondNum);
//                 }
//             }

//             if (isNaN(result)) {
//                 result = "ERROR"; 
//             }

//             setFirstNum(result.toString());
//             setSecondNum("");

//             setOperator(prev => (operators[1] !== "=" ? [operators[1]] : []));
//         }

//     }, [operators, firstNum, secondNum]);  

//     useEffect(() => {
//         console.log("Current firstNum:", firstNum, "secondNum:", secondNum);
//     }, [firstNum, secondNum]);  

//     const handleButtonClick = (value) => {
//         if (["+", "-", "x", "/", "="].includes(value)) {
//             setOperator([firstNum, value]);
//         } else if (value === "RESET") {
//             setFirstNum("");
//             setSecondNum("");
//             setOperator([]);
//         } else if (value === "DEL") {
//             setSecondNum(secondNum.slice(0, -1));  
//         } else if (value === ".") {
//             if (!secondNum.includes(".")) {
//                 setSecondNum(secondNum + ".");
//             }
//         } else {
//             setSecondNum(secondNum + value);
//         }
//     };

//     return (
//         <div>
//             <div>
//                 <p>{firstNum}</p>
//                 <p>{secondNum}</p>
//             </div>
//             <div>
//                 {calcdetails.map((btn, index) => (
//                     <button key={index} onClick={() => handleButtonClick(btn)}>{btn}</button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Calculator;
