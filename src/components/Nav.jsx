import { Link, useLocation, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Nav = ({ cart, toggleNav, activeNav , falseNav }) => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  const location = useLocation();
  return (
    <>
      <header className="flex flex-wrap justify-between items-center shadow p-4 h-auto">
        <div className="flex items-center gap-2" onClick={() => handleClick("/")}>
          <i id="shop-it-logo" className="fa-solid fa-bag-shopping text-orange-400 text-4xl"></i>
          <h2 id="shop-it-nav-text" className="text-3xl">SHOP - IT</h2>
        </div>
        <ul id="nav-links" className="flex gap-10 text-2xl">
          <li onClick={()=> falseNav()} className={location.pathname === "/" ? "border-b-4 pb-1 border-orange-400" : "border-b-4 pb-1 border-transparent"}>
            <Link to="/">Shop</Link>
          </li>
          <li onClick={()=> falseNav()} className={location.pathname === "/Men" ? "border-b-4 pb-1 border-orange-400" : "border-b-4 pb-1 border-transparent"}>
            <Link to="/Men">Men</Link>
          </li>
          <li onClick={()=> falseNav()} className={location.pathname === "/Women" ? "border-b-4 pb-1 border-orange-400" : "border-b-4 pb-1 border-transparent"}>
            <Link to="/Women">Women</Link>
          </li>
          <li onClick={()=> falseNav()} className={location.pathname === "/Kids" ? "border-b-4 pb-1 border-orange-400" : "border-b-4 pb-1 border-transparent"}>
            <Link to="/Kids">Kids</Link>
          </li>
        </ul>
        <i id="nav-hamburger" onClick={() => toggleNav()} className="fa-solid fa-bars mr-auto ml-auto "></i>
        <ul id="nav-links-toggle" className={activeNav ? 'flex flex-col gap-10 text-2xl' : 'hidden'}>
          <li onClick={()=> falseNav()} className={location.pathname === "/" ? "border-b-4 pb-1 border-orange-400" : "border-b-4 pb-1 border-transparent"}>
            <Link to="/">Shop</Link>
          </li>
          <li onClick={()=> falseNav()} className={location.pathname === "/Men" ? "border-b-4 pb-1 border-orange-400" : "border-b-4 pb-1 border-transparent"}>
            <Link to="/Men">Men</Link>
          </li>
          <li onClick={()=> falseNav()} className={location.pathname === "/Women" ? "border-b-4 pb-1 border-orange-400" : "border-b-4 pb-1 border-transparent"}>
            <Link to="/Women">Women</Link>
          </li>
          <li onClick={()=> falseNav()} className={location.pathname === "/Kids" ? "border-b-4 pb-1 border-orange-400" : "border-b-4 pb-1 border-transparent"}>
            <Link to="/Kids">Kids</Link>
          </li>
          <li onClick={()=> falseNav()} className={location.pathname === "/Login" ? "border-b-4 pb-1 border-orange-400" : "border-b-4 pb-1 border-transparent"}>
            <Link to="/Login">Login</Link>
          </li>
          <li onClick={()=> falseNav()} className={location.pathname === "/Cart" ? "border-b-4 pb-1 border-orange-400" : "border-b-4 pb-1 border-transparent"}>
            <Link to="/Cart">Cart</Link>
          </li>
        </ul>
        <div id="cart-and-login" className="flex items-center gap-5">
          <button className={location.pathname === "/Login" || location.pathname === "/SignUp" ? "border-2 border-white p-3 px-5 rounded-full text-white bg-orange-400" : "border-2 border-gray-400 p-3 px-5 rounded-full hover:bg-orange-400 hover:text-white hover:border-white duration-150"}
            onClick={() => handleClick("/Login")}
          >
            Login
          </button>
          <i
            onClick={() => handleClick("/Cart")}
            className={`fa-solid fa-cart-shopping cart-icon relative text-3xl hover:text-orange-400 duration-150 ${location.pathname === "/Cart" ? "text-orange-400" : "text-black hover:text-gray-700"}`}
          >
            <span className="item-count absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-orange-400 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
              {Number(cart.reduce((acc, el) => acc + Number(el.quantity), 0)).toFixed(0)}
            </span>
          </i>
        </div>
      </header>
    </>
  );
};

export default Nav;
