import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page test cases", () => {
  test("Contact component should be loaded!", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  //   test("Contact component should have Button!", () => {
  //     render(<Contact />);
  //     const button = screen.getByText("Button");
  //     expect(button).toBeInTheDocument();
  //   });
  //   it("Contact component should have Input Name!", () => {
  //     render(<Contact />);
  //     const input = screen.getByPlaceholderText("enter");
  //     expect(input).toBeInTheDocument();
  //   });
  //   test("How many Input Contact component have!", () => {
  //     render(<Contact />);
  //     const inputBoxes = screen.getAllByRole("textbox");
  //     expect(inputBoxes.length).toBe(1);
  //   });
});
