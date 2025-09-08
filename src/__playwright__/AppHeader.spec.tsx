import { test, expect } from "@playwright/experimental-ct-react";
import { AppHeader } from "../AppHeader/Appheader";

test("Renders the Component", async ({ mount }) => {
  const component = await mount(<AppHeader />);

  const shoppingCart = await component.getByRole("button", {
    name: "shopping cart popover trigger",
  });

  await expect(component).toContainText("Eccomerce Product Page");
  await expect(shoppingCart).toBeVisible();
});
