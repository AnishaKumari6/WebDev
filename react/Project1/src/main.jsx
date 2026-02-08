import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const myelement=(
  <div className='demo'>
    <p>My name is Anisha</p>
    <p>My all time work is being happy</p>
  </div>
);
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App /> 
  </StrictMode>,
)





