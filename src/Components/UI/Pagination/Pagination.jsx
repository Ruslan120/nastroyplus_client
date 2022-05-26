import React from "react";

export default function Pagination({
  limit,
  totalCount,
  paginate,
  prevPage,
  nextPage,
  currentPage,
}) {
  const pageCount = Math.ceil(totalCount / limit);
  const pageNumbers = [];

  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className="pagination justify-content-center">
      <li
        className={currentPage > 1 ? "page-item" : "page-item disabled"}
      >
        <span href="#" className="page-link" onClick={(e) => prevPage()}>
          Previous
        </span>
      </li>
      {pageNumbers.map((num) => (
        <li className={currentPage == num ? "page-item active" : "page-item"} key={num}>
          <a className="page-link" onClick={(e) => paginate(num)}>
            {num}
          </a>
        </li>
      ))}
      <li
        className={currentPage < pageCount ? "page-item" : "page-item disabled"}
      >
        <span className="page-link" onClick={(e) => nextPage()}>
          Next
        </span>
      </li>
    </ul>
  );
}
