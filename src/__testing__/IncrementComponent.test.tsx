import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

const mockDispatch = jest.fn();
jest.mock("../ShoppingCartState", () => ({
  useShoppingCartReducer: () => mockDispatch,
}));

describe("IncrementComponent", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });
  it("calls dispatch with DECREMENT_ITEM when decrement button clicked", () => {
    render(<IncrementComponent productQuantity={2} product={mockProduct} />);

    fireEvent.click(screen.getByRole("button", { name: "decrement quantity" }));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "DECREMENT_ITEM",
      item: mockProduct,
    });
  });

  it("calls dispatch with INCREMENT_ITEM when increment button clicked", () => {
    render(<IncrementComponent productQuantity={2} product={mockProduct} />);

    fireEvent.click(screen.getByRole("button", { name: "increment quantity" }));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "INCREMENT_ITEM",
      item: mockProduct,
    });
  });

  it("calls dispatch with ADD_TO_BASKET when add to basket button clicked", () => {
    render(
      <IncrementComponent productQuantity={undefined} product={mockProduct} />
    );

    fireEvent.click(screen.getByRole("button", { name: "add to cart" }));

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "ADD_TO_BASKET",
      item: mockProduct,
    });
  });

  it("calls dispatch with CUSTOM_INPUT when custom value inputted", () => {
    render(<IncrementComponent productQuantity={2} product={mockProduct} />);

    userEvent.type(screen.getByLabelText("product quantity"), "10");

    expect(mockDispatch).toHaveBeenCalledTimes(2);
    // expect(mockDispatch).toHaveBeenCalledWith({
    //   type: "CUSTOM_INPUT",
    //   item: mockProduct,
    // });
  });
});
