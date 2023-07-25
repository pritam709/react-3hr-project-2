import { useReducer } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const defaultCart = {
    items: [],
    totalAmount: 0,
  };
  const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        console.log(action.item);
      const newAmount = state.totalAmount + action.item.price;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.name === action.item.name
      );
      const existingCartItem = state.items[existingCartItemIndex];
      console.log(existingCartItem);
      let updatedItems;
      if (existingCartItem) {
        let updatedItem;
        if (action.item.l === 1) {
          updatedItem = {
            ...existingCartItem,
            l: existingCartItem.l + action.item.l,
          };
          console.log(updatedItem);
        }
        if (action.item.m === 1) {
          updatedItem = {
            ...existingCartItem,
            m: existingCartItem.m + action.item.m,
          };
        } if(action.item.s === 1) {
          updatedItem = {
            ...existingCartItem,
            s: existingCartItem.s + action.item.s,
          };
        }
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
         updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: newAmount,
      };
    }

    return defaultCart;
  };
  const addItemHandler = (item) => {
    dispatchFn({ type: "ADD", item: item });
  };

  const [initialCart, dispatchFn] = useReducer(cartReducer, defaultCart);
  const cartContext = {
    items: initialCart.items,
    totalAmount: initialCart.totalAmount,
    addItem: addItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
