import React from 'react';
import { TickTypeProps } from '@/types';

const TickType = ({ bgCol, price, info }: TickTypeProps) => {
  return (
    <div style={{ backgroundColor: bgCol }} className="p-2 border-[#197686] border-[1px] rounded-xl Roboto">
      <h1 className='text-[#fff] font-semibold'>{price}</h1>
      <p>{info}</p>
      <span className='text-[#D9D9D9]'>20/52</span>
    </div>
  );
};

export default TickType;
