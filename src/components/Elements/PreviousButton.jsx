"use client";

import { useRouter } from "next/navigation";
import React from "react";

const PreviousButton = () => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };
  return (
    <button onClick={handleBack} className="flex gap-2">
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
          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      Back
    </button>
  );
};

export default PreviousButton;
