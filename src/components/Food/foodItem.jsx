import React, {useContext, useMemo} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Plus} from "lucide-react";
import {Context} from "/src/Context/context.jsx";
import {products} from "@/hooks/products.js";
const FoodItem = () => {

    const {state, dispatch} = useContext(Context)


    const navigate = useNavigate();

    const filteredData = useMemo(() => {
        if (state.term.length === 0) {
            return products
        }
        return products.filter(item => item.name.toLowerCase().indexOf(state.term) > -1)
    }, [state.term])

    return (

       <>
           {filteredData.map((item, index) => {


               const finding = filteredData.find(c => c.id === item.id)

               const check = finding ? finding.quantity : 0
               console.log(finding)
               return (
                   <div key={index} className={`w-[470px] ${check > 1 ? 'border border-yellow-500' : 'border border-gray-300'} sm:justify-start  transition-all ease-in duration-170 hover:scale-102 h-auto rounded-[20px]  gap-5 flex`}  >
                       <div className={'sm:justify-center'} onClick={() => navigate(`/detail/${item.id}`)}>
                           <img src={item.img} className={'rounded-[20px] h-[160px] w-[182px]'} alt=""/>
                       </div>
                       <div className={'pt-9'}>
                           <h3 className={'text-black font-[700] text-[23px] leading-6' }>{item.name}</h3>
                           <h5 className={'items-end font-[700] text-[17px] text-black pt-5 pl-30 flex'}>R.p  {item.price}</h5>
                           <Plus  onClick={() => dispatch({type: 'plus', payload: item})} className={'relative transition-all ease-in duration-170 active:scale-85 cursor-pointer hover:bg-[#d59c28] left-58 top-5 p-2 bg-[#FFA800] text-white rounded-[50%]'} size={35} />
                       </div>
                   </div>
               )
           })
           }
       </>

    );
};

export default FoodItem;