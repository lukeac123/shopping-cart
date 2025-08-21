import { useContext, createContext, useReducer } from "react";
import {
  ProductType,
  ShoppingCartContextType,
  ShoppingCartReducerType,
} from "./types";

export const ShoppingCartContext = createContext<Object>({});

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

export const ShoppingCartReducer = createContext<any>({});

export const useShoppingCartReducer = () => useContext(ShoppingCartReducer);

const initialItems: any = {};

const reducer = (shoppingCartItems, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const newItem: ProductType = action.item;
      return {
        ...shoppingCartItems,
        [newItem.id]: {
          ...newItem,
          qty: shoppingCartItems[newItem.id]
            ? shoppingCartItems[newItem.id].qty + 1
            : 1,
        },
      };
    case "INCREMENT_ITEM":
      const incrementItem = action.item;
      return {
        ...shoppingCartItems,
        [incrementItem.id]: {
          ...incrementItem,
          qty: shoppingCartItems[incrementItem.id].qty + 1,
        },
      };
    case "DECREMENT_ITEM":
      const decrementItem = action.item;
      return {
        ...shoppingCartItems,
        [decrementItem.id]: {
          ...decrementItem,
          qty: shoppingCartItems[decrementItem.id].qty - 1,
        },
      };
    case "CLEAR_BASKET":
      return {};
    case "CUSTOM_INPUT":
      const inputValue = action.event.target.value;
      const customInputItem = action.item;
      return {
        ...shoppingCartItems,
        [customInputItem.id]: {
          ...customInputItem,
          qty: inputValue,
        },
      };
  }
};

export const ShoppingCartStateProvider = ({ children }) => {
  const [shoppingCartItems, dispatch] = useReducer(reducer, initialItems);

  return (
    <ShoppingCartContext.Provider value={shoppingCartItems}>
      <ShoppingCartReducer.Provider value={dispatch}>
        {children}
      </ShoppingCartReducer.Provider>
    </ShoppingCartContext.Provider>
  );
};
