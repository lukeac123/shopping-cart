import { useState, useEffect } from "react";
import { ShoppingCartStateProvider } from "./ShoppingCartState";
import { ProductGrid } from "./ProductGrid/ProductGrid";
import "./App.css";
import { AppHeader } from "./AppHeader";

export default function App() {
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
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [productsData, error]);

  if (error) return <>{error?.message}</>;

  return (
    <ShoppingCartStateProvider>
      <AppHeader />
      <div className="appContent">
        <h2>Product Items</h2>
        {loading && !productsData ? (
          <>...Loading Product Items</>
        ) : (
          <ProductGrid productsData={productsData} />
        )}
      </div>
    </ShoppingCartStateProvider>
  );
}
