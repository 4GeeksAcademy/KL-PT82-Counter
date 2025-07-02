import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap & Font Awesome
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Global styles
import "../styles/darkModern.css";



// Main component
import Home from './components/Home';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
