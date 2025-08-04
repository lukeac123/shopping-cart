import { memo } from "react";
import { ProductCardType } from "./types";
import { IncrementComponent } from "./IncrementComponent";

export const ProductCard = memo(
  ({
    product,

    productQuantity,
  }: ProductCardType) => {
    const { title, description, thumbnail, category, availabilityStatus } =
      product;

    return (
      <div className="productCard">
        <div className="productCardData">
          <h2>{title}</h2>
          <div>{description}</div>
          <div>{category}</div>
          <div>{availabilityStatus}</div>
          <IncrementComponent
            product={product}
            productQuantity={productQuantity}
          />
        </div>

        <img src={thumbnail} />
      </div>
    );
  }
);
