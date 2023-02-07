import React from 'react';
import BillCard from './BillCard';
import { FcElectricity, FcGraduationCap } from "react-icons/fc";
import { AiFillFire } from "react-icons/ai";
import { MdSignalWifi4Bar, MdWaterDrop } from "react-icons/md";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { AiFillInsurance, AiOutlineFileSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
import CompaniesCard from './CompaniesCard';

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

    // all companies full documents
    const AllCompanies = [
        {
            "id": 1,
            "email": "dpdc@gmail.com",
            "image": 'https://i.ibb.co/hf6WPbK/DPDC.jpg',
            "name": "DPDC",
            "code": "1014"
        },
        {
            "id": 2,
            "email": "jalalabad@gmail.com",
            "image": 'https://i.ibb.co/S0RVQs7/Jalalabad.png',
            "name": "JALALABAD GAS",
            "code": "1017"
        },
        {
            "id": 3,
            "email": "lankabangla@gmail.com",
            "image": 'https://i.ibb.co/5xX9m21/Lanka.png',
            "name": "LankaBangla Card",
            "code": "1022"
        },
        {
            "id": 4,
            "email": "btcl@gmail.com",
            "image": 'https://i.ibb.co/hfqVh8z/btcl.jpg',
            "name": "BTCL Domain",
            "code": "1004"
        },
        {
            "id": 5,
            "email": "nescopo@gmail.com",
            "image": 'https://i.ibb.co/sjCF4R6/nesco.png',
            "name": "NESCO Postpaid",
            "code": "1041"
        },
        {
            "id": 6,
            "email": "titasgas@gmail.com",
            "image": 'https://i.ibb.co/8mwvB9D/titas.jpg',
            "name": "Titas Gas Non Metered Demand Note",
            "code": "1019"
        },
        {
            "id": 7,
            "email": "sonalilife@gmail.com",
            "image": 'https://i.ibb.co/hKsvff2/sonali.png',
            "name": "Sonali Life Insurance Co Ltd",
            "code": "1021"
        },
        {
            "id": 8,
            "email": "nescopre@gmail.com",
            "image": 'https://i.ibb.co/sjCF4R6/nesco.png',
            "name": "NESCO Prepaid",
            "code": "1076"
        },
        {
            "id": 9,
            "email": "lankabanglaloan@gmail.com",
            "image": 'https://i.ibb.co/5xX9m21/Lanka.png',
            "name": "LankaBangla Loan",
            "code": "1023"
        },
        {
            "id": 10,
            "email": "metlife@gmail.com",
            "image": 'https://i.ibb.co/Jvygg63/metlife.png',
            "name": "MetLife",
            "code": "1099"
        },
        {
            "id": 11,
            "email": "bakhrabad@gmail.com",
            "image": 'https://i.ibb.co/fqHhypg/bakhrabad.jpg',
            "name": "BAKHRABAD GAS",
            "code": "1083"
        },
        {
            "id": 12,
            "email": "triangle@gmail.com",
            "image": 'https://i.ibb.co/6HffBXq/triangle.jpg',
            "name": "Triangle",
            "code": "1028"
        },
        {
            "id": 13,
            "email": "amberit@gmail.com",
            "image": 'https://i.ibb.co/gzMN60H/amber.png',
            "name": "Amber IT Internet Bill Payment",
            "code": "1027"
        },
        {
            "id": 14,
            "email": "samonline@gmail.com",
            "image": 'https://i.ibb.co/pxnfyVN/samonline.jpg',
            "name": "Sam Online",
            "code": "1032"
        },
        {
            "id": 15,
            "email": "dhakawasa@gmail.com",
            "image": 'https://i.ibb.co/GHZXLtV/dhaka-wasa.jpg',
            "name": "DHAKA WASA",
            "code": "1134"
        },
        {
            "id": 16,
            "email": "chattogramwasa@gmail.com",
            "image": 'https://i.ibb.co/y4R6WCH/ctg-wasa.png',
            "name": "Chattogram WASA",
            "code": "1127"
        },
        {
            "id": 17,
            "email": "khulnamwasa@gmail.com",
            "image": 'https://i.ibb.co/59PdWPy/khulna-wasa.jpg',
            "name": "KHULNA WASA METERED",
            "code": "1176"
        },
        {
            "id": 18,
            "email": "btclphone@gmail.com",
            "image": 'https://i.ibb.co/hfqVh8z/btcl.jpg',
            "name": "BTCL Phone",
            "code": "1245"
        },
        {
            "id": 19,
            "email": "agnitalk@gmail.com",
            "image": 'https://i.ibb.co/LNX9RGb/agni.jpg',
            "name": "Agni Talk",
            "code": "1407"
        },
        {
            "id": 20,
            "email": "bmet@gmail.com",
            "image": 'https://i.ibb.co/4mbc7X8/bmet.jpg',
            "name": "BMET",
            "code": "1007"
        },
        {
            "id": 21,
            "email": "motijheel@gmail.com",
            "image": 'https://i.ibb.co/m099Gzn/motijheel.png',
            "name": "Motijheel Govt Girls High School",
            "code": "1117"
        },
        {
            "id": 22,
            "email": "government@gmail.com",
            "image": 'https://i.ibb.co/jrfc3fh/government.jpg',
            "name": "Government Science High School",
            "code": "1118"
        },
        {
            "id": 23,
            "email": "bangladeshfinance@gmail.com",
            "image": 'https://i.ibb.co/L8hSSWK/bd-Finance.png',
            "name": "Bangladesh Finance Loan",
            "code": "1241"
        },
        {
            "id": 23,
            "email": "rupalilife@gmail.com",
            "image": 'https://i.ibb.co/G9z9bK8/rupali.jpg',
            "name": "Rupali Life Insurance",
            "code": "1075"
        },
        {
            "id": 24,
            "email": "obhai@gmail.com",
            "image": 'https://i.ibb.co/gj02LtM/obhai.png',
            "name": "Obhai VTS",
            "code": "1098"
        },
        {
            "id": 25,
            "email": "dpdchr@gmail.com",
            "image": 'https://i.ibb.co/hf6WPbK/DPDC.jpg',
            "name": "DPDC HR",
            "code": "1101"
        },
        {
            "id": 26,
            "email": "jashore@gmail.com",
            "image": 'https://i.ibb.co/nzjR3b0/jashor.png',
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
                {
                    AllCompanies?.map(company => <CompaniesCard
                        key={company.id} 
                        company={company}
                    ></CompaniesCard>)
                }
            </div>
        </div>
    );
};
export default BillPay;