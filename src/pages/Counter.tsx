import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 text-center">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">
          Redux Counter
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          React + Redux Toolkit
        </p>

        {/* Count Display */}
        <div className="mt-6 text-5xl font-bold text-sky-600">
          {count}
        </div>

        {/* Increment / Decrement */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => dispatch(decrement())}
            className="w-12 h-12 rounded-full bg-gray-200 text-xl font-bold hover:bg-gray-300 transition"
          >
            −
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="w-12 h-12 rounded-full bg-sky-600 text-white text-xl font-bold hover:bg-sky-700 transition"
          >
            +
          </button>
        </div>

        {/* Extra Actions */}
        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => dispatch(incrementByAmount(5))}
            className="w-full py-2 rounded-lg border border-sky-600 text-sky-600 font-medium hover:bg-sky-50 transition"
          >
            Increment by 5
          </button>

          <button
            onClick={() => dispatch(reset())}
            className="w-full py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
