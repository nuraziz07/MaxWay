import React, { useContext } from 'react';
import { MapPinned, Timer, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import '/src/components/animation.css';
import { Context } from '@/Context/context.jsx';

const Confirm = ({ open, close }) => {
    const { state, dispatch } = useContext(Context);

    if (!open) return null;
    const modalStyle = {
        position: 'fixed',
        top: '87%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: '#FFF',
        padding: '30px',
        zIndex: 1000,
    };
    const overlay = {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1100,
    };
    return (
        <div style={overlay}>
            <div
                style={modalStyle}
                className={
                    'container_mobile w-[100%] animation rounded-t-[40px]'
                }
            >
                <div className={'flex justify-end pr-4'}>
                    <X onClick={() => close(false)} />
                </div>
                <h1 className={'font-[700] text-[14px] pb-6'}>
                    Delivery Location
                </h1>
                <div className={'grid grid-row-2 pb-6 gap-3'}>
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
                <Link to={'/'}>
                    <button
                        onClick={() => dispatch({ type: 'reset' })}
                        className={
                            'bg-[#FFA800] mb-15 transition-all ease-in duration-170 active:scale-95 hover:bg-[#d59c28] py-3 rounded-[24px] text-white flex w-full justify-center text-[14px]'
                        }
                    >
                        Confirm
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Confirm;
