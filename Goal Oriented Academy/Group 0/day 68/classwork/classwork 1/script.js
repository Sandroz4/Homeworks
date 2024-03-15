const greeting = document.getElementById('greeting');

greeting.innerHTML = 'bye';

const words = document.getElementsByClassName('words');

for (let i = 0; i < words.length; i++) {
    words[i].innerHTML = 'all'
}


const para = document.getElementsByTagName('p');

for (let i = 0; i < para.length; i++) {
    para[i].innerHTML = 'idk'
}