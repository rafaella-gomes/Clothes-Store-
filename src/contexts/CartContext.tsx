import { IpcSocketConnectOpts } from "net";
import { ReactNode, createContext, useState } from "react";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
}

interface CartContextProviderProps {
  children: ReactNode;
}
interface CartContextData {
  cartItems: IProduct[];
  addItemToCart: (product: IProduct) => void;
  checkIfItemExistsInCart: (productId: string) => boolean;
  removeItemFromCart: (productId: string) => void;
  totalCartPrice: number;
}
export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  const totalCartPrice = cartItems.reduce((accumulator, currentValue) => {
    const priceWithoutSymbol = currentValue.price
      .replace("R$", "")
      .trim()
      .replace(",", ".");
    console.log({
      price: priceWithoutSymbol,
      num: parseFloat(priceWithoutSymbol),
    });
    return accumulator + parseFloat(priceWithoutSymbol);
  }, 0);

  function addItemToCart(product: IProduct) {
    setCartItems((state) => [...state, product]);
  }

  function checkIfItemExistsInCart(productId: string) {
    return cartItems.some((product) => product.id === productId);
  }
  function removeItemFromCart(productId: string) {
    setCartItems((state) => {
      const updatedCart = [...state];
      const index = updatedCart.findIndex((item) => item.id === productId);

      if (index !== -1) {
        updatedCart.splice(index, 1);
      }

      return updatedCart;
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        checkIfItemExistsInCart,
        removeItemFromCart,
        totalCartPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
}
