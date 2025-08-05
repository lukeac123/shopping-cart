import { useState, useEffect } from "react";
import { ShoppingCartContext } from "./Context";
import { ProductGrid } from "./ProductGrid/ProductGrid";
import { ShoppingCart } from "./ShoppingCart";
import { ProductType } from "./types";
import "./App.css";
import { Appeader } from "./AppHeader";

//TODO: Redux or Zustand to manage state
//TODO: Add search or filtering

export default function App() {
  const [shoppingCartItems, setShoppingCartItems] = useState<ProductType[]>([]);
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          console.warn(`Response is not valid ${response.status}`);
        }
        const data = await response.json();
        setProductsData(data);
      } catch {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (error) return <>{error}</>;

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCartItems, setShoppingCartItems }}
    >
      <Appeader />
      <div className="appContent">
        <h2>Product Items</h2>
        {loading ? (
          <>...Loading Product Items</>
        ) : (
          <ProductGrid productsData={productsData} />
        )}
      </div>
    </ShoppingCartContext.Provider>
  );
}
