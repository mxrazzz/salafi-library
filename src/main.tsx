// Code: Main entry point for the application
// This file is the main entry point for the application. It renders the App component into the root element in the HTML file. The App component is wrapped in a React.StrictMode component to enable additional checks and warnings for potential issues in the application. The root element is created using ReactDOM.createRoot and the App component is rendered into the root element using the render method.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);