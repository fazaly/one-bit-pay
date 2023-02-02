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
import bakhrabad from '../../images/bill pay/bakhrabad.jpg';
import triangle from '../../images/bill pay/triangle.jpg';
import amber from '../../images/bill pay/amber.png';
import sam from '../../images/bill pay/samonline.jpg';
import dhaka from '../../images/bill pay/dhaka-wasa.jpg';
import ctg from '../../images/bill pay/ctg-wasa.png';
import khulna from '../../images/bill pay/khulna-wasa.jpg';
import agni from '../../images/bill pay/agni.jpg';
import bmet from '../../images/bill pay/bmet.jpg';
import motijheel from '../../images/bill pay/motijheel.png';
import government from '../../images/bill pay/government.jpg';
import bangladesh from '../../images/bill pay/bdFinance.png';
import rupali from '../../images/bill pay/rupali.jpg';
import obhai from '../../images/bill pay/obhai.png';
import jashore from '../../images/bill pay/jashor.png';
import { Link } from 'react-router-dom';

const BillPay = () => {

    const AllBills = [
        {
            "id": 1,
            "icon": <FcElectricity className='text-gray-900 w-6 h-6'></FcElectricity>,
            "name": "Electricity"
        },
        {
            "id": 2,
            "icon": <AiFillFire className='text-red-600 w-6 h-6 mr-1'></AiFillFire>,
            "name": "Gas"
        },
        {
            "id": 3,
            "icon": <MdSignalWifi4Bar className='w-6 h-6 mr-1'></MdSignalWifi4Bar>,
            "name": "Internet"
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

    const AllCompanies = [
        {
            "id": 1,
            "email": "dpdc@gmail.com",
            "image": '',
            "name": "DPDC",
            "code": "1014"
        },
        {
            "id": 2,
            "email": "jalalabad@gmail.com",
            "image": '',
            "name": "JALALABAD GAS",
            "code": "1017"
        },
        {
            "id": 3,
            "email": "lankabangla@gmail.com",
            "image": '',
            "name": "LankaBangla Card",
            "code": "1022"
        },
        {
            "id": 4,
            "email": "btcl@gmail.com",
            "image": '',
            "name": "BTCL Domain",
            "code": "1004"
        },
        {
            "id": 5,
            "email": "nescopo@gmail.com",
            "image": '',
            "name": "NESCO Postpaid",
            "code": "1041"
        },
        {
            "id": 6,
            "email": "titasgas@gmail.com",
            "image": '',
            "name": "Titas Gas Non Metered Demand Note",
            "code": "1019"
        },
        {
            "id": 7,
            "email": "sonalilife@gmail.com",
            "image": '',
            "name": "Sonali Life Insurance Co Ltd",
            "code": "1021"
        },
        {
            "id": 8,
            "email": "nescopre@gmail.com",
            "image": '',
            "name": "NESCO Prepaid",
            "code": "1076"
        },
        {
            "id": 9,
            "email": "lankabanglaloan@gmail.com",
            "image": '',
            "name": "LankaBangla Loan",
            "code": "1023"
        },
        {
            "id": 10,
            "email": "metlife@gmail.com",
            "image": '',
            "name": "MetLife",
            "code": "1099"
        },
        {
            "id": 11,
            "email": "bakhrabad@gmail.com",
            "image": '',
            "name": "BAKHRABAD GAS",
            "code": "1083"
        },
        {
            "id": 12,
            "email": "triangle@gmail.com",
            "image": '',
            "name": "Triangle",
            "code": "1028"
        },
        {
            "id": 13,
            "email": "amberit@gmail.com",
            "image": '',
            "name": "Amber IT Internet Bill Payment",
            "code": "1027"
        },
        {
            "id": 14,
            "email": "samonline@gmail.com",
            "image": '',
            "name": "Sam Online",
            "code": "1032"
        },
        {
            "id": 15,
            "email": "dhakawasa@gmail.com",
            "image": '',
            "name": "DHAKA WASA",
            "code": "1134"
        },
        {
            "id": 16,
            "email": "chattogramwasa@gmail.com",
            "image": '',
            "name": "Chattogram WASA",
            "code": "1127"
        },
        {
            "id": 17,
            "email": "khulnamwasa@gmail.com",
            "image": '',
            "name": "KHULNA WASA METERED",
            "code": "1176"
        },
        {
            "id": 18,
            "email": "btclphone@gmail.com",
            "image": '',
            "name": "BTCL Phone",
            "code": "1245"
        },
        {
            "id": 19,
            "email": "agnitalk@gmail.com",
            "image": '',
            "name": "Agni Talk",
            "code": "1407"
        },
        {
            "id": 20,
            "email": "bmet@gmail.com",
            "image": '',
            "name": "BMET",
            "code": "1007"
        },
        {
            "id": 21,
            "email": "motijheel@gmail.com",
            "image": '',
            "name": "Motijheel Govt Girls High School",
            "code": "1117"
        },
        {
            "id": 22,
            "email": "government@gmail.com",
            "image": '',
            "name": "Government Science High School",
            "code": "1118"
        },
        {
            "id": 23,
            "email": "bangladeshfinance@gmail.com",
            "image": '',
            "name": "Bangladesh Finance Loan",
            "code": "1241"
        },
        {
            "id": 23,
            "email": "rupalilife@gmail.com",
            "image": '',
            "name": "Rupali Life Insurance",
            "code": "1075"
        },
        {
            "id": 24,
            "email": "obhai@gmail.com",
            "image": '',
            "name": "Obhai VTS",
            "code": "1098"
        },
        {
            "id": 25,
            "email": "dpdchr@gmail.com",
            "image": '',
            "name": "DPDC HR",
            "code": "1101"
        },
        {
            "id": 26,
            "email": "jashore@gmail.com",
            "image": '',
            "name": "Jashore Pourashava",
            "code": "1159"
        }
    ]


    return (
        <div>
            <div className='text-center mb-10'>
                <Link to='/dashboard/billPay/myBills'>
                    <button className='btn text-2xl capitalize bg-[#5966FF] rounded border-none'>My Bills</button>
                </Link>
                <Link to='/dashboard/billPay/allReceipts'>
                    <button className='btn text-2xl capitalize bg-[#5966FF] rounded border-none ml-10'>Receipts</button>
                </Link>
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
                    <img className='w-24 h-20 mr-3' src={sonali} alt="" />
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
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={bakhrabad} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>BAKHRABAD GAS</h3>
                        <h3 className='text-2xl'>1083</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={triangle} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>Triangle</h3>
                        <h3 className='text-2xl'>1028</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={amber} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>Amber IT Internet Bill Payment</h3>
                        <h3 className='text-2xl'>1027</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={sam} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>Sam Online</h3>
                        <h3 className='text-2xl'>1032</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={dhaka} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>DHAKA WASA</h3>
                        <h3 className='text-2xl'>1134</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={ctg} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>Chattogram WASA</h3>
                        <h3 className='text-2xl'>1127</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={khulna} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>KHULNA WASA METERED</h3>
                        <h3 className='text-2xl'>1176</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={btcl} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>BTCL Phone</h3>
                        <h3 className='text-2xl'>1245</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={agni} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>Agni Talk</h3>
                        <h3 className='text-2xl'>1407</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={bmet} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>BMET</h3>
                        <h3 className='text-2xl'>1007</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={motijheel} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>Motijheel Govt Girls High School</h3>
                        <h3 className='text-2xl'>1117</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={government} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>Government Science High School</h3>
                        <h3 className='text-2xl'>1118</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={bangladesh} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>Bangladesh Finance Loan</h3>
                        <h3 className='text-2xl'>1241</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={rupali} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>Rupali Life Insurance</h3>
                        <h3 className='text-2xl'>1075</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={obhai} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>Obhai VTS</h3>
                        <h3 className='text-2xl'>1098</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={DPDC} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>DPDC HR</h3>
                        <h3 className='text-2xl'>1101</h3>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex'>
                    <img className='rounded-lg w-16 h-16 ml-8' src={jashore} alt="" />
                    <div className='ml-4'>
                        <h3 className='text-2xl'>Jashore Pourashava</h3>
                        <h3 className='text-2xl'>1159</h3>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        </div>
    );
};

export default BillPay;