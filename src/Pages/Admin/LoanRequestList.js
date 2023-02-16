import React from 'react';
import { useGetLoanRequestListQuery } from '../../features/api/apiSlice';
import LoanListTable from './LoanListTable';

const LoanRequestList = () => {
    const { data, isLoading, isSuccess, isError } = useGetLoanRequestListQuery();

    console.log(data)
    return (
        <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">

                            {isSuccess &&
                                data?.map(loanList => <LoanListTable key={loanList?._d} loanList={loanList}></LoanListTable>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default LoanRequestList;