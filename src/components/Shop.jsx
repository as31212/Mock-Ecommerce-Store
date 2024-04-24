const Shop = () => {
  return (
    <>
      <div className="shop-page" id="shop-first-page">
        <div id="first-page-shop-text">
          <h2>Brand</h2>
          <h2>New</h2>
          <h2>
            Collection Out <span className="orange-bold">NOW</span>
          </h2>
          <button><a href="#shop-third-page">Latest Collection </a>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <img
          src="https://i.pinimg.com/736x/87/f4/bf/87f4bf10bf4d486c6950085cd5210a1b.jpg"
          alt="cover model"
        />
      </div>
      <div className="shop-page" id="shop-second-page">
        <h2>Popular</h2>
        <hr />
        <div className="item-container"></div>
      </div>
      <div className="shop-page" id="shop-third-page">
      <h2>Latest Collection</h2>
      <hr />
      </div>
    </>
  );
};

export default Shop;
