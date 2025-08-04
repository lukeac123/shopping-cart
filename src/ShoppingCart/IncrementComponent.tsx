import { IncrementComponentTypes } from "./types";
import { useShoppingCartContext } from "./Context";

export const IncrementComponent = ({
  productQuantity,
  product,
}: IncrementComponentTypes) => {
  const { setShoppingCartItems } = useShoppingCartContext();

  const handleIncrement = (currentProduct) => {
    setShoppingCartItems((prevBasketItems) => {
      return {
        ...prevBasketItems,
        [currentProduct.id]: {
          ...currentProduct,
          qty: prevBasketItems[currentProduct.id]
            ? prevBasketItems[currentProduct.id].qty + 1
            : 1,
        },
      };
    });
  };

  const handleDelete = (currentProduct) =>
    setShoppingCartItems((prevBasketItems) => {
      return {
        ...prevBasketItems,
        [currentProduct.id]: {
          ...currentProduct,
          qty: prevBasketItems[currentProduct.id].qty - 1,
        },
      };
    });

  return (
    <div>
      {productQuantity > 0 ? (
        <>
          <button
            aria-label="decrement quantity"
            onClick={() => handleDelete(product)}
          >
            -
          </button>
          {productQuantity}
          <button
            aria-label="increment quantity"
            onClick={() => handleIncrement(product)}
          >
            +
          </button>
        </>
      ) : (
        <button onClick={() => handleIncrement(product)}>Add to Cart</button>
      )}
    </div>
  );
};
