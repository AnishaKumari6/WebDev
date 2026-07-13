import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App


// react router dom: client side routing and navigation library for react applications. It allows you to create single page applications with navigation without the need for a full page refresh. It provides a way to handle routing in your react application, allowing you to define different routes and render different components based on the current URL.


