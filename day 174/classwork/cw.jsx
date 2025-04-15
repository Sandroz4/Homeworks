// import React, { useState, useEffect, useMemo } from "react";

// const useCachedApiData = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);


//   const cachedData = useMemo(() => {
//     const cached = localStorage.getItem(url);
//     return cached ? JSON.parse(cached) : null;
//   }, [url]);

//   useEffect(() => {
//     if (cachedData) {
//       setData(cachedData);
//       setLoading(false);
//     } else {

//       fetch(url)
//         .then((response) => response.json())
//         .then((result) => {
//           setData(result);
//           localStorage.setItem(url, JSON.stringify(result)); 
//           setLoading(false);
//         })
//         .catch(() => {
//           setLoading(false);
//           setData(null);
//         });
//     }
//   }, [url, cachedData]);


// export default App;
