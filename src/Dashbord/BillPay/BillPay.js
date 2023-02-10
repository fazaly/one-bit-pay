import React from 'react';
import BillCard from './BillCard';
import { Link } from 'react-router-dom';
import CompaniesCard from './CompaniesCard';
import { useSelector } from 'react-redux';
import { useBillCategoriesQuery, useBillCategoryQuery } from '../../features/api/apiSlice';

const BillPay = () => {

    const {data: billCategory} = useBillCategoriesQuery();
    // console.log(billCategory);
    const billCategories = useSelector((state) => state.currentUser.category);
    // console.log(billCategories);

    const {data: allCompanies} = useBillCategoryQuery(billCategories);
    // console.log(allCompanies);

    const AllBills = [
        {
            "category_id": "electricity",
            "image": "https://i.ibb.co/2sGC94f/icons8-quick-mode-on-48.png",
            "name": "Electricity"
        },
        {
            "category_id": "gas",
            "image": "https://i.ibb.co/T8Dz86Y/icons8-gas-48.png",
            "name": "Gas"
        },
        {
            "category_id": "internet",
            "image": "https://i.ibb.co/mvjpm5L/icons8-globe-with-meridians-48.png",
            "name": "Internet"
        },
        {
            "category_id": "water",
            "image": "https://i.ibb.co/PxRBKNK/icons8-wet-48.png",
            "name": "Water"
        },
        {
            "category_id": "education",
            "image": "https://i.ibb.co/ctPP3BJ/icons8-teaching-48.png",
            "name": "Education"
        },
        {
            "category_id": "insurance",
            "image": "https://i.ibb.co/dt7szw3/insurance.png",
            "name": "Insurance"
        },
        {
            "category_id": "telephone",
            "image": "https://i.ibb.co/CzpKFRV/telephone.png",
            "name": "Telephone"
        },
        {
            "category_id": "bank & fi",
            "image": "https://i.ibb.co/1m2VDtG/bank.png",
            "name": "Bank & FI"
        },
        {
            "category_id": "other",
            "image": "https://i.ibb.co/s3N9xqp/menu.png",
            "name": "Other"
        },
    ]

    // all companies full documents
    const AllCompanies = [
        {
            "category_id": "electricity",
            "email": "dpdc@gmail.com",
            "image": "https://i.ibb.co/hf6WPbK/DPDC.jpg",
            "name": "DPDC",
            "code": "1014",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "gas",
            "email": "jalalabad@gmail.com",
            "image": "https://i.ibb.co/S0RVQs7/Jalalabad.png",
            "name": "JALALABAD GAS",
            "code": "1017",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "bank & fi",
            "email": "lankabangla@gmail.com",
            "image": "https://i.ibb.co/5xX9m21/Lanka.png",
            "name": "LankaBangla Card",
            "code": "1022",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "telephone",
            "email": "btcl@gmail.com",
            "image": "https://i.ibb.co/hfqVh8z/btcl.jpg",
            "name": "BTCL Domain",
            "code": "1004",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "electricity",
            "email": "nescopo@gmail.com",
            "image": "https://i.ibb.co/sjCF4R6/nesco.png",
            "name": "NESCO Postpaid",
            "code": "1041",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "gas",
            "email": "titasgas@gmail.com",
            "image": "https://i.ibb.co/8mwvB9D/titas.jpg",
            "name": "Titas Gas Non Metered Demand Note",
            "code": "1019",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "insurance",
            "email": "sonalilife@gmail.com",
            "image": "https://i.ibb.co/hKsvff2/sonali.png",
            "name": "Sonali Life Insurance Co Ltd",
            "code": "1021",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "electricity",
            "email": "nescopre@gmail.com",
            "image": "https://i.ibb.co/sjCF4R6/nesco.png",
            "name": "NESCO Prepaid",
            "code": "1076",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "bank & fi",
            "email": "lankabanglaloan@gmail.com",
            "image": "https://i.ibb.co/5xX9m21/Lanka.png",
            "name": "LankaBangla Loan",
            "code": "1023",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "insurance",
            "email": "metlife@gmail.com",
            "image": "https://i.ibb.co/Jvygg63/metlife.png",
            "name": "MetLife",
            "code": "1099",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "gas",
            "email": "bakhrabad@gmail.com",
            "image": "https://i.ibb.co/fqHhypg/bakhrabad.jpg",
            "name": "BAKHRABAD GAS",
            "code": "1083",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "internet",
            "email": "triangle@gmail.com",
            "image": "https://i.ibb.co/6HffBXq/triangle.jpg",
            "name": "Triangle",
            "code": "1028",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "internet",
            "email": "amberit@gmail.com",
            "image": "https://i.ibb.co/gzMN60H/amber.png",
            "name": "Amber IT Internet Bill Payment",
            "code": "1027",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "internet",
            "email": "samonline@gmail.com",
            "image": "https://i.ibb.co/pxnfyVN/samonline.jpg",
            "name": "Sam Online",
            "code": "1032",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "water",
            "email": "dhakawasa@gmail.com",
            "image": "https://i.ibb.co/GHZXLtV/dhaka-wasa.jpg",
            "name": "DHAKA WASA",
            "code": "1134",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "water",
            "email": "chattogramwasa@gmail.com",
            "image": "https://i.ibb.co/y4R6WCH/ctg-wasa.png",
            "name": "Chattogram WASA",
            "code": "1127",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "water",
            "email": "khulnamwasa@gmail.com",
            "image": "https://i.ibb.co/59PdWPy/khulna-wasa.jpg",
            "name": "KHULNA WASA METERED",
            "code": "1176",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "telephone",
            "email": "btclphone@gmail.com",
            "image": "https://i.ibb.co/hfqVh8z/btcl.jpg",
            "name": "BTCL Phone",
            "code": "1245",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "telephone",
            "email": "agnitalk@gmail.com",
            "image": "https://i.ibb.co/LNX9RGb/agni.jpg",
            "name": "Agni Talk",
            "code": "1407",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "education",
            "email": "bmet@gmail.com",
            "image": "https://i.ibb.co/4mbc7X8/bmet.jpg",
            "name": "BMET",
            "code": "1007",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "education",
            "email": "motijheel@gmail.com",
            "image": "https://i.ibb.co/m099Gzn/motijheel.png",
            "name": "Motijheel Govt Girls High School",
            "code": "1117",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "education",
            "email": "government@gmail.com",
            "image": "https://i.ibb.co/jrfc3fh/government.jpg",
            "name": "Government Science High School",
            "code": "1118",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "bank & fi",
            "email": "bangladeshfinance@gmail.com",
            "image": "https://i.ibb.co/L8hSSWK/bd-Finance.png",
            "name": "Bangladesh Finance Loan",
            "code": "1241",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "insurance",
            "email": "rupalilife@gmail.com",
            "image": "https://i.ibb.co/G9z9bK8/rupali.jpg",
            "name": "Rupali Life Insurance",
            "code": "1075",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "other",
            "email": "obhai@gmail.com",
            "image": "https://i.ibb.co/gj02LtM/obhai.png",
            "name": "Obhai VTS",
            "code": "1098",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "other",
            "email": "dpdchr@gmail.com",
            "image": "https://i.ibb.co/hf6WPbK/DPDC.jpg",
            "name": "DPDC HR",
            "code": "1101",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
        },
        {
            "category_id": "other",
            "email": "jashore@gmail.com",
            "image": "https://i.ibb.co/nzjR3b0/jashor.png",
            "name": "Jashore Pourashava",
            "code": "1159",
            "balance": 0,
            "slots":
            [
                "January-2023",
                "February-2023",
                "March-2023",
                "April-2023",
                "May-2023",
                "June-2023",
                "July-2023",
                "August-2023",
                "September-2023",
                "October-2023",
                "November-2023",
                "December-2023"
            ]
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
                    billCategory?.map(bill => <BillCard key={bill.id} bill={bill}></BillCard>)
                }
            </div>
            <div className='mt-16'>
                {
                    allCompanies?.map(company => <CompaniesCard
                        key={company.id} 
                        company={company}
                    ></CompaniesCard>)
                }
            </div>
        </div>
    );
};
export default BillPay;