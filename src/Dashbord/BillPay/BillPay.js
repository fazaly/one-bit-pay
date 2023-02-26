import React from 'react';
import BillCard from './BillCard';
import { Link } from 'react-router-dom';
import CompaniesCard from './CompaniesCard';
import { useSelector } from 'react-redux';
import { useBillCategoriesQuery, useBillCategoryQuery } from '../../features/api/apiSlice';

const BillPay = () => {
    const { data: billCategory } = useBillCategoriesQuery();
    const billCategories = useSelector((state) => state.currentUser.category);
    const { data: allCompanies } = useBillCategoryQuery(billCategories);

    return (
        <div>
            <div className='text-center mb-10'>
                <Link to='/dashboard/billPay/myBills'>
                    <button className='btn text-2xl capitalize bg-[#5966FF] rounded border-none'>My Bills</button>
                </Link>
                <Link to='/dashboard/billPay/allReceipts'>
                    <button className='btn text-2xl capitalize bg-[#5966FF] rounded border-none ml-10'>Receipts</button>
                </Link>
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text text-2xl">Biller</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter Biller Name or Biller Number"
                    className="input  w-full "
                    name="phoneNumber"
                />
                <div className="divider mt-0 mb-0"></div>
            </div>
            <h3 className='text-2xl font-bold mb-6 mt-8'>Bill Type</h3>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    billCategory?.map(bill => <BillCard key={bill.id} bill={bill}></BillCard>)
                }
            </div>
            <div className='mt-16'>
                {
                    allCompanies?.map(company => <CompaniesCard
                        key={company.id}
                        company={company}
                    ></CompaniesCard>)
                }
            </div>
        </div>
    );
};
export default BillPay;