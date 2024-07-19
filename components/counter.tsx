"use client";

import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { increment, decrement } from '../app/store/counterSlice';

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center mb-10">
        <h1 className="text-6xl font-bold text-gray-800 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
          The number is {count}
        </h1>
      </div>
      <div className="flex flex-col items-center space-y-8">
        <div className="flex space-x-6">
          <button
            onClick={() => dispatch(decrement())}
            className="px-8 py-4 bg-red-600 text-white text-2xl font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            -
          </button>
          <span className="text-6xl font-bold text-gray-800">{count}</span>
          <button
            onClick={() => dispatch(increment())}
            className="px-8 py-4 bg-green-600 text-white text-2xl font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
