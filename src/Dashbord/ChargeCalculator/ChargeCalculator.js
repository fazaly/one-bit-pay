import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb";

const ChargeCalculator = () => {

    const [charge,setCharge]=useState("")
    const [dataCalculation,setDataCalculation]= useState("")

    const handleChargeCalculation = e=>{
        e.preventDefault();
        const form = e.target
        const amount = form.amount.value;
        const calculation = amount * 1.3/100;
        setDataCalculation(calculation)

    }

    const allCharges = [
        {
            "id": 1,
            "category_id":"No Charge",
            "slots":
            [
                "Cash In",
                "Moibile Recharge",
                "Bill Pay",
                "Marchant Pay",
                "Donation",
                "Loan Request",
                "Cash Out"
            ]
        },
        {
            "id": 2,
            "category_id":"Charge",
            "slots":
            [
                "Cash In",
                "Moibile Recharge",
                "Bill Pay",
                "Marchant Pay",
                "Donation",
                "Loan Request",
                "Cash Out"
            ]
        }
    ]

    return (
        <div>
            <h3 className='text-3xl text-center mt-8 mb-8'>Calculate the charge with Tariff Calculator</h3>
            <div className='grid grid-cols-1 lg: grid-cols-2 md:grid-cols-2 mx-3 border rounded-xl shadow-lg p-10 shadow-slate-600'>
                <Form onSubmit={handleChargeCalculation} className='grid grid-cols-1 gap-6 mt-10 rounded-xl'>
                    <div className="space-y-5 text-xl">
                        <label htmlFor="monthBill" className="block font-semibold dark:text-gray-400">Services</label>
                        <select  onChange={(e)=>setCharge(e.target.value)} name="slot" className="select select-bordered w-full focus:dark:border-violet-400 rounded-md dark:border-gray-700 text-gray-900 text-lg">
                            <option disabled selected>Select  Service</option>
                                {
                                    allCharges[0].slots.map((slot, i) => <option
                                        value={slot}
                                        key={i}
                                    >{slot}</option>)
                                }
                        </select>
                        <div className="space-y-5 text-xl">
                                <label htmlFor="billAmmount" className="block font-semibold dark:text-gray-400">Calculate</label>
                                <input type="number" name="amount" placeholder="Numeric input Box" className="w-full px-4 py-3 rounded-md dark:border-gray-700 text-gray-900 focus:dark:border-violet-400" />
                        </div>
                        <input className='btn btn-accent text-lg rounded-lg' type="submit" value="Calculate" />
                    </div>
                </Form>
                
                <div>
                { charge === "Cash Out" ? 
                    <>
                       <div className='text-center flex flex-col justify-center item-center'>
                            <h3 className='text-3xl font-semibold mt-10 mb-5'>Calculation Result</h3>
                            <h3 className='text-5xl text-center font-bold mb-5 flex justify-center item-center'><TbCurrencyTaka></TbCurrencyTaka> {dataCalculation?dataCalculation:""}</h3>
                            <p className='text-lg font-lg mb-5 mx-10'>Cash Out charge is BDT 15 per BDT 1000 This charge will be automatically deducted from your Nagad account; no cash charge applicable.</p>
                        </div>
                    </>
                    :
                    <>
                        <div className='text-center flex flex-col justify-center item-center'>
                            <h3 className='text-3xl font-semibold mt-10 mb-5'>{charge ? "Calculation result" :"Calculation result will be showed"}</h3>
                            <h3 className='text-5xl font-bold mb-5'>{charge?"free":""}</h3>
                            <p className='text-lg font-lg mb-5 flex justify-center item-center'>{charge?"No charge applicable.":<TbCurrencyTaka className='text-5xl'></TbCurrencyTaka> }</p>
                        </div>
                    </>}
                </div>
            </div>
        </div>

    );
};

export default ChargeCalculator;