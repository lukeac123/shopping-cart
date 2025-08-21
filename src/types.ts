export interface ShoppingCartContextType {}

export interface ShoppingCartReducerType {}

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
  productQuantity?: number;
}

export interface IncrementComponentTypes {
  productQuantity: number;
  product;
}
