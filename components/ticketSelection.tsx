'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import TickType from './customs/tickType';
import ButtonCtrl from './customs/buttonCtrl';
import UpPagesInfo from './customs/upPagesInfo';
import LayoutCont from './customs/layoutCont';
import Loading from './customs/loading';

const TicketSelection = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [numberOfTickets, setNumberOfTickets] = useState<number>(1);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState<boolean>(false);  

  const router = useRouter();

  const handleTicketTypeSelection = (type: string) => {
    setSelectedType(type); 
    setErr(''); 
  };

  const handleNextClick = () => {
    if (!selectedType) {
      setErr('Please select a ticket type');
      return;
    }
    setLoading(true);
    localStorage.setItem('selectedType', selectedType);
    localStorage.setItem('numberOfTickets', numberOfTickets.toString());
    
    setTimeout(() => {
      router.push('/page-two');
      setLoading(false);
    }, 1000); 
  };

  const handleReturnClicks = () => {
    setLoading(true);
    localStorage.removeItem('selectedType');
    
  
    setTimeout(() => {
      router.push('/');
      setLoading(false);
    }, 1000); 
  };

  return (
    <LayoutCont>
      <UpPagesInfo pgName='Ticket Selection' pgNum='1'/>
      <main className='text-[#FAFAFA] bg-[#08252B] border-[1px] border-[#0E464F] p-3 rounded-3xl w-full mt-4'>
        <div style={{ background: 'linear-gradient(to right, #08252B 5%, #02191D 95%)' }} className='bg-[#0A0C11] border-[1px] border-[#07373F] rounded-2xl text-gray-100 p-[2rem]'>
          <h1 className='text-6xl text-center topic'>Techember Fest ’25</h1>
          <div className='Roboto'>
            <p className='text-center mx-auto mt-2 w-[20rem]'>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
            <p className='text-center text-sm mt-1'>📍 [Event Location] | March 15, 2025 | 7:00 PM</p>
          </div>
        </div>

        <hr className='border-[#07373F] border-[1.5px] my-4'/>
        <div>
          <h3 className='text-lg font-semibold Roboto'>Select Ticket Type:</h3>
          {err && <span className='text-red-500'>{err}</span>}
          <div className='p-2 rounded-2xl border-[#07373F] border-[1px] bg-[#041E23] 
          flex gap-3'>
            <TickType 
              price='Free' 
              info='Regular Access' 
              handleTicketTypeSelection={handleTicketTypeSelection}
              isSelected={selectedType === 'Regular Access'} 
              err={err}
            />
            <TickType 
              price='$150' 
              info='VIP/ACCESS' 
              handleTicketTypeSelection={handleTicketTypeSelection}
              isSelected={selectedType === 'VIP/ACCESS'} 
              err={err}
            />
            <TickType 
              price='$150' 
              info='VVIP/ACCESS' 
              handleTicketTypeSelection={handleTicketTypeSelection}
              isSelected={selectedType === 'VVIP/ACCESS'} 
              err={err}
            />
          </div>
        </div>

        <div className='mt-4'>
          <h3 className='text-lg font-semibold Roboto'>Number of Tickets</h3>
          <select name="number" className='w-full mt-2 rounded-lg p-[12px] outline-none bg-[#12464E] text-white' value={numberOfTickets} onChange={(e) => setNumberOfTickets(Number(e.target.value))}>
            {[1, 2, 3].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <div className='flex flex-col lg:flex-row justify-between gap-[1rem] mt-6'>
         <ButtonCtrl btnName='Cancel' bgCol='#041E23' color='#24A0B5' handleClicks={handleReturnClicks}/>
          {loading ? <Loading /> : <ButtonCtrl btnName='Next' bgCol='#24A0B5' color='#fff' handleClicks={handleNextClick}/>}
        </div>
      </main>
    </LayoutCont>
  );
};

export default TicketSelection;
