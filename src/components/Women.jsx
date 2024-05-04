import Footer from "./Footer";
import { Link,useLocation } from "react-router-dom";

const Women = ({data,dropdown,changeDropdown,changeCurrItem})=>{


    const items = dropdown === 'low-high' ? [...data].sort((a,b)=> a.sale_price - b.sale_price).filter(el=> el.clothing_type === 'Women').map((el) => {
        return (
          <div onClick={()=>{changeCurrItem(el.id)}} className={`item ${el.clothing_type}`} id={el.id} key={el.id}>
            <Link to= '/Purchase'>
            <img src={el.img} alt={`${el.item_name} picture`} />
            <p>{el.item_name}</p>
            <p>
              <span className="sale-price">{`$${el.sale_price} `}</span> 
              <span className="initial-price">{`$${el.initial_price}`}</span>
            </p>
            </Link>
          </div>
        );
    }) : [...data].sort((a,b)=> b.sale_price - a.sale_price).filter(el=> el.clothing_type === 'Women').map((el) => {
        return (
          <div onClick={()=>{changeCurrItem(el.id)}} className={`item ${el.clothing_type}`} id={el.id} key={el.id}>
            <Link to= '/Purchase'>
            <img src={el.img} alt={`${el.item_name} picture`} />
            <div className="item-text">
              <p>{el.item_name}</p>
              <p>
                <span className="sale-price">{`$${el.sale_price} `}</span>
                <span className="initial-price">{`$${el.initial_price}`}</span>
              </p>
            </div>
            </Link>
            
          </div>
        );
    })


    return(
        <>
       <div >
            <div className="p-dropdown-div">
                <p>Showing<b> 1 -{items.length}</b> out of {data.length} products</p>
                {dropdown === "low-high" ? <select onChange={(event) => changeDropdown(event)}>
                    <option selected value="low-high">Low Price - High Price </option>
                    <option value="high-low">High Price - Low Price</option>
                </select> : <select onChange={(event) => changeDropdown(event)}>
                    <option value="low-high">Low Price - High Price </option>
                    <option selected value="high-low">High Price - Low Price</option>
                </select> }
            </div>
        </div>
        <div className="item-container">
            {items}
        </div>
        <Footer />
        </>
    );
}

export default Women;