import {
  useCallback,
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { initiateCheckout } from "@/lib/payments";
import products from "@/db/products.json";

type productList = {
  [key: string]: any;
};

const CartContext = createContext<any | null>(null);

export const useCartContext = () => {
  return useContext(CartContext);
};

const defaultCart = {
  cartProducts: {},
};
export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [total, setTotal] = useState(0);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [cart, setCart] = useState<productList>(defaultCart);

  const updateCart = (priceId: string) => {
    const foundProduct = products.filter(
      (product) => product.priceId === priceId
    )[0];
    const { title } = foundProduct;

    let orderedProducts = Object.keys(cart.cartProducts);
    if (!orderedProducts.includes(title)) {
      setCart((prevCart) => ({
        ...prevCart,
        cartProducts: {
          ...prevCart.cartProducts,
          [title]: { ...foundProduct, quantity: 1 },
        },
      }));
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        cartProducts: {
          ...prevCart.cartProducts,
          [title]: {
            ...foundProduct,
            quantity: prevCart.cartProducts[title].quantity + 1,
          },
        },
      }));
    }
  };

  const clearCart = () => {
    setCart(defaultCart);
  };
  const getSubtotal = useCallback(() => {
    const items = Object.keys(cart.cartProducts).map((title: string) => {
      const product = cart.cartProducts[title];

      return product;
    });

    let subtotal = items.reduce((acc, item) => {
      acc = acc + item.quantity * item.price;
      return acc;
    }, 0);
    setTotal(subtotal / 100);
  }, [cart.cartProducts]);

  const getTotalItems = useCallback(() => {
    const items = Object.keys(cart.cartProducts).map((title: string) => {
      const product = cart.cartProducts[title];

      return product;
    });

    let totalItems = items.reduce((acc, item) => {
      acc = acc + item.quantity;
      return acc;
    }, 0);
    setNumberOfItems(totalItems);
  }, [cart.cartProducts]);

  const placeOrder = () => {
    const lineItems = Object.keys(cart.cartProducts).map((title: string) => {
      const product = cart.cartProducts[title];

      return {
        price: product.priceId,
        quantity: product.quantity,
      };
    });

    initiateCheckout({
      lineItems,
    });
  };

  useEffect(() => {
    getSubtotal();
    getTotalItems();
  }, [cart, getSubtotal, getTotalItems]);

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(
      window.localStorage.getItem("cart") || "{}"
    );

    if (cartFromLocalStorage) {
      setCart(cartFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("myCat", "Tom");
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        numberOfItems,
        total,
        placeOrder,
        updateCart,
        clearCart,
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
