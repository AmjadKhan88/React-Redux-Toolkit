import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteTodo, toggleTodo } from "../features/todos/todosSlice";
import { useState } from "react";

export default function Todo() {
  const [todoInput, setTodoInput] = useState("");
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Todo App
        </h1>
        <p className="text-center text-gray-500 mt-1">
          React + Redux Toolkit
        </p>

        {/* Input */}
        <div className="mt-6 flex gap-3">
          <input
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            type="text"
            placeholder="What needs to be done?"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <button
            disabled={todoInput.length < 3}
            onClick={() => {
              dispatch(addToDo(todoInput));
              setTodoInput("");
            }}
            className="px-5 py-3 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Add
          </button>
        </div>

        {/* Todo List */}
        <ul className="mt-8 space-y-3">
          {todos.length === 0 && (
            <p className="text-center text-gray-400">
              No todos yet. Add one above 👆
            </p>
          )}

          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 hover:shadow-sm transition"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
                  className="w-5 h-5 accent-sky-600 cursor-pointer"
                />
                <span
                  className={`text-lg ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }`}
                >
                  {todo.text}
                </span>
              </div>

              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-sm text-red-500 hover:text-red-700 font-medium transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
