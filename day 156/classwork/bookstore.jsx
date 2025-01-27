// import { useEffect, useState } from 'react';

// const App = () => {
//   const [books, setBooks] = useState([]);
//   const [library, setLibrary] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=roman");
//         const data = await response.json();
//         setBooks(data.items || []);
//       } catch (error) {
//         console.error('error:', error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   const addToLibrary = (book) => {
//     setLibrary((prevLibrary) => [...prevLibrary, book]);
//   };

//   return (
//     <>
//       <h1>library</h1>

//       <div>
//         {books.length === 0 ? (
//           <p>books</p>
//         ) : (
//           books.map((book) => (
//             <div key={book.id} style={{ marginBottom: '20px' }}>
//               <h3>{book.volumeInfo.title}</h3>
//               <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
//               <button onClick={() => addToLibrary(book)}>library</button>
//             </div>
//           ))
//         )}
//       </div>

//       <h2>library</h2>

//       <div>
//         {library.length === 0 ? (
//           <p>empty.</p>
//         ) : (
//           library.map((book) => (
//             <div key={book.id} style={{ marginBottom: '10px' }}>
//               <h3>{book.volumeInfo.title}</h3>
//               <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </>
//   );
// };

// export default App;
