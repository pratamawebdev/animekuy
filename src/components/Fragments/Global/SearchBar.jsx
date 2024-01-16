"use client";

import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const SearchBar = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="Search for anime"
        className="w-full p-2 bg-gray-800 rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
