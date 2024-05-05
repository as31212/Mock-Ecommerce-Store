import Footer from "./Footer";
import { Link,useLocation } from "react-router-dom";

const Kids = ({data,dropdown,changeDropdown,changeCurrItem})=>{


    const items = dropdown === 'low-high' ? [...data].sort((a,b)=> a.sale_price - b.sale_price).filter(el=> el.clothing_type === 'Kids').map((el) => {
        return (
          <div onClick={() => { changeCurrItem(el.id) }} className="w-80 h-3/4 mb-5 item hover:scale-105 duration-150 bg-white rounded-md" id={el.id} key={el.id}>
      <Link to='/Purchase' className="block">
        <img className="object-cover w-full h-96" src={el.img} alt={`${el.item_name} picture`} />
      </Link>
      <div className="p-4">
        <p className="text-lg mb-2">{el.item_name}</p>
        <p>
          <span className="sale-price font-bold text-gray-600">{`$${el.sale_price} `}</span>
          <span className="initial-price text-gray-400 line-through">{`$${el.initial_price}`}</span>
        </p>
      </div>
    </div>
        );
    }) : [...data].sort((a,b)=> b.sale_price - a.sale_price).filter(el=> el.clothing_type === 'Kids').map((el) => {
        return (
          <div onClick={() => { changeCurrItem(el.id) }} className="w-80 h-3/4 mb-5 item hover:scale-105 duration-150 bg-white rounded-md" id={el.id} key={el.id}>
      <Link to='/Purchase' className="block">
        <img className="object-cover w-full h-96" src={el.img} alt={`${el.item_name} picture`} />
      </Link>
      <div className="p-4">
        <p className="text-lg mb-2">{el.item_name}</p>
        <p>
          <span className="sale-price font-bold text-gray-600">{`$${el.sale_price} `}</span>
          <span className="initial-price text-gray-400 line-through">{`$${el.initial_price}`}</span>
        </p>
      </div>
    </div>
        );
    })


    return(
        <>
       <div className="p-10" >
            <div className="flex justify-between select-container px-5">
                <p id="showing">Showing<b> 1 -{items.length}</b> out of {data.length} products</p>
                {dropdown === "low-high" ? <select className="border-2 border-gray-400 p-2 rounded-full" onChange={(event) => changeDropdown(event)}>
                    <option selected value="low-high">Low Price - High Price </option>
                    <option value="high-low">High Price - Low Price</option>
                </select> : <select className="border-2 border-gray-400 p-2 rounded-full" onChange={(event) => changeDropdown(event)}>
                    <option value="low-high">Low Price - High Price </option>
                    <option selected value="high-low">High Price - Low Price</option>
                </select> }
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
            {items}
        </div>
        <Footer />
        </>
    );
}

export default Kids;