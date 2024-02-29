import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { createBrowserRouter, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* Wrapping the entire application with BrowserRouter for client-side routing  */}
    <BrowserRouter>
      {/* Rendering the main App component  */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
