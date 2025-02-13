import React from 'react'
import { upPageInfoProps } from '@/types';
const   UpPagesInfo = ({pgName, pgNum}: upPageInfoProps) => {
  return (
    <div className='border-b-[#0E464F] border-b-[1px]  flex justify-between text-white'>
    <h1 className='border-b-[#24A0B5]  border-b-[2px]  pgTitle'>{pgName}</h1>
    <p className='Roboto'>step{pgNum}/3</p>
  </div>
  )
}

export default UpPagesInfo;
