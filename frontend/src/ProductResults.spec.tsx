import React from "react";
import { render } from "@testing-library/react";
import {ProductResults} from "./ProductResults";

const mockedProduct = {
  asin: 'ABC123',
  title: 'Test Product',
  rating: '5',
  reviewCount: 100,
  price: '$100',
  dimensions: '1 x 1 x 1 inches',
  category: 'Testing > Mocks',
};

it("renders a table with the provided data", async () => {
  const { getByText } = render(<ProductResults {...mockedProduct}/>);

  expect(getByText(mockedProduct.asin)).toBeDefined();
  expect(getByText(mockedProduct.title)).toBeDefined();
  expect(getByText(mockedProduct.rating)).toBeDefined();
  expect(getByText(mockedProduct.reviewCount.toString())).toBeDefined();
  expect(getByText(mockedProduct.price)).toBeDefined();
  expect(getByText(mockedProduct.dimensions)).toBeDefined();
  expect(getByText(mockedProduct.category)).toBeDefined();
});
