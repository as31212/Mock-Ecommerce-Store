import { Link } from "react-router-dom";
import Footer from "./Footer";

const Purchase = ({currItem,data,cart,addToCart,currQuantity, increaseQuantity, decreaseQuantity, changeQuantityInput, quantityReset}) => {
    
const item = data.find(el=> el.id === currItem);
const handleClick = ()=>{
    addToCart(item);
    quantityReset();
    console.log(item);
}
    return (
        <>
            <div className="min-h-screen flex flex-wrap justify-center items-center gap-10" id="purchase-page">
    <div className="w-1/3 min-w-80" id="purchase-images">
        <img src={item.img} alt={`${item.item_name} image`} className="rounded-lg shadow-md" />
    </div>
    <div className="flex flex-col items-center gap-4 md:gap-8" id="purchase-text">
        <h2 className="text-3xl font-semibold">{item.item_name}</h2>
        <p className="text-gray-600"><b>Category:</b> {item.clothing_type}</p>
        <div className="flex justify-center" id="quantity">
            <button className="border-2 p-2 border-white bg-orange-400 font-bold text-white" onClick={()=>decreaseQuantity()}>-</button>
            <input className=" appearance-none w-2/12 border-2" onChange={()=>{changeQuantityInput(event)}} value={currQuantity} type="number" />
            <button className="border-2 p-2 border-white bg-orange-400 font-bold text-white" onClick={()=>increaseQuantity()}>+</button>
        </div>
        <div className="flex items-center">
            <span className="text-lg font-semibold text-orange-400 mr-2">${item.sale_price}</span>
            <span className="text-gray-500 line-through">${item.initial_price}</span>
        </div>
        <Link to='/Cart'><button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105" onClick={handleClick} id="add-cart">Add To Cart</button></Link>
    </div>
</div>
<Footer />

        </>
    );
}

export default Purchase;
