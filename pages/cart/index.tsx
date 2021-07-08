import { useCartContext } from "@/hooks/useCart";

function CartPage() {
    const { total, numberOfItems, placeOrder, updateCart, products } =
        useCartContext();
    
    
  return (
    <div>
          <h2 className="text-center font-bold text-2xl">Cart page</h2>
          <div className="text-center">
            <div className="font-bold text-2xl">Items: {numberOfItems}</div>
            <div className="font-bold text-2xl">
              Total price: {total.toFixed(2)} USD
            </div>
          </div>
    </div>
  );
}
export default CartPage