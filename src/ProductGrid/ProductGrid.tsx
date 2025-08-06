import { useShoppingCartContext } from "../Context";
import { ProductCard } from "../ProductCard";
import { ProductType } from "../types";
import "./ProductGrid.css";
import { useState } from "react";

function getCategories(productsData) {
  let productCategories = [];
  Object.values(productsData.products).forEach((product: ProductType) => {
    if (productCategories.includes(product.category)) return;
    productCategories.push(product.category);
  });
  return productCategories;
}

export const ProductGrid = ({ productsData }) => {
  const { setShoppingCartItems, shoppingCartItems } = useShoppingCartContext();

  const categories = getCategories(productsData);
  const [filter, setFilter] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(
    productsData.products
  );

  const handleFilterChange = (event) => {
    const filterCategory = event.target.value;
    setFilter(event.target.value);

    const productData = productsData.products.filter(
      (product) => product.category === filterCategory
    );
    setFilteredProducts(productData);
  };

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
                onChange={(event) => handleFilterChange(event)}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          );
        })}
      </div>

      <div className="productsContainer">
        {productsData &&
          Object.values(filteredProducts).map((product: ProductType) => {
            const productQuantity =
              shoppingCartItems[product.id] &&
              shoppingCartItems[product.id].qty;
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
    </>
  );
};
