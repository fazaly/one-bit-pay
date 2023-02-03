import React from 'react';

const CompaniesCard = ({company}) => {
    return (
        <div>
            <div className='flex mt-5'>
                <img className='w-16 h-16 mr-6 mb-4 rounded-full' src={company.image} alt="" />
                <div>
                    <h3 className='text-2xl'>{company.name}</h3>
                    <h3 className='text-2xl'>{company.code}</h3>
                </div>
            </div>
        </div>
    );
};

export default CompaniesCard;