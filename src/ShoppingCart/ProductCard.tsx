import { memo } from "react";
import { ProductCardType } from "./types";

export const ProductCard = memo(
  ({
    product,
    setShoppingCartItems,
    // productInBasket,
    productQuantity,
  }: ProductCardType) => {
    const { title, description, thumbnail, category, availabilityStatus } =
      product;

    const handleAddToBasket = (currentProduct) => {
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
      <div className="productCard">
        <div className="productCardData">
          <h2>{title}</h2>
          <div>{description}</div>
          <div>{category}</div>
          <div>{availabilityStatus}</div>
          <div>
            {productQuantity > 0 ? (
              <>
                <button onClick={() => handleDelete(product)}>+</button>
                {productQuantity}
                <button onClick={() => handleAddToBasket(product)}>+</button>
              </>
            ) : (
              <button onClick={() => handleAddToBasket(product)}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
        <img src={thumbnail} />
      </div>
    );
  }
);
