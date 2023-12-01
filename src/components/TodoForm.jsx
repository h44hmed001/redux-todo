import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";
import { useState } from "react";
function TodoForm() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    inputValue.length > 0 && dispatch(addTodo(inputValue));
    setInputValue("");
  };
  return (
    <form onSubmit={submitHandler} className="flex">
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        value={inputValue}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
