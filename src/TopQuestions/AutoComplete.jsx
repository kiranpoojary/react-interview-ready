import React, { useState, useEffect, useCallback } from "react";

function AutoComplete() {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cache = {};

  const debouncedSearch = useCallback(debouncer(getProducts, 300), []);

  useEffect(() => {
    debouncedSearch(input);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
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
        `https://dummyjson.com/products/search?q=${query ? query : ""}`
      );
      const { products: allProducts = [] } = await data.json();
      setSelectedIndex(0);
      setProducts(allProducts);
      cache[query] = allProducts;
      return;
    }
  }

  const handleKeyDown = useCallback(
    (event) => {
      if (event?.key === "ArrowUp") {
        setSelectedIndex((prev) => (prev == 1 ? products?.length : prev - 1));
      } else if (event?.key === "ArrowDown") {
        setSelectedIndex((prev) => (prev == products.length ? 1 : prev + 1));
      } else if (event?.key === "Enter") {
        setShowSuggestions(false);
        setInput(products[selectedIndex - 1].title);
        document.getElementById("search").blur();
      }
    },
    [products, selectedIndex] // Ensures the function always has the latest products and selectedIndix
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]); // if handleKeyDown changed, then reattch handleKeyDown function again

  return (
    <div className="autocomplete-container">
      <div>
        <input
          value={input}
          id="search"
          placeholder="Search: iphone, samsung etc"
          className="autocomplete-input"
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => {
            setSelectedIndex(0);
            setShowSuggestions(false);
          }}
          autoComplete="off"
        />
      </div>
      {showSuggestions && (
        <div className="auto-result-container">
          {products?.map((d, i) => (
            <span
              onClick={(e) => {
                alert("pl");
              }}
              key={d?.sku}
              className={`autocomplete-result ${
                i + 1 == selectedIndex && "auto-selected"
              }`}
            >
              {d?.title}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default AutoComplete;
