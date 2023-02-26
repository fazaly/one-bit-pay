import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className=''>
            <div className="w-full h-48 bg-[#5966FF] flex justify-center items-end p-4">
                <h1 className="text-3xl font-bold text-white text-center">
                    Terms & Conditions
                </h1>
            </div>
            <br/>
            <div className='p-10'>
                <p>Welcome to OneBitPay. These terms and conditions (the "Agreement") govern your use of the OneBitPay platform for financial transactions (the "Service"). Please read this Agreement carefully before using the Service.</p>
                <br/>
                <p>1. Acceptance of Terms</p>
                <p>By using the Service, you agree to be bound by this Agreement. If you do not agree to the terms of this Agreement, you may not use the Service.</p>
                <br/>
                <p>2. Registration</p>
                <p>To use the Service, you must register and create an account. You must provide accurate and complete information when you register. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
                <br/>
                <p>3. Financial Transactions</p>
                <p>The Service allows you to send and receive payments and other financial transactions. You are solely responsible for all financial transactions that occur through your account. OneBitPay is not responsible for any losses or damages that may occur as a result of any financial transactions conducted through the Service.</p>
                <br/>
                <p>4. Fees</p>
                <p>OneBitPay charges fees for certain transactions, as described on the OneBitPay website. By using the Service, you agree to pay all fees associated with your use of the Service.</p>
                <br/>
                <p>5. User Conduct</p>
                <p>You agree to use the Service only for lawful purposes and in compliance with all applicable laws and regulations. You may not use the Service to conduct any fraudulent or illegal activities.</p>
                <br/>
                <p>6. Privacy</p>
                <p>OneBitPay collects and uses your personal information in accordance with its Privacy Policy, which is available on the OneBitPay website. By using the Service, you consent to the collection and use of your personal information as described in the Privacy Policy.</p>
                <br/>
                <p>7. Intellectual Property</p>
                <p>The Service, including all content and software, is the property of OneBitPay or its licensors and is protected by copyright and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without the express written permission of OneBitPay.</p>
                <br/>
                <p>8. Disclaimer of Warranties</p>
                <p>The Service is provided on an "as is" and "as available" basis. OneBitPay does not warrant that the Service will be uninterrupted or error-free, or that any defects in the Service will be corrected.</p>
                <br/>
                <p>9. Limitation of Liability</p>
                <p>OneBitPay will not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Service. This includes, without limitation, damages for lost profits, lost data, or business interruption.</p>
                <br/>
                <p>10. Modification of Agreement</p>
                <p>OneBitPay may modify this Agreement at any time. Any such modification will be effective immediately upon posting on the OneBitPay website. Your continued use of the Service after any modification to this Agreement constitutes your acceptance of the modified terms.</p>
                <br/>
                <p>11. Termination</p>
                <p>OneBitPay may terminate this Agreement and your access to the Service at any time, with or without cause.</p>
                <br/>
                <p>12. Governing Law</p>
                <p>This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which OneBitPay is located, without giving effect to any principles of conflicts of law.</p>
                <br/>
                <p>13. Entire Agreement</p>
                <p>This Agreement constitutes the entire agreement between you and OneBitPay with respect to the Service and supersedes all prior or contemporaneous communications and proposals, whether oral or written, between you and OneBitPay.</p>
                <br/>
                <p>If you have any questions or concerns about this Agreement, please contact us at <Link>support@onebitpay.com</Link></p>
            </div>
        </div>
    );
};

export default TermsAndConditions;