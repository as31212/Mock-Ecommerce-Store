
const Nav = ()=>{

    return(
        <>
        <header>
            <div id="logo-container">
            <i className="fa-solid fa-bag-shopping"></i>
                <h2>SHOP - IT</h2>
            </div>
            <ul>
                <li>Shop</li>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
            </ul>
            <div id="nav-button-container">
                <button>Login</button>
                <button><i className="fa-solid fa-cart-shopping"></i></button>
            </div>
        </header>
        </>
    );
}

export default Nav