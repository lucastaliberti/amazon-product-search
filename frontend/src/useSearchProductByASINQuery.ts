import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export const SEARCH_PRODUCT_BY_ASIN = gql`
  query searchProductByASIN($asin: String!) {
    product(asin: $asin) {
      asin
      title
      rating
      reviewCount
      price
      dimensions
      category
    }
  }
`;

export function useSearchProductByASINQuery() {
  return useLazyQuery(SEARCH_PRODUCT_BY_ASIN);
}
