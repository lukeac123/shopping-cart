import { useShoppingCartContext } from "../Context";
import { ProductType } from "../types";
import { IncrementComponent } from "../IncrementComponent/IncrementComponent";
import "./ShoppingCart.css";
import { IconSquareX } from "@tabler/icons-react";

export const ShoppingCart = () => {
  const onHandleClearBasket = () => handleClearBasket();

  const { shoppingCartItems, setShoppingCartItems } = useShoppingCartContext();

  const handleClearBasket = () => setShoppingCartItems([]);

  const shoppingCartTotal = () => {
    return Object.keys(shoppingCartItems).reduce((acc, productId) => {
      return (
        acc +
        shoppingCartItems[productId].price * shoppingCartItems[productId].qty
      );
    }, 0);
  };

  return (
    <div id="shoppingCartPopover" className="shoppingCart" popover="manual">
      <button popoverTarget="shoppingCartPopover" popoverTargetAction="hide">
        <IconSquareX />
      </button>
      <h2>Shopping Cart</h2>
      {Object.values(shoppingCartItems).map((product: ProductType) => {
        const { title, description, thumbnail, qty, id } = product;
        if (qty <= 0) return;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <div>{description}</div>
            <img src={thumbnail} />
            <IncrementComponent product={product} productQuantity={qty} />
          </div>
        );
      })}
      <div>Total:{`${shoppingCartTotal()}`}</div>
      <button onClick={onHandleClearBasket}>clear basket</button>
    </div>
  );
};
