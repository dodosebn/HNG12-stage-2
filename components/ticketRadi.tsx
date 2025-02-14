'use client';
import React, { useEffect, useState } from 'react';
import LayoutCont from './customs/layoutCont';
import UpPagesInfo from './customs/upPagesInfo';
import ButtonCtrl from './customs/buttonCtrl';
import { useRouter } from 'next/navigation';
import Loading from './customs/loading';
import DownScan from '@/public/img/stuff down .png';
import Image from 'next/image';
import TableHolderPg3 from './customs/tableHolderPg3';
const TicketRadi = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [formDatas, setFormData] = useState({
        name: '',
        email: '',
        specialRequest: '',
        imageUrl: '',
        selectedType: '',
        numberOfTickets: 1,
    });

    useEffect(() => {
        const fetchDatas = () => {
            const name = localStorage.getItem('name') || '';
            const email = localStorage.getItem('email') || '';
            const specialRequest = localStorage.getItem('specialRequest') || '';
            const imageUrl = localStorage.getItem('imageUrl') || '';
            const selectedType = localStorage.getItem('selectedType') || '';
            const numberOfTickets = localStorage.getItem('numberOfTickets') ? Number(localStorage.getItem('numberOfTickets')) : 1;

            setFormData({
                name,
                email,
                specialRequest,
                imageUrl,
                selectedType,
                numberOfTickets,
            });
            setLoading(false); 
        };
        fetchDatas();
    }, []);

    const handleDownload = () => {
        alert('God have mercy on me');
    }

    const returnPage = () => {
        router.push('/');
    }

    return (
        <LayoutCont>
            <div className='mx-auto flex justify-center text-center flex-col text-[#fafafa]'>
                <UpPagesInfo pgName="Ready" pgNum="3" />
                <div className='py-[1.4rem]'>
                    <h1 className='text-[#FFFFFF] font-bold text-2xl'>Your Ticket is Booked!</h1>
                    <p className='text-sm'>Check your email for a copy or you can download</p>
                </div>
                <div className='px-[3rem] py-[1.5rem]'>
                    <main className='bg-[#12464E] rounded-[20px] p-[1rem] border-[1.5px] border-[#24A0B5]'>
                        <div className='bg-[#12464E] border-[1px] border-[#24A0B5] rounded-lg p-[0.7rem]'>
                            <h1 className='topic text-3xl'>Techember Fest ”25</h1>
                            <p className='text-sm'>📍 04 Rumens Road, Ikoyi, Lagos 📅 March 15, 2025 | 7:00 PM</p>

                            <div className='flex justify-center my-[1rem]'>
                                {formDatas.imageUrl && (
                                    <img
                                        src={formDatas.imageUrl}
                                        alt="Uploaded"
                                        className="w-44 h-44 rounded-xl border-[0.3rem] border-[#24A0B5] object-cover"
                                    />
                                )}
                            </div>

                            
                            <section className="grid grid-cols-2 w-64 mx-auto rounded-lg">
                                <TableHolderPg3 h3Val='Enter Name' pVal={formDatas.name} />
                                <TableHolderPg3 h3Val='Enter Email *' pVal={formDatas.email}/>
                                <TableHolderPg3 pVal={formDatas.selectedType} h3Val='Ticket Type'/>
                                <TableHolderPg3  h3Val='Ticket for:' pVal={formDatas.numberOfTickets}/>
                                <div className="col-span-2 p-4 border border-gray-300">
                                    <h3 className=" text-sm opacity-[75%]">Special Request</h3>
                                    <p className="mt-2 whitespace-normal break-words">
                                        {formDatas.specialRequest || "Nil"}
                                    </p>
                                </div>
                            </section>
                        </div>
                    </main>
       <div className='px-[1rem]'><hr className='border-[#24A0B5] border-dotted border-2'/></div>                         <div className='bg-[#12464E] rounded-[20px] border-[1.5px] border-[#24A0B5] p-[2rem]'>
                <Image src={DownScan} alt='yoh' className='mx-auto'/>
            </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-between'>
                    {loading ? <Loading /> : <ButtonCtrl btnName='Book Another Ticket' bgCol='#041E23' color='#fafafa' handleClicks={returnPage} />}
                    {loading ? <Loading /> : <ButtonCtrl btnName='Download Ticket' bgCol='#24A0B5' color='#fafafa' handleClicks={handleDownload} />}
                </div>
            </div>
        </LayoutCont>
    );
};

export default TicketRadi;