import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./topq.css";

PaginationComponent.propTypes = {
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  pageSize: PropTypes.number,
  currentPage: PropTypes.number,
  total: PropTypes.number,
  showPageSize: PropTypes.bool,
  onPageChange: PropTypes.func,
  onPageSizeChange: PropTypes.func,
};

export function PaginationComponent(props) {
  const [paginationProperties, setPaginationProperties] = useState({});

  function onPageChanged(pageNo) {
    paginationProperties?.onPageChange &&
      paginationProperties?.onPageChange(+pageNo);
  }

  function onPageSizeChanged(size) {
    paginationProperties?.onPageSizeChange &&
      paginationProperties?.onPageSizeChange(+size);
  }

  useEffect(() => {
    const {
      pageSizeOptions = [10, 20, 50],
      pageSize = 10,
      total = 0,
      currentPage = 1,
      showPageSize = false,
      onPageChange = null,
      onPageSizeChange = null,
    } = props;
    const maxPage = Math.ceil(total / pageSize);

    setPaginationProperties((prev) => ({
      pageSizeOptions,
      pageSize,
      total,
      currentPage,
      showPageSize,
      onPageChange,
      onPageSizeChange,
      maxPage,
    }));
  }, [props]);

  return (
    <div>
      {[...Array(paginationProperties?.maxPage).fill(1)]?.map((e, i) => (
        <button
          key={"page-" + i + 1}
          className={
            paginationProperties?.currentPage == i + 1 && "active-page"
          }
          onClick={() => onPageChanged(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      {paginationProperties?.showPageSize && (
        <div style={{ display: "inline", marginLeft: "10px" }}>
          <select
            value={paginationProperties?.pageSize}
            onChange={(e) => onPageSizeChanged(e.target.value)}
          >
            {paginationProperties?.pageSizeOptions?.map((op) => (
              <option value={op}>{op}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default function Pagination() {
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 2,
    items: [1, 2, 3, 4, 5, 6, 6, 7],
    totalItems: 0,
  });

  function onPageChange(page) {
    setPagination((prev) => ({ ...prev, page }));
  }

  function onPageSizeChange(size) {
    setPagination((prev) => ({ ...prev, pageSize: +size }));
  }

  useEffect(() => {
    getProducts();
  }, [pagination.page, pagination.pageSize]);

  async function getProducts() {
    const data = await fetch(
      `https://dummyjson.com/products/search?skip=${
        +pagination.pageSize * (+pagination.page - 1)
      }&limit=${+pagination?.pageSize}`
    );
    const { products: allProducts = [], total = 0 } = await data.json();
    setPagination((prev) => ({
      ...prev,
      items: allProducts,
      totalItems: total,
    }));
  }

  return (
    <div>
      <div className="product-container">
        {pagination.items?.map((it, i) => (
          <div className="product-card">
            <img className="product-img" src={it?.thumbnail} alt="No Img" />
            <div>
              {it?.title}&nbsp;(${it?.price})
            </div>
          </div>
        ))}
      </div>
      <PaginationComponent
        pageSizeOptions={[5, 10, 20, 40]}
        pageSize={pagination?.pageSize}
        currentPage={pagination?.page}
        showPageSize={pagination?.totalItems > pagination.pageSize}
        total={pagination?.totalItems}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  );
}
