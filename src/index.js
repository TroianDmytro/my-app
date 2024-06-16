import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import MyComponent from './components/MyComponent/MyComponent.js';
import reportWebVitals from './reportWebVitals';
import Shveps from "./components/Shveps/Shveps.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Shveps />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
