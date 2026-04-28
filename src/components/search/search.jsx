import React, { useContext, useState } from 'react';
import '/src/App.css';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Card from '../Basket Page/card.jsx';

import { Context } from '../../Context/context.jsx';

const Search = () => {
    const { state, dispatch } = useContext(Context);
    const navigate = useNavigate();

    let quantity = state.userCard.map((items) => items.quantity);

    let sum = quantity.reduce((sum, cur) => sum + cur, 0);

    return (
        <div className={'sm:w-full fixed top-0'}>
            <div
                className={
                    'flex justify-space-between w-full px-8 pt-8 border-b border-gray-400 pb-5 gap-10'
                }
            >
                <ArrowLeft
                    className={
                        'cursor-pointer transition-all ease-in duration-170 active:scale-85'
                    }
                    size={40}
                    onClick={() => navigate('/')}
                />
                <input
                    type="text"
                    onChange={(e) =>
                        dispatch({ type: 'filter', payload: e.target.value })
                    }
                    placeholder={'Search...'}
                    className={
                        'w-[100%] bg-gray-100 px-5 pt-1 rounded-[24px] pb-1'
                    }
                />

                <div
                    className={
                        'relative transition-all cursor-pointer ease-in duration-170 active:scale-85'
                    }
                    onClick={() => navigate('/basket')}
                >
                    <ShoppingCart className={'cursor-pointer'} size={30} />
                    <i
                        className={`bg-[#FFA800] ${sum > 0 ? 'visible' : 'hidden'} px-3 py-1 rounded-[20px] left-4 absolute bottom-5 z-10`}
                    >
                        {sum || 0}
                    </i>
                </div>
            </div>
        </div>
    );
};

export default Search;
