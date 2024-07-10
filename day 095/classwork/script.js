

const p = document.getElementById('title')
const img = document.getElementById('product-img')
const price = document.getElementById('price')


const obj = fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(data => {
        p.textContent = data.title
        img.src = data.image
        price.textContent = data.price 
        img.width = 200
    })
    .catch(err => console.log(err))
