import { lazy, Suspense } from "react";
import { ShoppingCartStateProvider } from "./ShoppingCartState";
import "./App.css";
import { AppHeader } from "./AppHeader";

const ProductGrid = lazy(async () => import("./ProductGrid"));

export default function App() {
  return (
    <ShoppingCartStateProvider>
      <AppHeader />
      <div className="appContent">
        <h2>Product Items</h2>
        <Suspense fallback={<>...Loading Product Items</>}>
          <ProductGrid />
        </Suspense>
      </div>
    </ShoppingCartStateProvider>
  );
}
