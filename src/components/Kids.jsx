import Footer from "./Footer";

const Kids = ({data,dropdown,changeDropdown})=>{
    const items = dropdown === 'low-high' ? [...data].sort((a,b)=> a.sale_price - b.sale_price).filter(el=> el.clothing_type === 'Kids').map((el) => {
        return (
          <div className={`item ${el.clothing_type}`} id={el.id} key={el.id}>
            <img src={el.img} alt={`${el.item_name} picture`} />
            <p>{el.item_name}</p>
            <p>
              <span className="sale-price">{`$${el.sale_price} `}</span> 
              <span className="initial-price">{`$${el.initial_price}`}</span>
            </p>
          </div>
        );
    }) : [...data].sort((a,b)=> b.sale_price - a.sale_price).filter(el=> el.clothing_type === 'Kids').map((el) => {
        return (
          <div className={`item ${el.clothing_type}`} id={el.id} key={el.id}>
            <img src={el.img} alt={`${el.item_name} picture`} />
            <p>{el.item_name}</p>
            <p>
              <span className="sale-price">{`$${el.sale_price} `}</span> 
              <span className="initial-price">{`$${el.initial_price}`}</span>
            </p>
          </div>
        );
    })


    return(
      <>
     <div >
          <div id="p-dropdown-div">
              <p>Showing<b>1 -{items.length}</b> out of {data.length} products</p>
              {dropdown === "low-high" ? <select onChange={(event) => changeDropdown(event)}>
                  <option selected value="low-high">Low Price - High Price</option>
                  <option value="high-low">High Price - Low Price</option>
              </select> : <select onChange={(event) => changeDropdown(event)}>
                  <option value="low-high">Low Price - High Price</option>
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

export default Kids;