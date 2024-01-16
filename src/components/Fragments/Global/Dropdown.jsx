"use client";

import { useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";

export default function Dropdown({ children, trigger }) {
  const [show, setShow] = useState(false);
  const dropRef = useClickOutside(() => setShow(false));

  return (
    <div
      className="relative w-fit"
      ref={dropRef}
      onClick={() => setShow((curr) => !curr)}
    >
      <div>{trigger}</div>
      {show && (
        <ul className="absolute right-0 mt-2 overflow-hidden bg-white divide-y divide-gray-100 rounded-lg shadow min-w-max">
          {children}
        </ul>
      )}
    </div>
  );
}

export function DropdownItem({ children }) {
  return (
    <li className="flex items-center gap-3 px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-50">
      {children}
    </li>
  );
}
