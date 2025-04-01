import React, { useState, useEffect } from "react";

export default function Practice() {
  return <div></div>;
}

function Pagination(props) {
  const [paginationAttr, setPaginationAttr] = useState({});

  useEffect(() => {
    const { page = 1, pageSize = 10, total = 0 } = props;
    const totalPages = Math.ceil(total / pageSize);
    setPaginationAttr({ page, pageSize, totalPages });
  }, [props]);

  return (
    <>
      {Array(paginationAttr.totalPages)
        .fill(1)
        ?.map((pg, ind) => (
          <button
            onClick={() => props?.onPageChange && props.onPageChange(ind + 1)}
          >
            {ind + 1}
          </button>
        ))}
    </>
  );
}
