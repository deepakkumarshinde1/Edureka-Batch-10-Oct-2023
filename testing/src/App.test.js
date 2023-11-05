import { render, screen } from "@testing-library/react";
import App from "./App";
test("check for hello test", () => {
  render(<App />);
  let htmlElement = screen.getByText("Hello");
  expect(htmlElement).toBeInTheDocument();
});
