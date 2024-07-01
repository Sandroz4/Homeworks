// 6. Create a function that prints messages "One", 
// "Two", and "Three" with delays of 1, 2, and 3 seconds respectively.



function printMessagesWithDelay() {
    setTimeout(() => {
        console.log("One");
        setTimeout(() => {
            console.log("Two");
            setTimeout(() => {
                console.log("Three");
            }, 3000);
        }, 2000);
    }, 1000);
}

printMessagesWithDelay();
