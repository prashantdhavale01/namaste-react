import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom"

test("Check contact page is loading", () =>{
  render(<ContactUs />);
  const heading = screen.getByRole("heading");

  // Assertion
  expect(heading).toBeInTheDocument();
});

test("Check contact page is loading", () =>{
  render(<ContactUs />);
  const heading = screen.getByRole("button");

  // Assertion
  expect(heading).toBeInTheDocument();
});

test("Check contact page is loading", () =>{
  render(<ContactUs />);
  const inputBoxes = screen.getAllByRole("textbox");
  console.log(inputBoxes);
  // Assertion
  expect(inputBoxes.length).toBe(2);
});