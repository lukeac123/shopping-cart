import { IncrementComponentTypes } from "../types";
import { useShoppingCartContext } from "../Context";
import { IconShoppingBagPlus, IconShoppingBagMinus } from "@tabler/icons-react";
import "./IncrementComponent.css";

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

  const handleInputChange = (event) => {
    const newQuantityValue = event.target.value;

    setShoppingCartItems((prevShoppingCartItems) => {
      return {
        ...prevShoppingCartItems,
        [product.id]: {
          ...product,
          qty: +newQuantityValue,
        },
      };
    });
  };

  return (
    <div className="incrementComponent">
      {productQuantity > 0 ? (
        <>
          <button
            aria-label={`decrement ${product.title} quantity`}
            onClick={() => handleDelete(product)}
          >
            <IconShoppingBagMinus />
          </button>
          <input
            value={productQuantity}
            onChange={(event) => handleInputChange(event)}
          />
          <button
            aria-label={`decrement ${product.title} quantity`}
            onClick={() => handleIncrement(product)}
          >
            <IconShoppingBagPlus />
          </button>
        </>
      ) : (
        <button
          aria-label={`add ${product.title} to shopping cart`}
          onClick={() => handleIncrement(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
