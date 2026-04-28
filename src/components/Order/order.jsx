import React, { useContext, useState } from 'react';
import { ChefHat, Minus, Plus, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import '/src/components/animation.css';
import { Context } from '/src/Context/context.jsx';

const Order = ({ open, close, filtered }) => {
    const [disable, setDisable] = useState(false);

    const { state, dispatch } = useContext(Context);

    if (!open) return null;

    const modalStyle = {
        position: 'fixed',
        top: '77%',
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
            {filtered.map((item, index) => {
                const finding = state.userCard.find((c) => c.id === item.id);

                const quantity = finding ? finding.quantity : 0;

                const disabled = quantity >= 1;

                return (
                    <div
                        key={index}
                        style={modalStyle}
                        className={
                            'w-full animation container_mobile rounded-t-[60px]'
                        }
                    >
                        <div className={'flex justify-end'}>
                            <X onClick={() => close(false)} />
                        </div>
                        <h3 className={'font-[700] text-[28px] px-5'}>
                            {item.name}
                        </h3>
                        <h2
                            className={
                                'text-[#FFA800] font-[700] text-[24px] flex justify-end border-b border-[#E1E1E1] pb-3'
                            }
                        >
                            Rp. {item.price}
                        </h2>
                        <p
                            className={
                                'font-[300] text-[13px] sm:text-[14px] pt-6 leading-6'
                            }
                        >
                            {item.description}
                        </p>
                        <div className={'flex justify-evenly pt-10 pb-5'}>
                            <div
                                className={
                                    'bg-[#FFA800] text-white rounded-[30px] items-center px-5 py-2 gap-4 flex w-fit'
                                }
                            >
                                <Minus
                                    className={
                                        'transition-all ease-in duration-270 active:scale-37'
                                    }
                                    onClick={() =>
                                        dispatch({
                                            type: 'minus',
                                            payload: item,
                                        })
                                    }
                                />
                                <h1 className={'font-[700] text-[18px]'}>
                                    {quantity}
                                </h1>
                                <Plus
                                    className={
                                        'transition-all ease-in duration-270 active:scale-37'
                                    }
                                    onClick={() =>
                                        dispatch({
                                            type: 'plus',
                                            payload: item,
                                        })
                                    }
                                />
                            </div>
                            <Link
                                to={
                                    disabled
                                        ? '/order-detail'
                                        : setDisable(false)
                                }
                            >
                                <button
                                    disabled={disable}
                                    className={`bg-[#FFA800] ${disabled ? 'bg-[#FFA800] hover:bg-[#d59c28] transition-all ease-in duration-170' : 'opacity-[0.5]'}   text-white rounded-[30px] px-6 py-2 gap-4 flex w-fit`}
                                >
                                    <ChefHat />
                                    <h1
                                        className={
                                            'font-[700] flex items-center text-[14px]'
                                        }
                                    >
                                        Add To Cart
                                    </h1>
                                </button>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Order;
