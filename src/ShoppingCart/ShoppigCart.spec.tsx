// import { test, expect } from "@playwright/experimental-ct-react";
import { ShoppingCart } from "./ShoppingCart";
import { test, expect } from "../../playwright/accessibilityTest";

test("Shopping Cart Popover Trigger", async ({ mount }) => {
  const component = await mount(<ShoppingCart />);
  const basketButton = component.getByRole("button", {
    name: "shopping cart popover",
  });
  await basketButton.click();
  const basket = component.getByLabel("ShoppingCartPopver");

  await expect(basket).toBeVisible();
});

test("Shopping Cart Close Button", async ({ mount }) => {
  const component = await mount(<ShoppingCart />);
  const basketButton = component.getByRole("button", {
    name: "shopping cart popover",
  });
  await basketButton.click();
  const basket = component.getByLabel("ShoppingCartPopver");

  await expect(basket).toBeVisible();
});
