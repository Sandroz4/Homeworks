import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import Increment from './increment'; // Main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Increment />
  </React.StrictMode>
);
