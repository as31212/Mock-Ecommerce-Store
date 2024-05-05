import Footer from "./Footer";

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-4xl w-full p-8 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6">Cart</h2>
          {cart.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cart.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <img className="w-20 h-20 object-cover rounded-md mr-4" src={item.img} alt={`${item.item_name} image`} />
                    <div>
                      <p className="text-lg font-semibold">{item.item_name}</p>
                      <p className="text-gray-500">${item.sale_price}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <p className="mr-2">Quantity:</p>
                    <input
                      className="w-16 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, e.target.value)}
                    />
                  </div>
                  <p className="text-lg font-semibold mb-4">${(item.quantity * item.sale_price).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-xl">No Items In Cart</h2>
            </div>
          )}
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Cart Totals</h2>
            <p><span className="font-semibold">Subtotal:</span> ${cart.reduce((acc, item) => acc + item.sale_price * item.quantity, 0).toFixed(2)}</p>
            <p><span className="font-semibold">Shipping:</span> Free</p>
            <p><span className="font-semibold">Total:</span> ${cart.reduce((acc, item) => acc + item.sale_price * item.quantity, 0).toFixed(2)}</p>
            <button className="mt-4 bg-orange-500 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">Proceed To Checkout</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
