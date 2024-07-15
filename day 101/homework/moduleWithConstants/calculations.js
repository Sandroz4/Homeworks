import { PI, E } from './constants.js'

const areaOfCircle = (radius) => {
    return PI * radius * radius
}

const exponential = (x) => {
    return E ** x
}

console.log(`Area of a circle with radius 5: ${areaOfCircle(5)}`) 
console.log(`e raised to the power of 2: ${exponential(2)}`) 

