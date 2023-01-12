import React from 'react';
import './FinancialSolutionsCard.css'

const FinancialSolutionsCard = ({ FSData }) => {
    const { title, text, img } = FSData;

    return (
        <div>
            <div className="card servicesCard lg:w-[18vw] hover:brightness-95 relative hover:border-l-[1px] hover:border-b-[1px] hover:border-orange-500 h-[350px]  hover:transition-colors cursor-pointer  
            bg-base-100 shadow-lg hover:shadow-xl">
                <figure className="h-40">
                    <img src={img} alt="Shoes" className="rounded-xl px-2 pt-2 w-full h-full " />
                </figure>
                <div className="card-body items-center h-60 text-center">
                    <h2 className="card-title text-xl font-semibold">{title}</h2>
                    <p>{text}</p>
                    <div className="card-actions absolute bottom-4">
                        <p className='cursor-pointer text-red-600'>Learn More</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialSolutionsCard;