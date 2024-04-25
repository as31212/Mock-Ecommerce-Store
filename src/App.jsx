import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from "./components/Nav";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Shop from "./components/Shop";
import Login from "./components/login/Login";
import Cart from "./components/Cart";
import SignUp from "./components/login/SignUp";
import Footer from "./components/Footer";

function App() {
  // data retrieval

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/clothing.json");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/Men" element={<Men data={data} />} />
        <Route path="/Women" element={<Women data={data} />} />
        <Route path="/Kids" element={<Kids data={data} />} />
        <Route path="/" element={<Shop data={data} /> } />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart data={data} />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
