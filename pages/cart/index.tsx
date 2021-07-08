import { useState } from "react";

import { useCartContext } from "@/hooks/useCart";
import { ChangeEvent } from "react";

function CartPage() {
  const { total, numberOfItems, cartProducts } = useCartContext();

  const [testValue, setTestValue] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) > -1) {
      setTestValue(parseInt(e.target.value));
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
                  key={product.prideId}
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
                      onChange={handleChange}
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
