import { act, render, screen } from "@testing-library/react";
import FormApp from "./FormApp";
import userEvent from "@testing-library/user-event";

describe("FormApp", () => {
  // all test case
  test("check a props in component", () => {
    render(<FormApp text="deepak" />);
    let htmlElement = screen.getByRole("heading", { name: /Welcome deepak/i });
    expect(htmlElement).toBeInTheDocument();
    // screen.debug();
  });

  test("check for input element", () => {
    render(<FormApp />);
    let inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("check valid output on click", () => {
    // component mount
    act(() => {
      render(<FormApp />);
    });

    // component update

    act(() => {
      userEvent.type(screen.getByLabelText(/value/i), "20");
      userEvent.click(screen.getByRole("button", { name: /save/i }));
    });

    let htmlElement = screen.getByText(/square of number 20 is 400/i);
    let htmlSpan = screen.getByText(/this is text/i);
    expect(htmlElement).toBeInTheDocument();
    expect(htmlSpan).not.toBeVisible();
  });
});
