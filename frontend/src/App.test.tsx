import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders with an image and title", async () => {
  const { getByRole } = render(<App />);

  expect(getByRole("heading")).toHaveTextContent("product search by ASIN:");
  expect(getByRole("img")).toHaveAttribute("alt", "amazon-logo");
});
