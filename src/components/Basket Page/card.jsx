import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { Context } from '../../Context/context.jsx';
import Basket from '@/assets/png/basket.png';

const Card = () => {
    const { state, dispatch } = React.useContext(Context);

    return (
        <>
            {state.userCard.length > 0 ? (
                state.userCard.map((item, index) => (
                    <div
                        className={
                            'flex shadow-sm shadow-gray-200 h-auto rounded-[30px] gap-3'
                        }
                        key={index}
                    >
                        <img
                            src={item.img}
                            className={'w-[125px] h-full rounded-[12px]'}
                            alt="Beef Burger"
                        />
                        <div className={'pt-4'}>
                            <h3
                                className={
                                    'text-[12px] sm:text-[20px] font-[600]'
                                }
                            >
                                {item.name}
                            </h3>
                            <h5
                                className={
                                    'font-[300] text-[12px] sm:text-[20px] pt-4'
                                }
                            >
                                R.p {item.price}
                            </h5>
                        </div>
                        <div
                            className={
                                'flex relative top-1 justify-end pl-5 items-center gap-2 '
                            }
                        >
                            <button
                                onClick={() =>
                                    dispatch({ type: 'minus', payload: item })
                                }
                                className={
                                    'bg-[#FFA800] transition-all ease-in duration-270 active:scale-37 text-white rounded-[50%] p-1'
                                }
                            >
                                <Minus size={15} />
                            </button>
                            <h5 className={'text-[12px]'}>{item.quantity}</h5>
                            <button
                                onClick={() =>
                                    dispatch({ type: 'plus', payload: item })
                                }
                                className={
                                    'bg-[#FFA800] transition-all ease-in duration-270 active:scale-37 text-white rounded-[50%] p-1'
                                }
                            >
                                <Plus size={15} />
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <img src={Basket} className={'w-[345px]  h-[205px] pt-4'} />
            )}
        </>
    );
};

export default Card;
