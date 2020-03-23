import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";

import logo from "./amazon-logo.jpg";
import { useSearchProductByASINQuery } from "./useSearchProductByASINQuery";
import {
  AppWrapper,
  Img,
  SearchBox,
  SearchHeader,
  SearchInputWrapper,
  SearchInput,
  SearchButton
} from "./components";
import { ProductResults } from "./ProductResults";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [getProduct, { loading, data }] = useSearchProductByASINQuery();

  const handleGetProduct = (asin: string) =>
    getProduct({ variables: { asin } });

  return (
    <AppWrapper>
      <Img src={logo} className="amazon-logo" alt="amazon-logo" />
      <SearchBox>
        <SearchHeader>product search by ASIN:</SearchHeader>
        <SearchInputWrapper>
          <SearchInput
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter") {
                handleGetProduct(inputValue);
              }
            }}
          />
          <SearchButton onClick={() => handleGetProduct(inputValue)}>
            <FontAwesomeIcon size="2x" icon={faSearch} />
          </SearchButton>
        </SearchInputWrapper>
      </SearchBox>

      {loading && <FontAwesomeIcon spin size="2x" icon={faSpinner} />}

      {data && data.product && <ProductResults {...data.product} />}
    </AppWrapper>
  );
}

export default App;
