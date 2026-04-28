import React, { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus } from 'lucide-react';
import { Context } from '/src/Context/context.jsx';
import { products } from '@/hooks/products.js';
const FoodItem = () => {
    const { state, dispatch } = useContext(Context);

    const navigate = useNavigate();

    const filteredData = useMemo(() => {
        if (state.term.length === 0) {
            return products;
        }
        return products.filter(
            (item) => item.name.toLowerCase().indexOf(state.term) > -1
        );
    }, [state.term]);

    return (
        <>
            {filteredData.map((item, index) => {
                const finding = state.userCard.find((c) => c.id === item.id);

                const check = finding ? finding.quantity : 0;

                return (
                    <div
                        key={index}
                        className={`w-full  ${check ? 'border-[2px] border-[#FFA800]' : 'shadow-lg shadow-gray-300'}   transition-all ease-in duration-170 hover:scale-102 rounded-[20px]  gap-4 flex`}
                    >
                        <div onClick={() => navigate(`/detail/${item.id}`)}>
                            <img
                                src={item.img}
                                className={'rounded-[20px] h-[131px] w-[152px]'}
                                alt=""
                            />
                        </div>
                        <div className={'pt-2'}>
                            <h3
                                className={
                                    'text-black  font-[700] text-[17px] sm:text-[23px] pr-2 leading-6'
                                }
                            >
                                {item.name}
                            </h3>
                            <h5
                                className={
                                    'items-end font-[700] text-[14px] sm:text-[17px] text-black pt-5 flex'
                                }
                            >
                                R.p {item.price}
                            </h5>
                            <div
                                className={
                                    'flex relative ml-15 px-3 py-1 rounded-[30px] justify-end top-6 bg-white shadow-md shadow-gray-300  items-center gap-2 '
                                }
                            >
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: 'decrement',
                                            payload: item,
                                        })
                                    }
                                    className={
                                        'bg-[#FFA800] transition-all ease-in duration-270 active:scale-37 text-white rounded-[50%] p-1'
                                    }
                                >
                                    <Minus size={18} />
                                </button>
                                <h5 className={'text-[14px]'}>{check}</h5>
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: 'plus',
                                            payload: item,
                                        })
                                    }
                                    className={
                                        'bg-[#FFA800] transition-all ease-in duration-270 active:scale-37 text-white rounded-[50%] p-1'
                                    }
                                >
                                    <Plus size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default FoodItem;
