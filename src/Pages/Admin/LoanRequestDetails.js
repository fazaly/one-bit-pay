import React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ButtonSpinner from '../../Components/ButtonSpinner/ButtonSpinner';
import { useApproveLoanMutation, useDeleteLoanRequestMutation } from '../../features/api/apiSlice';
import './LoanRequestDetails.css';

const LoanRequestDetails = () => {
    const info = useLoaderData();
    const { name, address, anoualIncome, birthDate, desireAmount, duration, email, gender, nidNumber, phnNumber, profession, reasonForLoan, _id, loanRequest } = info;

    const loanInfo = {
        receiverEmail: email,
        amount: desireAmount
    }

    const [approveLoan, { isLoading, isSuccess, isError }] = useApproveLoanMutation();
    const [deleteLoanRequest,] = useDeleteLoanRequestMutation();
    useEffect(() => {
        if (isSuccess) {
            toast.success("Approved Loan", {
                id: "loanRequ",
            });
        }
        if (!isSuccess && isError) {
            toast.error("Failed to approved! Please try again", {
                id: "loanRequ",
            });
        }
    }, [isSuccess, isError]);



    return (
        <div>
            <div className='flex items-center justify-center gap-14'>

                <Link to="/dashboard/loanRequestList" className=' '>
                    <FaArrowCircleLeft className='text-3xl'></FaArrowCircleLeft>
                </Link>
                <h2 className='text-3xl font-bold text-center'>Loan Request Details</h2>
            </div>
            <div className='rounded-xl border p-12 m-6 details'>
                <table className="table w-full">
                    <tr>
                        <td>Name:</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Gender:</td>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <td>NID No:</td>
                        <td>{nidNumber}</td>
                    </tr>
                    <tr>
                        <td>Phone No:</td>
                        <td>{phnNumber}</td>
                    </tr>
                    <tr>
                        <td>Occupation:</td>
                        <td>{profession}</td>
                    </tr>
                    <tr>
                        <td>Birth Date:</td>
                        <td>{birthDate}</td>
                    </tr>
                    <tr>
                        <td>Reason For Loan:</td>
                        <td>{reasonForLoan}</td>
                    </tr>
                    <tr>
                        <td>Annual Income:</td>
                        <td>{anoualIncome}$</td>
                    </tr>
                    <tr>
                        <td>Amount Requested:</td>
                        <td>{desireAmount}$</td>
                    </tr>
                    <tr>
                        <td>Duration:</td>
                        <td>{duration}mos</td>
                    </tr>

                </table>


                {
                    loanRequest === "accepted" || isSuccess ?
                        <div className='flex justify-center'>
                            <span className='text-center text-green-400 mt-4 font-bold bg-green-100 rounded-lg p-3 '>Approved</span>
                        </div>
                        :
                        <div className='text-right mt-12'>
                            <button onClick={() => deleteLoanRequest(_id)} className='btn bg-transparent text-black mr-6 hover:bg-red-500 hover:border-0'>

                                Cancel Request</button>
                            <button onClick={() => approveLoan(loanInfo)} className='btn bg-black border-0 hover:bg-[#5966FF]'>{isLoading ? <ButtonSpinner /> : "Accecpt Loan Request"}</button>
                        </div>

                }


            </div>
        </div>
    );
};

export default LoanRequestDetails;