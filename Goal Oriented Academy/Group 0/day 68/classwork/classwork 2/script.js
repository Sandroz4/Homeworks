document.getElementById('Button').addEventListener('click', function() {
    var flexContainer = document.querySelector('.flex-container');
    if (flexContainer.style.flexDirection === 'row') {
        flexContainer.style.flexDirection = 'column'
    } else {
        flexContainer.style.flexDirection = 'row'
    }
})
