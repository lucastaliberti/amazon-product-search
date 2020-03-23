import React from "react";
import styled from "styled-components";

interface ProductResultsProps {
  readonly asin: string;
  readonly title: string;
  readonly rating: string;
  readonly reviewCount: number;
  readonly price: string;
  readonly dimensions: string;
  readonly category: string;
}

export const ProductResults = ({
  asin,
  title,
  rating,
  reviewCount,
  price,
  dimensions,
  category
}: ProductResultsProps) => {
  return (
    <Box>
      <ProductTable>
        <tbody>
          <tr>
            <TableLabel>ASIN:</TableLabel>
            <TableValue>{asin}</TableValue>
          </tr>
          <tr>
            <TableLabel>Title:</TableLabel>
            <TableValue>{title}</TableValue>
          </tr>
          <tr>
            <TableLabel>Category:</TableLabel>
            <TableValue>{category}</TableValue>
          </tr>
          <tr>
            <TableLabel>Rating:</TableLabel>
            <TableValue>{rating}</TableValue>
          </tr>
          <tr>
            <TableLabel>Review Count:</TableLabel>
            <TableValue>{reviewCount}</TableValue>
          </tr>
          <tr>
            <TableLabel>Price:</TableLabel>
            <TableValue>{price}</TableValue>
          </tr>
          <tr>
            <TableLabel>Dimensions:</TableLabel>
            <TableValue>{dimensions}</TableValue>
          </tr>
        </tbody>
      </ProductTable>
    </Box>
  );
};

const Box = styled.div`
  width: 50%;
  margin: 0 auto;
`;

const ProductTable = styled.table`
  text-align: left;
  margin: 0 auto;
`;

const TableCell = styled.td`
  padding: 3px 1px 3px 10px;
  border-top: 1px dotted #ccc;
  line-height: 18px;
`;

const TableLabel = styled(TableCell)`
  background-color: #f5f5f5;
  width: 35%;
  color: #666;
  vertical-align: top;
`;

const TableValue = styled(TableCell)``;
