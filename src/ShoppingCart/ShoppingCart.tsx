import { useShoppingCartContext } from "./Context";
import { ProductType } from "./types";
import { IncrementComponent } from "./IncrementComponent";

export const ShoppingCart = () => {
  const onHandleClearBasket = () => handleClearBasket();

  const { shoppingCartItems, setShoppingCartItems } = useShoppingCartContext();

  const handleClearBasket = () => setShoppingCartItems([]);

  return (
    <div className="shoppingCart">
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
      <button onClick={onHandleClearBasket}>clear basket</button>
    </div>
  );
};
