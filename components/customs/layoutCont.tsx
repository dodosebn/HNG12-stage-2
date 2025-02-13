import React from 'react'
import { LayoutContProps } from '@/types';
const LayoutCont = ({children}: LayoutContProps ) => {
  return (
<div className="flex justify-center items-center mx-auto min-h-screen">
<div className='bg-[#041E23] border-[1px] border-[#0E464F] p-4 rounded-3xl'>
{children}
    </div>
    </div>
  )
}

export default LayoutCont;
