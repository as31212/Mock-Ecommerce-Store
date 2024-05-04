import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import Purchase from "./components/Purchase";
import Footer from "./components/Footer";

function App() {
// hamburger bar
const [activeNav,setActiveNav] = useState(false);
const toggleNav = ()=>{
  setActiveNav(!activeNav);
}

  // data retrieval

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/clothing.json");
      const data = await response.json();
      setData(data);
    }
     catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  // dropdown state 
  const [dropdown,setDropdown] = useState('low-high');
  const changeDropdown = (event)=>{
    setDropdown(event.target.value);
    console.log('dropdown updated');
  }

// clicking item logic
const [currItem,setCurrItem] = useState(1);
const changeCurrItem = (id)=>{
  setCurrItem(id);
}

// cart logic

const [cart, setCart] = useState([]);

const addToCart = (obj) => {
  if (cart.some((el) => el.id === obj.id)) {
    const dupeCart = [...cart];
    const dupeIndex = cart.findIndex((el) => el.id === obj.id);
    dupeCart[dupeIndex].quantity += 1;
    setCart(dupeCart); 
  } else {
    setCart([...cart,
      {
        id: obj.id,
        quantity: 1,
        img: obj.img,
        clothing_type: obj.clothing_type,
        sale_price: obj.sale_price,
        item_name: obj.item_name,
      },
    ]);
  }
}

// quantity logic
const updateQuantity = (id,quantity)=>{
  if(quantity <= 0){
    return;
  }
  const dupeCart = [...cart];
  dupeCart.find(el=> el.id === id).quantity = quantity;
  setCart(dupeCart);
  }

const removeFromCart = (id)=>{
  const dupeCart = [...cart];
  dupeCart.splice(cart.find(el=> el.id === id),1);
  setCart(dupeCart);
}
  return (
    <Router>
      <Nav activeNav={activeNav} toggleNav={toggleNav} cart={cart} />
      <Routes>
        <Route path="/Men" element={<Men changeCurrItem={changeCurrItem} dropdown={dropdown} changeDropdown={changeDropdown} data={data} />} />
        <Route path="/Women" element={<Women changeCurrItem={changeCurrItem} dropdown={dropdown} changeDropdown={changeDropdown} data={data} />} />
        <Route path="/Kids" element={<Kids changeCurrItem={changeCurrItem} dropdown={dropdown} changeDropdown={changeDropdown} data={data} />} />
        <Route path="/" element={<Shop changeCurrItem={changeCurrItem} data={data} /> } />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart updateQuantity={updateQuantity} removeFromCart={removeFromCart} cart={cart} data={data} />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Purchase" element={<Purchase cart={cart} addToCart={addToCart} currItem={currItem} data={data}/>} />
      </Routes>
    </Router>
  );
}

export default App;
