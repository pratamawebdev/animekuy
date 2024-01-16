import React from "react";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex items-center justify-center gap-4 px-2 py-4 text-xl text-color-primary">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 transition-all bg-orange-600 rounded-md hover:bg-orange-500"
        >
          Prev
        </button>
      )}
      <p>
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="px-4 py-2 transition-all bg-green-600 rounded-md hover:bg-green-500"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
