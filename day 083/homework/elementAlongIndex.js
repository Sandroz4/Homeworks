// 2. Logging Array Elements with Index: Write a function that takes an array of 
// strings as input and logs each element along with its index using forEach.

function logArrayElementsWithIndex(arr) {
    arr.forEach(function(element, index) {
        console.log("Index:", index, "Element:", element);
    });
}

const strings = ["apple", "banana", "cherry", "date"];
logArrayElementsWithIndex(strings);

