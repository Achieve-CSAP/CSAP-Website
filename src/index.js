import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import About from './components/About/About';
import Home from './components/Home/Home';
import Register from './components/Register/Register';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' element={<Home />}/>
        <Route path = '/about' element={<About />}/>
        <Route path = '/contact' element={<Contact />}/>
        <Route path = '/register' element={<Register />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
