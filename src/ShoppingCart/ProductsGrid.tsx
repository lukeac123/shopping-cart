import { useShoppingCartContext } from "./Context";
import { ProductCard } from "./ProductCard";
import { ProductType } from "./types";

export const ProductsGrid = ({ productsData }) => {
  const { setShoppingCartItems, shoppingCartItems } = useShoppingCartContext();

  return (
    <div className="productsContainer">
      {productsData &&
        Object.values(productsData.products).map((product: ProductType) => {
          const productQuantity =
            shoppingCartItems[product.id] && shoppingCartItems[product.id].qty;
          return (
            <ProductCard
              key={product.id}
              product={product}
              setShoppingCartItems={setShoppingCartItems}
              productQuantity={productQuantity}
            />
          );
        })}
    </div>
  );
};
