import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DonationCard from './DonationCard';
import DonationModal from './DonationModal';

const Donation = () => {
    const [institutes, setInstitutes] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/donations`)
            .then(res => res.json())
            .then(data => {
                setInstitutes(data)
            })


    }, [])
    // const institutes = [
    //     {
    //         "id": 1,
    //         "Name": "Bidda Nondo",
    //         "img": "https://gumlet.assettype.com/bdnews24-english%2Fimport%2Fmedia%2F2020%2F05%2F05%2Fbidyananda-foundation-program.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=732",
    //         "details": "Provide support to underprivileged section of the society specially extreme poor."
    //     }, {
    //         "id": 1,
    //         "Name": "Doridro Charity Foundation",
    //         "img": "https://dcf-bd.com/wp-content/uploads/2022/10/272989974_5347721891913523_6667780143830312094_n-843x439.jpg",
    //         "details": "Provide support to underprivileged section of the society specially extreme poor,."
    //     }, {
    //         "id": 1,
    //         "Name": "Its Humanity Foundation-IHF",
    //         "img": "https://thefinancialexpress.com.bd/uploads/1671027769.jpg",
    //         "details": "Provide support to underprivileged section of the society specially extreme poor, ."
    //     }, {
    //         "id": 1,
    //         "Name": "Ek Takar Ahar",
    //         "img": "https://i.ytimg.com/vi/A9AfrKVyZvQ/maxresdefault.jpg",
    //         "details": "Provide support to underprivileged section of the society specially extreme poor, ."
    //     },
    // ]



    return (
        <div className='mx-2'>
            <h2 className='text-center text-2xl font-semibold '>Make Someone Happy</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                {
                    institutes?.map(institute => <DonationCard key={institute.id} institute={institute}></DonationCard>)
                }
            </div>
            <DonationModal></DonationModal>
        </div>
    );
};

export default Donation;