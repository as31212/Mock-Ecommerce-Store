
import Footer from "./Footer";

const Purchase = ({currItem,data}) => {
    
const item = data.find(el=> el.id === currItem);
    return (
        <>
            <div id="purchase-page">
                <div id="purchase-images">
                    <img src={item.img} alt={`${item.item_name} image`} />
                </div>
               <div id="purchase-text">
                   <h2>{item.item_name}</h2>
                   <p><b>Category: </b>{item.clothing_type}</p>
                   <p><span id="sale">${item.sale_price}</span>  <span id="initial">${item.initial_price}</span></p>
                   <div id="size-buttons">
                       <button>S</button>
                       <button>M</button>
                       <button>L</button>
                       <button>XL</button>
                       <button>XXL</button>
                   </div>
            <button id="add-cart">Add To Cart</button>
               </div>

            </div>
            <Footer />
        </>
    );
}

export default Purchase;
