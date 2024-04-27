import { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Shop = ({ data,changeCurrItem }) => {
  // data mapping
  const items = data.map((el) => {
    return (
      <div onClick={()=>{changeCurrItem(el.id)}} className={`item ${el.clothing_type}`} id={el.id} key={el.id}>
        <Link to='/Purchase'><img src={el.img} alt={`${el.item_name} picture`} />
        <p>{el.item_name}</p>
        <p>
          <span className="sale-price">{`$${el.sale_price} `}</span> 
          <span className="initial-price">{`$${el.initial_price}`}</span>
        </p></Link>
      </div>
    );
  });

  const latestCollection = data.filter(el=> el.clothing_type === 'Men').map((el) => {
    return (
      <div onClick={()=>changeCurrItem(el.id)} className={`item ${el.clothing_type}`} id={el.id} key={el.id}>
        <Link to='/Purchase'><img src={el.img} alt={`${el.item_name} picture`} />
        <p>{el.item_name}</p>
        <p>
          <span className="sale-price">{`$${el.sale_price} `}</span> 
          <span className="initial-price">{`$${el.initial_price}`}</span>
        </p></Link>
      </div>
    );
  });

  // Show more logic
  const [more,setMore] = useState(false);

  const toggleShow = ()=>{
    setMore(!more);
  }

  return (
    <>
      <div className="page" id="shop-first-page">
        <div id="first-page-shop-text">
          <h2>Brand</h2>
          <h2>New</h2>
          <h2>
            Collection Out <span className="orange-bold">NOW</span>
          </h2>
          <button>
            <a href="#shop-third-page">Latest Collection </a>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <img
          src="https://i.pinimg.com/736x/87/f4/bf/87f4bf10bf4d486c6950085cd5210a1b.jpg"
          alt="cover model"
        />
      </div>
      <div className="page" id="shop-second-page">
        <h2>Popular</h2>
        <hr />
        <div className="item-container">{items.slice(0,4)}</div>
      </div>
      <div className="page" id="shop-third-page">
        <h2>Latest Collection</h2>
        <hr />
        <div className="item-container">
          {!more?latestCollection.slice(0,8) : latestCollection.slice(0,16)}
        </div>
        {more ? (
  <a href="#shop-third-page" className="button-wrapper">
    <button className="showing-more" id="show-more-button" onClick={toggleShow}>Show Less</button>
  </a>
) : (
  <button className="showing-less" id="show-more-button" onClick={toggleShow}>Show More</button>
)}
        <div className="page" id="shop-fourth-page">
          <img src="https://media.istockphoto.com/id/1285265702/photo/joyful-black-guy-jumping-up-and-pointing-aside.jpg?s=612x612&w=0&k=20&c=wH6q7qgusf5DV1NcMki_x7jQWsJpVxF9tp5QMk6j0o8=" alt="deals man" />
          <div id="shop-text-div">
            <h2><b>Special One Time Offer</b></h2>
            <h2></h2>
            <h2>Up to</h2>
            <h2 className="large">30% OFF</h2>
            <h2><u>Your First Purchase</u></h2>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Shop;
