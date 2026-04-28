import React from 'react';
import FoodItem from '../Food/foodItem.jsx';

const Page1 = () => {
    return (
        <div className={'container_mobile'}>
            <div className={'flex justify-center gap-10 pt-17 flex-col'}>
                <FoodItem />
            </div>
        </div>
    );
};

export default Page1;
