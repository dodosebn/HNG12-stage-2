import React from 'react';
import { TickTypeProps } from '@/types';

const TickType = ({ price, info, handleTicketTypeSelection, isSelected }: TickTypeProps) => {
  return (
    <div
      style={{ backgroundColor: isSelected ? '#12464E' : '#02191D' }} // Use isSelected to determine the color
      className="p-2 border-[#197686] border-[1px] rounded-xl Roboto cursor-pointer"
      onClick={() => handleTicketTypeSelection(info)} // Call the parent's handler
    >
      <h1 className='text-[#fff] font-semibold'>{price}</h1>
      <p>{info}</p>
      <span className='text-[#D9D9D9]'>20/52</span>
    </div>
  );
};

export default TickType;