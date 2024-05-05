import { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Shop = ({ data,changeCurrItem }) => {
  // data mapping
  const items = data.map((el) => {
    return (
      <div onClick={() => { changeCurrItem(el.id) }} className="w-80 h-3/4 mb-5 item hover:scale-105 duration-150 bg-white rounded-md" id={el.id} key={el.id}>
      <Link to='/Purchase' className="block">
        <img className="object-cover w-full h-96" src={el.img} alt={`${el.item_name} picture`} />
      </Link>
      <div className="p-4">
        <p className="text-lg font-bold mb-2">{el.item_name}</p>
        <p>
          <span className="sale-price font-bold text-gray-600">{`$${el.sale_price} `}</span>
          <span className="initial-price text-gray-400 line-through">{`$${el.initial_price}`}</span>
        </p>
      </div>
    </div>
    );
  });

  const latestCollection = data.filter(el => el.clothing_type === 'Men').map((el) => {
    return (
      <div onClick={() => { changeCurrItem(el.id) }} className="w-80 h-3/4 mb-5 item hover:scale-105 duration-150 bg-white rounded-md" id={el.id} key={el.id}>
      <Link to='/Purchase' className="block">
        <img className="object-cover w-full h-96" src={el.img} alt={`${el.item_name} picture`} />
      </Link>
      <div className="p-4">
        <p className="text-lg font-bold mb-2">{el.item_name}</p>
        <p>
          <span className="sale-price font-bold text-gray-600">{`$${el.sale_price} `}</span>
          <span className="initial-price text-gray-400 line-through">{`$${el.initial_price}`}</span>
        </p>
      </div>
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
      <div className="min-h-screen h-auto flex flex-wrap justify-center items-center" id="shop-first-page">
        <div className="flex flex-col gap-10" id="first-page-shop-text">
          <h2 className="text-7xl font-semibold">Brand</h2>
          <h2 className="text-7xl font-semibold">New</h2>
          <h2 className="text-7xl font-semibold">
            Collection Out <span className="font-bold text-orange-400">NOW</span>
          </h2>
          <button className="w-1/2 text-3xl p-4 rounded-full bg-orange-400 hover:brightness-90">
            <a href="#shop-third-page">Latest Collection </a>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <img
        id="cover-img"
        className="w-1/3 min-w-96"
          src="https://i.pinimg.com/736x/87/f4/bf/87f4bf10bf4d486c6950085cd5210a1b.jpg"
          alt="cover model"
        />
      </div>
      <div className="" id="shop-second-page">
        <h2 className="text-center text-3xl font-semibold">Popular</h2>
        <hr className="w-40 border-8 border-orange-400 mr-auto ml-auto" />
        <div className="flex flex-wrap gap-10 justify-center mt-5 min-h-screen">{items.slice(0,4)}</div>
      </div>
      <div className="page" id="shop-third-page">
      <h2 className="text-center text-3xl font-semibold">Latest Collection</h2>
        <hr className="w-40 border-8 border-orange-400 mr-auto ml-auto" />
        <div className="flex flex-wrap justify-center gap-10 p-20">
          {!more?latestCollection.slice(0,8) : latestCollection.slice(0,16)}
        </div>
        {more ? (
  <a href="#shop-third-page" className="flex justify-center">
    <button className="  mb-5 showing-more mr-auto ml-auto border-2 p-3 bg-white rounded-full hover:bg-orange-400 hover:text-black duration-150" id="show-more-button" onClick={toggleShow}>Show Less</button>
  </a>
) : (
  <div className="flex justify-center"><button className="  mb-5 showing-more mr-auto ml-auto border-2 p-3 bg-white rounded-full hover:bg-orange-400 hover:text-black duration-150" id="show-more-button" onClick={toggleShow}>Show More</button></div>
)}
        <div className="text-white flex flex-col gap-10 h-96 mx-10 justify-center items-center bg-orange-400 mb-5 "  id="shop-fourth-page">
          <div id="shop-text-div">
            <h2 className="text-6xl"><b>Special One Time Offer</b></h2>
            <h2 className="text-4xl">Up to</h2>
            <h2 className="text-7xl font-bold">30% OFF</h2>
            <h2><u>Your First Purchase</u></h2>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Shop;
