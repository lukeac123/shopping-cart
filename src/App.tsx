import { useState, useEffect, useCallback } from "react";
import { ShoppingCartStateProvider } from "./ShoppingCartState";
import { ProductGrid } from "./ProductGrid/ProductGrid";
import "./App.css";
import { AppHeader } from "./AppHeader";

export default function App() {
  const [productsData, setProductsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = 50;

  const getData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
          page * itemsPerPage
        }`
      );
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
  }, [page, itemsPerPage]);

  useEffect(() => {
    setTimeout(getData, 1000);
  }, [getData]);

  if (error) return <>{error?.message}</>;

  const handlePaginationChange = (pageChange: "increment" | "decrement") => {
    if (page === 0 && pageChange === "decrement") return;
    setLoading(true);
    setPage((prev) => {
      return pageChange === "increment" ? prev + 1 : prev - 1;
    });
  };

  return (
    <ShoppingCartStateProvider>
      <AppHeader />
      <div className="appContent">
        <h2>Product Items</h2>
        {productsData.length === 1 && <>No More Products</>}
        {loading || !productsData ? (
          <>...Loading Product Items</>
        ) : (
          <ProductGrid products={productsData.products} />
        )}
        <div>
          <button onClick={() => handlePaginationChange("decrement")}>
            Previous Page
          </button>
          <span>{page}</span>
          <button onClick={() => handlePaginationChange("increment")}>
            Next Page
          </button>
        </div>
      </div>
    </ShoppingCartStateProvider>
  );
}
