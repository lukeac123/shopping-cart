import { test, expect } from "@playwright/experimental-ct-react";
import { IncrementComponent } from "./IncrementComponent";
import { ShoppingCartStateProvider } from "../ShoppingCartState";
import AxeBuilder from "@axe-core/playwright";

test("Add To Basket Button Is Visible on Inital Render", async ({ mount }) => {
  const component = await mount(
    <IncrementComponent product="happy socks" productQuantity={undefined} />
  );
  const addToBasketButton = component.getByRole("button", {
    name: "add to cart",
  });
  await expect(addToBasketButton).toBeVisible();
});

test("Correct quanity is shown in input field", async ({ mount }) => {
  const component = await mount(
    <IncrementComponent product="happy socks" productQuantity={1} />
  );
  const textbox = await component.getByLabel("product quantity");
  await expect(textbox).toHaveValue("1");
});

test("Accessibility", async ({ page, mount }) => {
  await mount(<IncrementComponent product="happy socks" productQuantity={1} />);
  const accessibilityScanResults = await new AxeBuilder({
    page: page,
  }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
