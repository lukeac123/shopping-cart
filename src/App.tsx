import { useState, useEffect } from "react";
import { ShoppingCartContext } from "./ShoppingCart/Context";
import { ProductsGrid } from "./ShoppingCart/ProductsGrid";
import { ShoppingCart } from "./ShoppingCart/ShoppingCart";
import { ProductType } from "./ShoppingCart/types";
import "./App.css";

//TODO: Make Basket Modal
//TODO: CSS to make look more like Eccomerce webstie
//TODO: Redux or Zustand to manage state

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
    <div className="App">
      <ShoppingCartContext.Provider
        value={{ shoppingCartItems, setShoppingCartItems }}
      >
        <h2>Product Items</h2>
        {loading ? (
          <>...Loading Product Items</>
        ) : (
          <ProductsGrid productsData={productsData} />
        )}
        <ShoppingCart />
      </ShoppingCartContext.Provider>
    </div>
  );
}
