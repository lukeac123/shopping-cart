import { test, expect } from "@playwright/experimental-ct-react";
import { IncrementComponentTest } from "./IncrementComponent.story";

// test("displays correct quantity", async ({ mount }) => {
//   const component = await mount(
//     <IncrementComponentTest product="Happy Socks" productQuantity={0} />
//   );
//   const incrementButton = await component.getByRole("button", {
//     name: "add Happy Socks to shoppig cart",
//   });
//   await expect(incrementButton).toContainText("Add to Cart");
// });

// test("Increment + / - shown when productQuantity != 0", async ({ mount }) => {
//   const component = await mount(
//     <IncrementComponentTest product="Happy Socks" productQuantity={1} />
//   );
//   const incrementButton = await component.getByRole("button", {
//     name: "increment Happy Socks quantity",
//   });
//   //   await incrementButton.click();
//   await expect(incrementButton).toContainText("");
// });
