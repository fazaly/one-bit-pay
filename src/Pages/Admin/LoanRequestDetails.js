import React from 'react';
import { useLoaderData } from 'react-router-dom';
import'./LoanRequestDetails.css';

const LoanRequestDetails = () => {
    const info = useLoaderData();
    console.log(info);

    const {name, address, anoualIncome, birthDate, desireAmount, duration, email, gender, nidNumber, phnNumber, profession, reasonForLoan} = info;

    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>Loan Request Details</h2>
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
           
            <div className='text-right mt-12'>
                <button className='btn bg-transparent text-black mr-6 hover:bg-red-500 hover:border-0'> Cancel Request</button>
                <button className='btn bg-black border-0 hover:bg-[#5966FF]'>Accept Loan Request</button>
            </div>
            </div>
        </div>
    );
};

export default LoanRequestDetails;