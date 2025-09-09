import { useShoppingCartContext } from "../ShoppingCartState";
import { ProductCard } from "../ProductCard";
import { ProductType } from "../types";
import "./ProductGrid.css";
import { useState } from "react";

function getCategories(products) {
  let productCategories = [];
  Object.values(products).forEach((product: ProductType) => {
    if (productCategories.includes(product.category)) return;
    productCategories.push(product.category);
  });
  return productCategories;
}

export const ProductGrid = ({ products }) => {
  const shoppingCartItems = useShoppingCartContext();
  const categories = getCategories(products);
  const [filter, setFilter] = useState(null);

  function filterProducts() {
    if (!filter) return products;
    return products.filter((product) => product.category === filter);
  }

  const filteredProducts = filterProducts();

  return (
    <>
      <div>
        {categories.map((category: string) => {
          return (
            <div key={category}>
              <input
                id={category}
                name={category}
                value={category}
                type="checkbox"
                checked={filter === category}
                onChange={(event) => setFilter(event.target.value)}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          );
        })}
        <button onClick={() => setFilter(null)}>Reset</button>
      </div>
      <div className="productsContainer">
        {filteredProducts.map((product: ProductType) => {
          const productQuantity =
            shoppingCartItems[product.id] && shoppingCartItems[product.id].qty;
          return (
            <ProductCard
              key={product.id}
              product={product}
              productQuantity={productQuantity}
            />
          );
        })}
      </div>
    </>
  );
};
