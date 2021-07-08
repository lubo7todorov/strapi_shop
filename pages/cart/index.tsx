import { useCartContext } from "@/hooks/useCart";
import { ChangeEvent } from "react";

function CartPage() {
  const {
    total,
    numberOfItems,
    cartProducts,
    updateProduct,
    placeOrder,
    clearCart,
  } = useCartContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, title: string) => {
    if (parseInt(e.target.value) > -1) {
      updateProduct(title, parseInt(e.target.value));
    }
  };

  const orderedProducts = Object.keys(cartProducts).map((title) => {
    const product = cartProducts[title];
    return product;
  });

  return (
    <div>
      <h2 className="text-center font-bold text-2xl my-4">Cart page</h2>
      <div className="text-center">
        <div className="text-center ">
          <button
            className=" mt-8 hover:bg-indigo-700 rounded-full py-2 px-4 font-semibold hover:text-white bg-indigo-500 text-gray-100 shadow-xl mr-4"
            onClick={placeOrder}
          >
            Order Now
          </button>
          <button
            className=" mt-8 hover:bg-indigo-700 rounded-full py-2 px-4 font-semibold hover:text-white bg-indigo-500 text-gray-100 shadow-xl"
            onClick={clearCart}
          >
            Clear orders
          </button>
        </div>
        <div className="flex flex-col items-center mb-8">
          <div className="font-bold text-2xl text-left w-96">
            Items in cart: {numberOfItems}
          </div>
          <div className="font-bold text-2xl text-left w-96">
            Total price: {total.toFixed(2)} USD
          </div>
        </div>

        <div>
          {orderedProducts &&
            orderedProducts.map((product) => {
              return (
                <div
                  key={product.priceId}
                  className="flex justify-center gap-4"
                >
                  <div>{product.title}</div>
                  <div>
                    <input
                      className="border-2 w-16"
                      type="number"
                      name="item1"
                      id="item1"
                      value={product.quantity}
                      onChange={(event) => handleChange(event, product.title)}
                    />
                  </div>
                  <div>{(product.price / 100).toFixed(2)} USD</div>
                  <div>
                    {((product.price * product.quantity) / 100).toFixed(2)} USD
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default CartPage;
