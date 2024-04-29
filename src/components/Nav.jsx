import { Link,useLocation,useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Nav = ({cart})=>{
    const navigate = useNavigate();
    const handleClick = (path)=>{
        navigate(path);
    }
// use location instantiation will be used to determine which route im currently in and style the nav accordingly

const location = useLocation();
    return(
        <>
        <header>
            <div onClick={()=> handleClick('/')} id="logo-container">
            <i className="fa-solid fa-bag-shopping"></i>
                <h2>SHOP - IT</h2>
            </div>
            <ul>
                <li className={location.pathname === '/'?'active':''}><Link to='/'>Shop</Link></li>
                <li className={location.pathname === '/Men'?'active':''}><Link to="/Men">Men</Link></li>
                <li className={location.pathname === '/Women'?'active':''}><Link to="/Women">Women</Link></li>
                <li className={location.pathname === '/Kids'?'active':''}><Link to="/Kids">Kids</Link></li>
            </ul>
            <div id="nav-button-container">
                <button className={location.pathname === '/Login' || location.pathname === '/SignUp'? 'change':'unchanged'} onClick={()=> handleClick('/Login')}>Login</button>
                <i onClick={()=> handleClick('/Cart')} className={`fa-solid fa-cart-shopping cart-icon ${location.pathname === '/Cart' ? 'full' : ''}`}><span className='item-count'>{Number(cart.reduce((acc,el)=> acc + el.quantity,0)).toFixed(0)}</span></i>
                
            </div>
        </header>
        </>
    );
}

export default Nav