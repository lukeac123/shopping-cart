import { IncrementComponentTypes } from "../types";
import { useShoppingCartReducer } from "../ShoppingCartState";
import { IconShoppingBagPlus, IconShoppingBagMinus } from "@tabler/icons-react";
import "./IncrementComponent.css";

export const IncrementComponent = ({
  productQuantity,
  product,
}: IncrementComponentTypes) => {
  const dispatch = useShoppingCartReducer();

  return (
    <div className="incrementComponent">
      {productQuantity > 0 ? (
        <>
          <button
            aria-label={`decrement ${product.title} quantity`}
            onClick={() => dispatch({ type: "DECREMENT_ITEM", item: product })}
          >
            <IconShoppingBagMinus />
          </button>
          <input
            value={productQuantity}
            onClick={(event) =>
              dispatch({ type: "INCREMENT_ITEM", item: product, event: event })
            }
          />
          <button
            aria-label={`decrement ${product.title} quantity`}
            onClick={() => dispatch({ type: "INCREMENT_ITEM", item: product })}
          >
            <IconShoppingBagPlus />
          </button>
        </>
      ) : (
        <button
          aria-label={`add ${product.title} to shopping cart`}
          onClick={() => dispatch({ type: "ADD_TO_BASKET", item: product })}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
