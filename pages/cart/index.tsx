import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import Link from "next/link";
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
    <>
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

        <div className="text-center ">
          {numberOfItems > 0 ? (
            <button
              className=" mt-8 hover:bg-green-500 rounded-full py-2 px-4 w-36 font-semibold hover:text-white bg-green-700 text-gray-100 shadow-xl mr-4"
              onClick={placeOrder}
            >
              Order Now
            </button>
          ) : (
            <Link href="/" passHref>
              <button
                className=" mt-8 hover:bg-indigo-700 rounded-full py-2 px-4 w-36 font-semibold hover:text-white bg-indigo-500 text-gray-100 shadow-xl mr-4"
                onClick={placeOrder}
              >
                Choose again
              </button>
            </Link>
          )}

          <button
            className={
              numberOfItems === 0
                ? "mt-8 rounded-full py-2 px-4 font-semibold  bg-black text-gray-100 shadow-xl"
                : "mt-8 hover:bg-indigo-700 rounded-full py-2 px-4 font-semibold hover:text-white bg-indigo-500 text-gray-100 shadow-xl"
            }
            onClick={clearCart}
            disabled={numberOfItems === 0}
          >
            Clear orders
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 m-8 border-2">
          <div className="border-2 p-4 flex flex-col items-center space-y-4">
            <div className="font-bold">Item</div>
            {orderedProducts &&
              orderedProducts.map((product) => (
                <div key={product.priceId}>{product.title}</div>
              ))}
          </div>
          <div className="border-2 p-4 flex flex-col items-center space-y-4">
            <div className="font-bold">Quantity</div>
            {orderedProducts &&
              orderedProducts.map((product) => (
                <div key={product.priceId}>
                  <input
                    className="border-2 w-16 "
                    type="number"
                    name="item1"
                    id="item1"
                    value={product.quantity}
                    onChange={(event) => handleChange(event, product.title)}
                  />
                </div>
              ))}
          </div>
          <div className="border-2 p-4 flex flex-col items-center space-y-4">
            <div className="font-bold">Unit Price</div>
            {orderedProducts &&
              orderedProducts.map((product) => (
                <div key={product.priceId}>
                  {(product.price / 100).toFixed(2)} USD
                </div>
              ))}
          </div>
          <div className="border-2 p-4 flex flex-col items-center space-y-4">
            <div className="font-bold">Total Price</div>
            {orderedProducts &&
              orderedProducts.map((product) => (
                <div key={product.priceId}>
                  {((product.quantity * product.price) / 100).toFixed(2)} USD
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default CartPage;
