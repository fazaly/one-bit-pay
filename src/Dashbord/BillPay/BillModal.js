import React from 'react';
import { toast } from 'react-hot-toast';

const BillModal = ({company, setPayBill, payBill}) => {

    const handleBooking = (e) =>{
        e.preventDefault();

        const form = e.target;
        const slot = form.slot.value;
        const email = form.email.value;
        const amount = form.amount.value;

        // console.log(slot, email, amount);

        const billing = {
            billing_Date: slot,
            customer_Id: email,
            billing_Amount: amount
        }
        // console.log(billing);
        fetch('http://localhost:5000/billing', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(billing)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setPayBill(null);
                    toast.success('Billing Completed');
                }
                else{
                    toast.error(data.message);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="bill-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label onClick={() => setPayBill(null)} htmlFor="bill-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex mt-5'>
                        <img className='w-16 h-16 mr-6 mb-4 rounded-full cursor-pointer' src={company.image} alt="" />
                        <div className='cursor-pointer'>
                            <h3 className='text-2xl'>{company.name}</h3>
                            <h3 className='text-2xl'>{company.code}</h3>
                        </div>
                    </div>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="Email" className="block dark:text-gray-400">Customer Email</label>
                                <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-700 text-gray-900 focus:dark:border-violet-400" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="monthBill" className="block dark:text-gray-400">Month of Bill</label>
                                <select name="slot" className="select select-bordered w-full">
                                {
                                    company.slots.map((slot, i) => <option
                                        value={slot}
                                        key={i}
                                    >{slot}</option>)
                                }
                                </select>
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="billAmmount" className="block dark:text-gray-400">Bill Amount</label>
                                <input type="text" name="amount" placeholder="Amount" className="w-full px-4 py-3 rounded-md dark:border-gray-700 text-gray-900 focus:dark:border-violet-400" />
                            </div>
                            <br />
                            <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                    {/* <div className="modal-action">
                        <label onClick={handlePay} htmlFor="bill-modal" className="btn">Pay</label>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BillModal;