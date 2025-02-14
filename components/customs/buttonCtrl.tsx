import React from 'react';
import { ButtonCtrlProps } from '@/types';

const ButtonCtrl = ({ btnName, bgCol, color, handleClicks }: ButtonCtrlProps) => {
  return (
    <button 
      style={{ backgroundColor: bgCol, color: color }} 
      className='border border-[#24A0B5] px-[4.5em] py-1 rounded-md' 
      onClick={handleClicks} // Correctly invoke the function
    >
      {btnName}
    </button>
  );
};

export default ButtonCtrl;