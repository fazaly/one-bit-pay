import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory_id } from '../../features/api/courrentUserSlice';

const BillCard = ({ bill }) => {

    const dispatch = useDispatch();

    return (
        <div className='min-w-'>
            <button onClick={() => dispatch(setCategory_id(bill.category_id))} type='submit' className='btn w-full btn-outline capitalize font-bold text-xl text-gray-900 opacity-50'>
                <img className='w-[30px] h-[30px] mr-1' src={bill.image}></img>
                <span>{bill.name}</span>
            </button>
        </div>
    );
};

export default BillCard;