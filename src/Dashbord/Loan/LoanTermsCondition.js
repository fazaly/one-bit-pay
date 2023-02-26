import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

const LoanTermsCondition = () => {
    return (
        <div>
            <div
                id="user"
                className='mb-10  text-slate-600 px-16 py-8 w-full'>
                <h3 className="text-3xl font-bold">Loan</h3>
                <h2 className='mt-2'>Getting a small, quick loan is now easier than ever! The BitPay Bank is introducing instant Digital Loan for OneBitPay users without requiring any paperwork.</h2>
                <h2 className='text-2xl font-medium mt-5'>Why should you get the BitPay Bank loan through OneBitPay?</h2>
                <ol className='mt-2'>
                    <li className='ml-10 list-disc'>Apply and receive loan instantly</li>
                    <li className='ml-10 list-disc'>3 months’ short-term loan</li>
                    <li className='ml-10 list-disc'>No bank account or security required</li>
                    <li className='ml-10 list-disc'>No paperwork required</li>
                    <li className='ml-10 list-disc'>Auto installment payment facility from account balance</li>
                    <li className='ml-10 list-disc'>Bank processing fee on loan is 0.575% (0.5% + VAT)</li>
                </ol>
                <h2 className='text-2xl font-semibold mt-10 mb-2'>Loan Details</h2>
                <p>Eligible OneBitPay users can now take a loan from the BitPay Bank ranging from BDT 500 to BDT 20,000. The loan will be credited to the user’s bKash account, and the user will be able to withdraw the money from their OneBitPay account.</p>
                <p>As per the regulations of Bangladesh Bank, a 9% per annum interest rate will be applicable on the amount of the loan. </p>

                <h2 className='text-2xl font-semibold mt-10 mb-2'>Loan Payback Details</h2>
                <p>While applying for the loan and at the Loan dashboard (after he/she receives the loan), the user can see the repayment amount and date. The loan repayment amount will be automatically deducted from the user’s OneBitPay account on the due date. If the customer wants, s/he can repay the loan before the due date by her/himself, so that there is a chance of reduction in the interest amount.</p>
                <p>If the user does not have the required balance in their OneBitPay account, and the loan is not repaid by the user on the due date, then a late penalty of 2% per annum will be applicable.</p>

                <h2 className='text-2xl font-semibold mt-10 mb-2'>Loan Eligibility Criteria </h2>
                <p>The City Bank will be offering the digital loan service to a selected group of OneBitPay users in line with Bangladesh Bank regulations. You can find out whether you are eligible or not through the “Loan” option of your OneBitPay. The interest rate, processing fee, loan limit, repayment terms, loan eligibility, and credit policy are determined by the City Bank in accordance with the regulations of Bangladesh Bank.</p>

                <p className='mt-10'> <Link to="/dashboard/loanRequest"><BsArrowLeftShort className='text-3xl text-blue-600' /></Link></p>
            </div>
        </div>
    );
};

export default LoanTermsCondition;