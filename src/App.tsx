import { useState, useEffect } from "react";
import { ShoppingCartStateProvider } from "./ShoppingCartState";
import { ProductGrid } from "./ProductGrid/ProductGrid";
import { AppHeader } from "./AppHeader";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";

function Fallback({ error, resetErrorBoundary }) {
  resetErrorBoundary();

  return (
    <div role="alert">
      <p>Something went wrong: {error.message}</p>
    </div>
  );
}

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
  }, []);

  if (error) return <>{error?.message}</>;

  return (
    <ShoppingCartStateProvider>
      <AppHeader />
      <div className="appContent">
        <h2>Product Items</h2>
        {loading && !productsData ? (
          <>...Loading Product Items</>
        ) : (
          <ErrorBoundary FallbackComponent={Fallback}>
            <ProductGrid productsData={productsData} />
          </ErrorBoundary>
        )}
      </div>
    </ShoppingCartStateProvider>
  );
}
