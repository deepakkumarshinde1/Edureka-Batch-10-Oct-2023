import { act, render, screen } from "@testing-library/react";
import Products from "./Products";
import * as APIService from "../../Service/api";

// let getData = jest.fn;

describe("Products", () => {
  beforeEach(() => {
    jest.mock("../../Service/api");
  });
  // it("check for result text", () => {
  //   act(() => {
  //     render(<Products />);
  //   });
  //   act(async () => {
  //     let htmlElement = await screen.findByRole(
  //       "heading",
  //       {
  //         name: /result fetch successfully\./i,
  //       },
  //       {},
  //       { timeout: 4000 }
  //     );
  //     expect(htmlElement).toBeInTheDocument();
  //   });
  // });

  it("check api call is valid", async () => {
    APIService.getData().mockResolvedValueOnce([{ title: "Dell" }]);
    render(<Products />);
    let htmlElement = await screen.findByRole("heading", {
      name: /result fetch successfully/i,
    });
    // expect(htmlElement).toBeInTheDocument();
    expect(APIService.getData).toHaveBeenCalledTimes(1);
  });
});
