import Footer from "./Footer";

const Cart = ({cart,removeFromCart,updateQuantity})=>{
    const map = cart.map(el=>{
        return(
            <>
            <div className="cart-item ">
                <img className="" src={el.img} alt={`${el.item_name} image`} />
                <p className="cart-item-name">{el.item_name}</p>
                <p className="">{el.sale_price}</p>
                <input className="" pattern="[1-100]*" onChange={()=>updateQuantity(el.id,event.target.value)} value={el.quantity} type="number"/>
                <p className="">{((Number(el.quantity) * Number(el.sale_price)).toFixed(2))}</p>
                <button className="" onClick={()=>removeFromCart(el.id)}>X</button>
            </div>
            <hr className="cart-hr" />
            </>
        );
    })

    return(
        <>
        <div className="page-cart">
            <p className="cart-titles">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </p>
            <hr id="cart-hr" />
            {cart.length > 0 ? <div id="cart-item-container">{map}</div> : <div className="cart-item-container"><h2>No Items In Cart</h2></div>
            
            }
            <div id="sub-total">
                <h2>Cart Totals</h2>
                <p><span id="sub-total-title-span">Subtotal</span> {(cart.reduce((acc,el)=> acc + el.sale_price * el.quantity,0)).toFixed(2)}</p>
                <hr />
                <p><span id="shipping-title-span">Shipping-Fee</span> Free</p>
                <hr />
                <p><span id="total-title-span"><b>Total</b></span> <b>{(cart.reduce((acc,el)=> acc + el.sale_price * el.quantity,0)).toFixed(2)}</b></p>
                <button>Proceed To Checkout</button>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Cart;