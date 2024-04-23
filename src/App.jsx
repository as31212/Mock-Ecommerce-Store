import { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav'
import Men from './components/Men'
import Women from './components/Women'
import Kids from './components/Kids'
import Shop from './components/Shop'
import Login from './components/Login';
import Cart from './components/Cart';


function App() {

  const [data,setData] = useState([]);

  const fetchData = async()=>{
    const response = await fetch('');
    const data = await response.json();
    setData(data)
}
useEffect(()=>{
  fetchData();
},[])
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/Men' element={<Men />} />
        <Route path='/Women' element={<Women />} />
        <Route path='/Kids' element={<Kids />} />
        <Route path='/Shop' element={<Shop data={data} />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
