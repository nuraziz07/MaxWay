import React, { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
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
                const finding = filteredData.find((c) => c.id === item.id);

                const check = finding ? finding.quantity : 0;
                return (
                    <div
                        key={index}
                        className={`w-full  ${check > 1 ? 'border border-yellow-500' : 'border border-gray-300'}   transition-all ease-in duration-170 hover:scale-102 rounded-[20px]  gap-10 flex`}
                    >
                        <div onClick={() => navigate(`/detail/${item.id}`)}>
                            <img
                                src={item.img}
                                className={'rounded-[20px] h-full w-[132px]'}
                                alt=""
                            />
                        </div>
                        <div className={'pt-9'}>
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
                            <Plus
                                onClick={() =>
                                    dispatch({ type: 'plus', payload: item })
                                }
                                className={
                                    'relative transition-all ease-in duration-170 active:scale-85 cursor-pointer hover:bg-[#d59c28] left-25 sm:left-34 sm:top-1 p-2 bg-[#FFA800] text-white rounded-[50%]'
                                }
                                size={35}
                            />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default FoodItem;
