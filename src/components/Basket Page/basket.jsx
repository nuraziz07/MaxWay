import React, {useContext} from 'react';
import Beef from "/src/assets/png/beef.jpg"
import {Minus, Plus} from "lucide-react";
import Item from "./item.jsx";
import {Context} from "@/Context/context.jsx";
import {useNavigate, Link} from "react-router-dom";

const Basket = () => {

    const {state, dispatch} = useContext(Context)

    const navigate = useNavigate();

    // const {products} = useStateHook()


    const total = state.userCard.map(item => item.price * item.quantity)

    const reduce = total.reduce((prev, next) => prev + next, 0)
    ///state.userCard reduce price, total



    return (
        <div className={'container_mobile'}>
            <div>
                <h1 className={'text-black text-center font-[700] pb-6 w-full text-[22px]'}>Orders</h1>
                <div className={'border-b-[2px]  h-auto border-[#E1E1E1] pb-15 gap-10 grid'}>
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
                        <h3 className={'font-[400] text-[13px]'}>R.p  {reduce}</h3>
                    </div>
                    <div className={'w-full flex pt-3 justify-between'}>
                        <h3 className={'font-[400] text-[13px]'}>Delivery</h3>
                        <h3 className={'font-[400] text-[13px] text-[#FFA800]'}>Free</h3>
                    </div>
                    <div className={'w-full flex pt-6 justify-between'}>
                        <h3 className={'font-[700] text-[15px]'}>Price</h3>
                        <h3 className={'font-[700] text-[15px]'}>R.p {reduce}</h3>
                    </div>
                </div>
              <Link to={state.userCard.length >= 1 ? '/order-detail': null}>
                  <div className={'pt-15'}>
                  <button  className={`${state.userCard.length == 0 ? 'bg-[#8c6b29]' : 'bg-[#FFA800]'} py-3 rounded-[24px] text-white flex w-full justify-center text-[14px]`}>Add to cart</button>
                 </div>
              </Link>
            </div>
        </div>
    );
};

export default Basket;