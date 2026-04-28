import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Order from '../Order/order.jsx';
import { products } from '@/hooks/products.js';

const Page2 = () => {
    const { id } = useParams();

    const [open, setOpen] = useState(false);

    const filtered = useMemo(() => {
        return products.filter((item) => item.id == id);
    }, [products, id]);

    return (
        <div className={'container_mobile w-full justify-center flex'}>
            {filtered.map((item, index) => {
                return (
                    <div key={index} className={'pt-14'}>
                        <img
                            className={
                                'rounded-[30px]   transition-all w-full justify-center flex ease-in duration-230 hover:scale-102 h-[250px]'
                            }
                            src={item.img}
                            alt=""
                        />
                        <div className={'px-2 w-full pt-5'}>
                            <h1
                                className={
                                    'text-black font-[700] text-[26px] leading-15'
                                }
                            >
                                {item.name}
                            </h1>
                            <p
                                className={
                                    'font-[300] text-[14px] sm:text-[18px] '
                                }
                            >
                                {item.description}
                            </p>
                            <h3
                                className={
                                    'flex justify-end pt-5 border-b border-[#E1E1E1] pr-2 font-[700] text-[21px]'
                                }
                            >
                                R.p {item.price}
                            </h3>
                            <div className={'pt-9'}>
                                <button
                                    onClick={() => setOpen(true)}
                                    className={
                                        'bg-[#FFA800] hover:bg-[#d59c28] transition-all ease-in duration-170 active:scale-95 py-3 rounded-[24px] text-white flex w-full justify-center text-[14px]'
                                    }
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <Order
                            open={open}
                            filtered={filtered}
                            close={setOpen}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Page2;
