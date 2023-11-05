import { render, screen } from "@testing-library/react";
import Text from "./Text";

it("check for edureka text", () => {
  render(<Text text="deepak" />);
  let htmlElement = screen.getByText(/deepak/i);
  expect(htmlElement).toBeInTheDocument();
});

it("check for number element", () => {
  render(<Text number={10} />);
  let htmlElement = screen.getByText(/10/i);
  expect(htmlElement).toBeInTheDocument();
});
