import { test, expect } from "@playwright/experimental-ct-react";
import { AppHeaderTest } from "./AppHeader.story";

test("Renders the Component", async ({ mount }) => {
  const component = await mount(<AppHeaderTest />);

  await expect(component).toContainText("Eccomerce Product Page");
});
