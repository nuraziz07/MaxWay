import React, {useContext, useState} from 'react';
import Basket from "../Basket Page/basket.jsx";
import Item from "../Basket Page/item.jsx";
import {useNavigate} from "react-router-dom";
import {ArrowLeft, MapPinned, MapPinPen, ShoppingCart} from "lucide-react";
import Confirm from "../confirm.jsx";
import {Context} from "/src/Context/context.jsx"

const OrderDetail = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useContext(Context);
    const [open, setOpen] = useState(false)


    const total = state.userCard.map(item => item.price * item.quantity)

    const reduce = total.reduce((prev, next) => prev + next, 0)

    let quantity = state.userCard.map(items => items.quantity)

    let sum = quantity.reduce((sum, cur) => sum + cur, 0)
    return (
<div>
    <div className={'border-b border-[#E1E1E1] pb-2 flex items-center justify-center w-full'}>
        <div className={'relative flex  justify-center px-2 py-4'}>
            <ArrowLeft size={28} className={'absolute cursor-pointer transition-all ease-in duration-170 active:scale-85 right-70 cursor-pointer'}  onClick={() => navigate('/')} />
            <h1 className={'text-[20px] font-[700]'}>Order Detail</h1>
            <div className={"relative transition-all cursor-pointer ease-in duration-170 active:scale-85  left-33"} onClick={() => navigate('/basket')}>
                <ShoppingCart  className={"cursor-pointer"} size={30}/>
                <i className={`bg-[#FFA800] ${sum > 0 ? 'visible': 'hidden'} px-3 py-1 rounded-[20px] left-4 absolute bottom-5 z-10`}>
                    {sum}
                </i>
            </div>
        </div>
    </div>
    <div className={'container_mobile'}>
        <div className={'px-4'}>
            <div className={'grid pt-12 pr-15 gap-3 grid-row-2'}>
                <div className={'flex items-center gap-3 justify-start'}>
                    <h1 className={'font-[700] text-[16px]'}>Delivery Location</h1>
                    <MapPinPen className={'bg-none text-[#FFA800] '} onClick={() => navigate('/editing')} size={22} />
                </div>
                <div className={'flex gap-3 items-center justify-start'}>
                    <MapPinned className={'bg-none text-[#FFA800]'} size={22} />
                    <p className={'font-[300] pr-5 text-[14px]'}>JL. Teuku Umar No 34a, Bnadar Lampung, Lampung</p>
                </div>
            </div>
            <h1 className={'text-black font-[700] pt-9 text-[18px]'}>Orders</h1>
            <div className={'grid border-b-[2px] h-auto border-[#E1E1E1] pb-7 gap-4 pt-2'}>
                <Item />
            </div>

            <div className={'pt-6'}>
                <h1 className={'font-[700] text-black text-[14px]'}>Payment Details</h1>
                <div className={'w-full flex pt-7 justify-between'}>
                    <h3 className={'font-[500] text-[13px]'}>Payment Method</h3>
                    <h3 className={'font-[500] text-[13px]'}>OVO</h3>
                </div>
                <div className={'w-full flex pt-3 justify-between'}>
                    <h3 className={'font-[400] text-[13px]'}>Sub total</h3>
                    <h3 className={'font-[400] text-[13px]'}>Rp. {reduce}</h3>
                </div>
                <div className={'w-full flex pt-3 justify-between'}>
                    <h3 className={'font-[400] text-[13px]'}>Delivery</h3>
                    <h3 className={'font-[400] text-[13px] text-[#FFA800]'}>Free</h3>
                </div>
                <div className={'w-full flex pt-6 justify-between'}>
                    <h3 className={'font-[700] text-[15px]'}>Price</h3>
                    <h3 className={'font-[700] text-[15px]'}>Rp. {reduce}</h3>
                </div>
            </div>
            <div className={'pt-15'} onClick={() => setOpen(true)} >
                <button className={`${state.userCard.length == 0 ? 'bg-[#FFA800] opacity-[0.5]' : 'bg-[#FFA800] hover:bg-[#d59c28]'} py-3 rounded-[24px]  transition-all ease-in duration-170 active:scale-95 text-white flex w-full justify-center text-[14px]`}>Order</button>
            </div>
        </div>
    </div>
    {state.userCard.length > 0 ? <Confirm open={open} close={() => setOpen(false)}/> : null}

</div>
    );
};

export default OrderDetail;