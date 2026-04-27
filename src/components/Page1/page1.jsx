import React from 'react';
import FoodItem from "../Food/foodItem.jsx";
import {Link} from 'react-router-dom'

const Page1 = () => {
    return (
       <div className={"container_mobile"}>
           <div className={"flex justify-center gap-10 flex-col"}>
               <FoodItem />
           </div>
       </div>
    );
};

export default Page1;