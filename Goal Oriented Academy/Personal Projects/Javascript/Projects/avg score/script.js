document.getElementById('submitButton').addEventListener('click', function() {
    const userInput1 = parseFloat(document.getElementById('grade1').value);
    const userInput2 = parseFloat(document.getElementById('grade2').value);
    const userInput3 = parseFloat(document.getElementById('grade3').value);

    const avg = (userInput1 + userInput2 + userInput3) / 3;

    document.getElementById('textcontent').textContent = isNaN(avg) ? "Invalid input" : avg.toFixed(2);
});
