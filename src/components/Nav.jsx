import { Link, useNavigate } from 'react-router-dom';
const Nav = ()=>{

    const navigate = useNavigate();
    const handleClick = (path)=>{
        navigate(path);
    }

    return(
        <>
        <header>
            <div onClick={()=> handleClick('/Shop')} id="logo-container">
            <i className="fa-solid fa-bag-shopping"></i>
                <h2>SHOP - IT</h2>
            </div>
            <ul>
                <li><Link to="/Shop">Shop</Link></li>
                <li><Link to="/Men">Men</Link></li>
                <li><Link to="/Women">Women</Link></li>
                <li><Link to="/Kids">Kids</Link></li>
            </ul>
            <div id="nav-button-container">
                <button onClick={()=> handleClick('/login')}>Login</button>
                <i onClick={()=> handleClick('/Cart')} className="fa-solid fa-cart-shopping"></i>
            </div>
        </header>
        </>
    );
}

export default Nav