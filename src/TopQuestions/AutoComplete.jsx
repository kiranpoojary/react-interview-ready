import React, { useState, useEffect, useCallback } from "react";

function AutoComplete() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cache, setCache] = useState({});

  const debouncedSearch = useCallback(debouncer(getProducts, 300), []);

  useEffect(() => {
    debouncedSearch(input);
  }, [input]);

  function debouncer(fn, delay) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

  async function getProducts(query) {
    if (cache[query]) {
      setProducts(cache[query]);
      return;
    } else {
      const data = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const { products: allProducts = [] } = await data.json();
      setProducts(allProducts);
      cache[query] = allProducts;
      return;
    }
  }

  return (
    <div className="autocomplete-container">
      <div>
        <input
          id="search"
          placeholder="Search: iphone, samsung etc"
          className="autocomplete-input"
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
      </div>
      {showSuggestions && (
        <div className="auto-result-container">
          {products?.map((d) => (
            <span className="auto-result">{d?.title}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;
