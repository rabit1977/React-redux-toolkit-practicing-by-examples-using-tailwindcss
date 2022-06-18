import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment, incrementAsync, incrementByAmount, incrementIfOdd,
  selectCount
} from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className='flex items-center justify-center mb-4'>
        <button
          className='appearance-none bg-none text-4xl px-4 text-[#704cb6] pb-1 rounded-sm outline-none transition-all delay-75 cursor-pointer border-2 border-solid border-transparent bg-[#704cb61a] ml-1 mr-2 hover:border-[#704cb666] hover:border-2 hover:border-solid focus:border-[#704cb666] focus:border-2 focus:border-solid active:bg-[#704cb633]'
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className='text-7xl ml-4 mr-5'>{count}</span>
        <button
          className='appearance-none bg-none text-4xl px-3 text-[#704cb6] pb-1 rounded-sm outline-none transition-all delay-75 cursor-pointer border-2 border-solid border-transparent bg-[#704cb61a] ml-1 mr-2 hover:border-[#704cb666] hover:border-2 hover:border-solid focus:border-[#704cb666] focus:border-2 focus:border-solid active:bg-[#704cb633]'
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className='flex items-center justify-center last:mb-3'>
        <input
          className='mr-1 text-2xl text-center w-16 p-0.5'
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className='appearance-none bg-none text-4xl px-3 text-[#704cb6] pb-1 rounded-sm outline-none transition-all delay-75 cursor-pointer border-2 border-solid border-transparent bg-[#704cb61a] ml-1 mr-2 hover:border-[#704cb666] hover:border-2 hover:border-solid focus:border-[#704cb666] focus:border-2 focus:border-solid active:bg-[#704cb633]'
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className='appearance-none bg-none text-4xl px-3 text-[#704cb6] pb-1 rounded-sm outline-none transition-all delay-75 cursor-pointer border-2 border-solid border-transparent bg-[#704cb61a] ml-1 mr-2 hover:border-[#704cb666] hover:border-2 hover:border-solid focus:border-[#704cb666] focus:border-2 focus:border-solid active:bg-[#704cb633]'
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className='appearance-none bg-none text-4xl px-3 text-[#704cb6] pb-1 rounded-sm outline-none transition-all delay-75 cursor-pointer border-2 border-solid border-transparent bg-[#704cb61a] ml-1 mr-2 hover:border-[#704cb666] hover:border-2 hover:border-solid focus:border-[#704cb666] focus:border-2 focus:border-solid active:bg-[#704cb633]'
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
