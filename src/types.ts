export interface ShoppingCartContextTypes {
  shoppingCartItems?: ProductType[] | [];
  setShoppingCartItems?: (product) => void;
}

export interface ProductType {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  availabilityStatus: "In Stock" | "Low Stock";
  qty?: number;
  price: number;
}

export interface ProductCardType {
  product: ProductType;
  setShoppingCartItems: (product) => void;
  productQuantity: number;
}

export interface IncrementComponentTypes {
  productQuantity: number;
  product;
}
