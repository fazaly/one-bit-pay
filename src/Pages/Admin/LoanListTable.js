import React from 'react';
import { Link } from 'react-router-dom';

const LoanListTable = ({ loanList }) => {
    return (
        <tr className="text-gray-700">
            <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                    <div>
                        <p className="font-semibold text-black">{loanList?.name}</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold  rounded-sm">{loanList?.email} </span>
            </td>
            {loanList?.loanRequest === "accepted" ?
                <>
                    <td className="px-4 py-3 text-md font-semibold border text-green-400"><span className=' leading-tight  bg-gray-100'>approved</span></td>
                </>
                :
                <td className="px-4 py-3 text-md font-semibold border text-yellow-400"><span className=' leading-tight  bg-gray-100'>Pending</span></td>

            }

            <td className="px-4 py-3 text-sm border">
                {loanList?.loanRequest === "accepted" ?
                    <>
                        <p>approved</p>
                    </>
                    :
                    <Link to={`/dashboard/loanRequestDetails/${loanList._id}`} className='btn btn-sm btn-[#070733]'>Details</Link>

                }

            </td>
        </tr>
    );
};

export default LoanListTable;