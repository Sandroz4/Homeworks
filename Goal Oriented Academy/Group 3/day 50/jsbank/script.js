let amountOfMoney = document.getElementById("amount-of-money");
let numberInput = document.getElementById("input1");
let depositBtn = document.getElementById("deposit-btn");
let widthdrawBtn = document.getElementById("widthdraw-btn");

let amount = 1000;
let value;

depositBtn.addEventListener('click', function(){
    value = Number(numberInput.value);
    amount += value;
    amountOfMoney.textContent = `Amount: ${amount}$`;
})

widthdrawBtn.addEventListener('click', function(){
    value = Number(numberInput.value);
    
    if (value > amount) {
        alert("Cannot withdraw more than the available amount!");
    } else {
        amount -= value;
        amountOfMoney.textContent = `Amount: ${amount}$`;
    }
});


