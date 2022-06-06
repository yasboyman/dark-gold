import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders header title", () => {
  render(<App />);
  const text = screen.getByText(/Live Gold Price/i);
  expect(text).toBeInTheDocument();
});

test("renders button in header", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Home" });
  expect(button).toBeInTheDocument();
});

test("initial color of button is grey", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Home" });
  expect(button).toHaveStyle("background-color: darkgrey");
});

test("button click renders price", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Home" });

  //Button clicked...
  fireEvent.click(button);
  const priceText = screen.getByText("Currency options");
  expect(priceText).toBeInTheDocument();

  //Clicked again
  fireEvent.click(button);
  expect(screen.queryByText("Currency options")).toBeNull();
});
