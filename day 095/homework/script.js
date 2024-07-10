

const p = document.getElementById('title')
const img = document.getElementById('product-img')
const price = document.getElementById('price')


const obj = fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
