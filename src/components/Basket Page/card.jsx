import React from 'react';
import {Minus, Plus} from "lucide-react";
import {Context} from "../../Context/context.jsx";
import Basket from "@/assets/png/basket.png";


const Card = () => {
    const {state, dispatch} = React.useContext(Context);

    return (
<>
    {state.userCard.length > 0  ? state.userCard.map((item, index) => (
        <div className={'flex shadow-sm shadow-gray-200 rounded-[30px] p-4 justify-evenly gap-5'} key={index}>
            <img src={item.img} className={'w-[125px] h-[105px] rounded-[12px]'} alt="Beef Burger"/>
            <div className={'pt-4'}>
                <h3 className={'text-[18px] font-[700]'}>{item.name}</h3>
                <h5 className={'font-[300] text-[20px] pt-4 pl-10'}>R.p  {item.price}</h5>
            </div>
            <div className={'flex items-center gap-3  pl-10'}>
                <button onClick={() => dispatch({type: "minus", payload: item})} className={'bg-[#FFA800] transition-all ease-in duration-270 active:scale-37 text-white rounded-[50%] p-1'}><Minus size={18} /></button>
                <h5>{item.quantity}</h5>
                <button onClick={() => dispatch({type: "plus", payload: item})} className={'bg-[#FFA800] transition-all ease-in duration-270 active:scale-37 text-white rounded-[50%] p-1'}><Plus size={18} /></button>
            </div>
        </div>
    )) : <img src={Basket} className={'w-[385px]  h-[225px] pt-4'} />}</>
    );
};

export default Card;