import Footer from "./Footer";

const Cart = ({cart})=>{
    const cartOrNot = cart || null;
    const map = cart.map(el=>{
        return(
            <div className="cart-item">
                <button>X</button>
                <p>{el.item_name} {el.quantity}</p>
                <img src={el.img} alt={`${el.item_name} image`} />
            </div>
        );
    })

    return(
        <>
        <div className="page">
            {cartOrNot ? map : <h2>Cart Is Empty</h2>
            
            }
        </div>
        <Footer />
        </>
    );
}

export default Cart;