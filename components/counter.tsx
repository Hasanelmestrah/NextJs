"use client";

import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { increment, decrement } from '../app/store/counterSlice';

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-6">
        <div className="flex space-x-6">
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-4 bg-red-600 text-white text-3xl font-bold rounded hover:bg-red-700 transition"
          >
            -
          </button>
          <span className="text-5xl font-extrabold">{count}</span>
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-4 bg-green-600 text-white text-3xl font-bold rounded hover:bg-green-700 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
