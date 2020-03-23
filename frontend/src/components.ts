import styled from "styled-components";

export const AppWrapper = styled.div`
  padding: 4em 0 0.5em;
  text-align: center;
`;

export const Img = styled.img``;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 0;
`;

export const SearchHeader = styled.h1`
  margin: 0;
  padding-right: 8px;
`;

export const SearchInputWrapper = styled.div`
  height: 40px;
  border-radius: 4px;
  width: 25%;
  border: 1px solid #232f3e;
  box-sizing: border-box;
  display: flex;

  :hover {
    box-shadow: 0 2px 6px 0 #000;
  }
`;

export const SearchInput = styled.input`
  outline: none;
  height: 100%;
  margin: 0;
  padding: 0 8px;
  border: 0;
  flex: 1 1;
  font-size: 14px;
  border-radius: 4px 0 0 4px;
`;

export const SearchButton = styled.button`
  flex: 0 0;
  height: 100%;
  width: 45px;
  background-color: #febd69;
  color: #111;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 0 4px 4px 0;

  :hover {
    background-color: #f3a847;
  }
`;