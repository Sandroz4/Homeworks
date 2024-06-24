// // 1. Create an object person, with properties: name and age. 
// // Use Object.assign to create a new object employee with additional property - position.

// let person = {
//     name: 'sandro',
//     age: 16
// }

// const employee = Object.assign({}, person, { position: "AI Engineer" });
// console.log(employee)


// // 2. Merge two objects obj1 and obj2 into a new object using 
// // Object.assign.

// const obj1 = { age: 1, circ: 2 }
// const obj2 = { age: 3, circ: 4 }

// const mergedObj = Object.assign({}, obj1, obj2);
// console.log(mergedObj)


// // 3. Copy properties from multiple source objects into a single
// //  target object using Object.assign.

// const source1 = { first: 1 }
// const source2 = { second: 2 }
// const source3 = { third: 3 }

// const target = Object.assign({}, source1, source2, source3)
// console.log(target)


// // 4. Use Object.assign to clone an object original.
// const original = { a: 1, b: 2 }

// const clone = Object.assign({}, original)
// console.log(clone)


// // 5. Merge properties of an object source into another object target 
// // using Object.assign.
// const target = { a: 1, b: 2 }
// const source = { b: 3, c: 4 }

// Object.assign(target, source)
// console.log(target)   


// // 6. Merge arrays of objects into a single object using Object.assign.
// const arr = [{ a: 1 }, { b: 2 }, { c: 3 }]

// const mergedObj = Object.assign({}, ...arr)
// console.log(mergedObj)


// // 7. Use Object.assign to update properties of an existing object with new values.
// const existingObj = { a: 1, b: 2 }

// const updates = { b: 3, c: 4 }
// Object.assign(existingObj, updates)
// console.log(existingObj) 


// // 8. Implement a function extend that takes two objects and merges their 
// // properties using Object.assign.
// function extend(obj1, obj2) {
//     return Object.assign({}, obj1, obj2)
//   }
  
//   const objA = { a: 1 }
//   const objB = { b: 2 }
//   console.log(extend(objA, objB)) 
  

