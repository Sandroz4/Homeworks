// import { useState, useEffect } from "react";

// const WindowSizeChange = () => {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   const divStyle = {
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "5px",
//   };

//   const handleResize = () => {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div style={divStyle}>
//       <p>Window is {width > height ? "horizontal" : "vertical"}</p>
//     </div>
//   );
// };

// export default WindowSizeChange;