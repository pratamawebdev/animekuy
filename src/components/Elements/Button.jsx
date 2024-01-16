import React from "react";

const Button = ({ children }) => {
  return (
    <button className="flex gap-2 px-4 py-2 font-medium text-white transition-all bg-green-600 rounded-lg hover:bg-green-500">
      {children}
    </button>
  );
};

export default Button;
