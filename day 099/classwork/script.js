// const fetchJewellery = async () => {
//     try{
//         const res = await fetch('https://fakestoreapi.com/products');
//         const data = await res.json();

//         for(const product of data){
//             console.log(product)
//     }
//     }catch(err){
//         console.log('error')
//     }
// }

// fetchJewellery();


const myForm = document.getElementById('form');

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(myForm.elements);
});

