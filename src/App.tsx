import { lazy, Suspense } from "react";
import { ShoppingCartStateProvider } from "./ShoppingCartState";
import "./App.css";
import { AppHeader } from "./AppHeader";
import { ErrorBoundary } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }) {
  resetErrorBoundary();

  return (
    <div role="alert">
      <p>Something went wrong: {error.message}</p>
    </div>
  );
}

const ProductGrid = lazy(async () => import("./ProductGrid"));

export default function App() {
  return (
    <ShoppingCartStateProvider>
      <AppHeader />
      <div className="appContent">
        <h2>Product Items</h2>
        <ErrorBoundary FallbackComponent={Fallback}>
          <Suspense fallback={<>...Loading Product Items</>}>
            <ProductGrid />
          </Suspense>
        </ErrorBoundary>
      </div>
    </ShoppingCartStateProvider>
  );
}
