import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav'
import Men from './components/Men'
import Women from './components/Women'
import Kids from './components/Kids'
import Shop from './components/Shop'
import Login from './components/Login';
import Cart from './components/Cart';

function App() {


  return (
    <>
    <Nav></Nav>
    </>
  )
}

export default App


{/* <Router>
<Switch>
<Route path='/Men'>
    <Men/>
</Route>
</Switch>
</Router> */}