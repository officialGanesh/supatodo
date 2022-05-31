import React, { useState } from "react";
import { supabase } from "../utils/supabase";

function TodoItem({ text, todo_id }) {
  // Deleting a new todo
  const deleteTodoFromSupabaseDB = async (e) => {
    const { data, error } = await supabase.from("todos").delete().match({
      id: todo_id,
    });
  };

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex center justify-between transition transform duration-200 ease-in-out hover:bg-[#232323] hover:scale-105  cursor-pointer p-3 border border-gray-800 ">
      {/* Task and checkbox */}
      <div className="flex items-center justify-center space-x-3 ">
        <input
          type="checkbox"
          onClick={() => {
            setIsChecked(!isChecked);
          }}
          checked={isChecked}
          className="w-5 h-5 rounded-sm border-gray-800 "
        />
        <p
          className={`text-gray-400  text-base font-medium ${
            isChecked ? "line-through text-gray-500" : "text-gray-400"
          }`}
        >
          {text}
        </p>
      </div>
      {/* Delete button */}
      {isChecked && (
        <>
          <div className="text-gray-500" onClick={deleteTodoFromSupabaseDB}>
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
        </>
      )}
    </div>
  );
}

export default TodoItem;
