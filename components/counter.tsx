"use client";

import React from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { increment, decrement } from '../app/store/counterSlice';

const Counter: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
