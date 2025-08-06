import { useState } from "react";
import { IconShoppingBag } from "@tabler/icons-react";
import { ShoppingCart } from "../ShoppingCart";
import "./Appheader.css";
export const Appeader = () => {
  return (
    <header className="header">
      <h1 className="headerTitle">Eccomerce Product Page</h1>
      {/* Move to Shopping Cart ?  */}
      <button popoverTarget="shoppingCartPopover" className="shoppingCartIcon">
        <IconShoppingBag />
      </button>
      <ShoppingCart />
    </header>
  );
};
