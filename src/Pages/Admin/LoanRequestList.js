import React from 'react';
import { useGetLoanRequestListQuery } from '../../features/api/apiSlice';

const LoanRequestList = () => {
    const { data, isLoading, isSuccess, isError } = useGetLoanRequestListQuery();

    console.log(data)
    return (
        <div>
            <h2>Hello</h2>
        </div>
    );
};

export default LoanRequestList;