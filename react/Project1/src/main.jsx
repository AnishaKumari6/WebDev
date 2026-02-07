import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
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





