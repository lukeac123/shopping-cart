import { test, expect } from "@playwright/experimental-ct-react";
import { AppHeader } from "./Appheader";

test("Renders the Component", async ({ mount }) => {
  const component = await mount(<AppHeader />);

  await expect(component).toContainText("Eccomerce Product Page");
});
