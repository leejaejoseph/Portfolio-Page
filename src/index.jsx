import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import "./index.css"

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

// Take the imported App component and render to root DOM.
root.render(<App />);