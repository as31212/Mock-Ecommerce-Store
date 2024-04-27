
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
                   <p><span>{item.initial_price}</span></p>
               </div>

            </div>
            <Footer />
        </>
    );
}

export default Purchase;
