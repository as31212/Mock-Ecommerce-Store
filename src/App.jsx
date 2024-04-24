import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import Shop from './components/Shop';
import Login from './components/login/Login';
import Cart from './components/Cart';
import SignIn from './components/login/SignIn';


function App() {
  // routing for events

  

  return (
    <Router>
      <Nav />
      <Routes> 
        <Route path='/Men' element={<Men />} />
        <Route path='/Women' element={<Women />} />
        <Route path='/Kids' element={<Kids />} />
        <Route path='/' element={<Shop />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/SignIn' element={<SignIn />} /> 
      </Routes>
    </Router>
  )
}

export default App
