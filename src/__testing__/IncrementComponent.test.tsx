import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { IncrementComponent } from "../IncrementComponent";
import { ProductType } from "../types";

const mockProduct: ProductType = {
  id: 10,
  description: "Product Description",
  title: "Product",
  thumbnail: "./thumnail",
  category: "",
  availabilityStatus: "Low Stock",
  price: 10.99,
};

test("loads and displays greeting", async () => {});

// test("loads and displays greeting", async () => {
//   // ARRANGE
//   render(<IncrementComponent product={mockProduct} productQuantity={1} />);

//   // ACT
//   await userEvent.click(
//     screen.getByRole("button", { name: "decrement quantity" })
//   );
//   await screen.findByRole("heading");

//   // ASSERT
//   // expect(screen.getByRole("heading")).toHaveTextContent("hello there");
//   // expect(screen.getByRole("button")).toBeDisabled();
// });
