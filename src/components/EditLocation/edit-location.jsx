import React from 'react';
import { MapPinned, Timer } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EditLocation = () => {
    const navigate = useNavigate();
    return (
        <div className={'container_mobile'}>
            <div
                className={
                    'w-full z-1000 relative rounded-b-[40px] bg-white border-b-[1px] border-gray-300 pb-10'
                }
            >
                <div className={'relative flex justify-center pb-7'}>
                    <h1 className={'text-[20px] font-[700]'}>
                        Select Location
                    </h1>
                </div>
                <input
                    className={'p-2 bg-[#EAEAEA] w-full pl-10 rounded-[7px]'}
                    type="text"
                    placeholder={'Find location here..'}
                />
            </div>
            <iframe
                className={'relative bottom-3 w-full'}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47953.466457338654!2d69.22815299999999!3d41.3068697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8960a12d0061%3A0x4eac03c9ca906153!2sUzbek%20State%20University%20of%20World%20Languages!5e0!3m2!1sen!2s!4v1776842972247!5m2!1sen!2s"
                width="500"
                height="400"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
            <div className={'w-[100%] rounded-t-[40px]'}>
                <h1 className={'font-[700] text-[14px] py-6'}>
                    Delivery Location
                </h1>
                <div className={'grid grid-row-2 pb-7 gap-3'}>
                    <div className={'flex gap-3 items-center justify-start'}>
                        <MapPinned
                            className={'bg-none text-[#FFA800]'}
                            size={22}
                        />
                        <p className={'font-[300] pr-5 text-[14px]'}>
                            JL. Teuku Umar No 34a, Bnadar Lampung, Lampung
                        </p>
                    </div>
                    <div className={'flex gap-3 items-center justify-start'}>
                        <Timer className={'bg-none text-[#FFA800]'} size={22} />
                        <p className={'font-[300] pr-5 text-[14px]'}>12 min</p>
                    </div>
                </div>
                <button
                    onClick={() => navigate('/order-detail')}
                    className={
                        'bg-[#FFA800] hover:bg-[#d59c28] mb-5 transition-all ease-in duration-170 active:scale-95 py-3 rounded-[24px] text-white flex w-full justify-center text-[14px]'
                    }
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default EditLocation;
