import { render, screen } from "@testing-library/react";
import { GoldPrice } from "./index";

test("renders price currency", () => {
  render(<GoldPrice />);
  const text = screen.getByLabelText("currency_price");
  expect(text).toBeInTheDOM();
});
