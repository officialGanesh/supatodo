import React from "react";

function TodoItem({ text }) {
  return (
    <div className="flex center justify-between w-80 transition transform duration-200 ease-in-out hover:bg-[#232323] hover:scale-105  cursor-pointer p-3 border border-gray-800">
      <p className="text-gray-400  text-base font-medium">{text}</p>
      <div className="text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default TodoItem;
