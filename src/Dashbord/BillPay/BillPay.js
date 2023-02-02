import React from 'react';
import BillCard from './BillCard';
import { FcElectricity, FcGraduationCap } from "react-icons/fc";
import { AiFillFire } from "react-icons/ai";
import { MdSignalWifi4Bar, MdWaterDrop } from "react-icons/md";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { AiFillInsurance, AiOutlineFileSearch } from "react-icons/ai";
import DPDC from '../../images/bill pay/DPDC.jpg';
import Jalalabad from '../../images/bill pay/Jalalabad.png';
import Lanka from '../../images/bill pay/Lanka.png';
import btcl from '../../images/bill pay/btcl.jpg';
import nesco from '../../images/bill pay/nesco.png';
import titas from '../../images/bill pay/titas.jpg';
import sonali from '../../images/bill pay/sonali.png';
import metlife from '../../images/bill pay/metlife.png';

const BillPay = () => {

    const AllBills = [
        {
            "id": 1,
            "icon": <AiFillFire className='text-red-600 w-6 h-6 mr-1'></AiFillFire>,
            "name": "Gas"
        },
        {
            "id": 2,
            "icon": <MdSignalWifi4Bar className='w-6 h-6 mr-1'></MdSignalWifi4Bar>,
            "name": "Internet"
        },
        {
            "id": 3,
            "icon": <FcElectricity className='text-gray-900 w-6 h-6'></FcElectricity>,
            "name": "Electricity"
        },
        {
            "id": 4,
            "icon": <MdWaterDrop className='w-6 h-6 mr-1'></MdWaterDrop>,
            "name": "Water"
        },
        {
            "id": 5,
            "icon": <FcGraduationCap className='w-6 h-6 mr-1'></FcGraduationCap>,
            "name": "Education"
        },
        {
            "id": 6,
            "icon": <AiFillInsurance className='w-6 h-6 mr-1'></AiFillInsurance>,
            "name": "Insurance"
        },
        {
            "id": 7,
            "icon": <FaPhoneAlt className='w-5 h-5 mr-1'></FaPhoneAlt>,
            "name": "Telephone"
        },
        {
            "id": 8,
            "icon": <FaHome className='w-6 h-6 mr-1 -mt-1'></FaHome>,
            "name": "Bank & FI"
        },
        {
            "id": 9,
            "icon": <AiOutlineFileSearch className='w-6 h-6 mr-1'></AiOutlineFileSearch>,
            "name": "Other"
        },

    ]


    return (
        <div>
            <div className='text-center mb-10'>
                <button className='btn text-2xl capitalize bg-[#5966FF] rounded border-none'>My Bills</button>
                <button className='btn text-2xl capitalize bg-[#5966FF] rounded border-none ml-10'>Receipts</button>
            </div>
            <div className="form-control w-full ">
                <label className="label">
                    <span className="label-text text-2xl">Biller</span>
                </label>
                <input
                    type="number"
                    type="text"
                    placeholder="Enter Biller Name or Biller Number"
                    className="input  w-full "
                    name="phoneNumber"
                />
            <div className="divider mt-0 mb-0"></div>
            </div>
            <button className='btn text-2xl capitalize bg-[#5966FF] rounded border-none'>Pay</button>
            <h3 className='text-2xl font-bold mb-6 mt-8'>Bill Type</h3>
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    AllBills?.map(bill => <BillCard key={bill.id} bill={bill}></BillCard>)
                }
            </div>
            <div className='mt-16'>
                <div className='flex'>
                    <img className='w-25 h-16' src={DPDC} alt="" />
                    <div>
                        <h3 className='text-2xl'>DPDC</h3>
                        <h3 className='text-2xl'>1014</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='w-25 h-16 ml-6 mr-5' src={Jalalabad} alt="" />
                    <div>
                        <h3 className='text-2xl'>JALALABAD GAS</h3>
                        <h3 className='text-2xl'>1017</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded w-20 h-20 ml-4 mr-3' src={Lanka} alt="" />
                    <div>
                        <h3 className='text-2xl'>LankaBangla Card</h3>
                        <h3 className='text-2xl'>1022</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='w-20 h-20 ml-4 mr-3' src={btcl} alt="" />
                    <div>
                        <h3 className='text-2xl'>BTCL Domain</h3>
                        <h3 className='text-2xl'>1004</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='w-25 h-20 ml-4 mr-3' src={nesco} alt="" />
                    <div>
                        <h3 className='text-2xl'>NESCO Postpaid</h3>
                        <h3 className='text-2xl'>1041</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='w-25 h-20 ml-4 mr-3' src={titas} alt="" />
                    <div>
                        <h3 className='text-2xl'>Titas Gas Non Metered Demand Note</h3>
                        <h3 className='text-2xl'>1019</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='w-25 h-20 ml-4 mr-3' src={sonali} alt="" />
                    <div>
                        <h3 className='text-2xl'>Sonali Life Insurance Co Ltd</h3>
                        <h3 className='text-2xl'>1021</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='w-25 h-20 ml-4 mr-3' src={nesco} alt="" />
                    <div>
                        <h3 className='text-2xl'>NESCO Prepaid</h3>
                        <h3 className='text-2xl'>1076</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded w-20 h-20 ml-4 mr-3' src={Lanka} alt="" />
                    <div>
                        <h3 className='text-2xl'>LankaBangla Loan</h3>
                        <h3 className='text-2xl'>1023</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded w-25 h-20 -mr-5' src={metlife} alt="" />
                    <div>
                        <h3 className='text-2xl'>MetLife</h3>
                        <h3 className='text-2xl'>1099</h3>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        </div>
    );
};

export default BillPay;