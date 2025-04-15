// import React, { useState, useMemo } from "react";

// const Product = React.memo(({ name, price, category }) => {
// console.log(${name} rendered);

// return (
// <div className="product-item">
// <h3>{name}</h3>
// <p>price: ${price}</p>
// <p>Category: {category}</p>
// </div>
// );
// });

// const App = () => {
// const [selectedCategory, setSelectedCategory] = useState("All");

// const products = [
// { id: 1, name: "Laptop", price: 999, category: "Electronics" },
// { id: 2, name: "Sofa", price: 499, category: "Furniture" },
// { id: 3, name: "T-shirt", price: 19.99, category: "Clothing" },
// { id: 4, name: "Phone", price: 699, category: "Electronics" },
// { id: 5, name: "Chair", price: 89, category: "Furniture" },
// { id: 6, name: "Jeans", price: 39.99, category: "Clothing" },
// ];

// const filteredProducts = useMemo(() => {
// if (selectedCategory === "All") return products;
// return products.filter(product => product.category === selectedCategory);
// }, [selectedCategory, products]);

// const handleCategoryChange = (e) => {
// const newCategory = e.target.value;
// setSelectedCategory(newCategory);
// };

// return (
// <div className="app-container">
// <h1>Product List</h1>

// ini

// Copy
//   <div className="filter-section">
//     <label htmlFor="category">Filter by category: </label>
//     <select
//       id="category"
//       value={selectedCategory}
//       onChange={handleCategoryChange}
//     >
//       <option value="All">All</option>
//       <option value="Electronics">Electronics</option>
//       <option value="Furniture">Furniture</option>
//       <option value="Clothing">Clothing</option>
//     </select>
//   </div>

//   <div className="products-grid">
//     {filteredProducts.map(({ id, name, price, category }) => (
//       <Product
//         key={id}
//         name={name}
//         price={price}
//         category={category}
//       />
//     ))}
//   </div>
// </div>
// );
// };

// export default App;