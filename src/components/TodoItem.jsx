import { useState } from "react";
import { deleteTodo, updateTodo, toggleComplete } from "../slices/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [textIsEditable, setTextIsEditable] = useState(false);
  return (
    <div
      className={`flex w-full ${
        todo.completed ? "bg-green-600/80" : ""
      } text-white border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300   `}
    >
      <input
        onClick={() => dispatch(toggleComplete(todo.id))}
        type="checkbox"
        className="cursor-pointer"
      />
      <input
        type="text"
        className={`outline-none w-full bg-transparent rounded-lg `}
        value={todo.text}
        onChange={(e) =>
          dispatch(updateTodo({ ...todo, text: e.target.value }))
        }
        readOnly={!textIsEditable}
      />
      {/* Edit, Save Button */}
      <button
        onClick={() => setTextIsEditable((prev) => !prev)}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
      >
        {textIsEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
