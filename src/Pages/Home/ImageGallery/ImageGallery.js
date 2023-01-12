import React, { useState } from 'react';
import ImageGalleryCard from './ImageGalleryCard';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const gallery = [
    {
        'id': '1',
        'Img': 'https://nagad.com.bd/uploads/nagad-life-story/DAMBrPZ78kFJNVMSXJJODOJA8QkBlmFF6iUe0UBM.png'

    },
    {
        'id': '2',
        'Img': 'https://nagad.com.bd/uploads/nagad-life-story/Cwo3p1eTt15IdZ2PUvZnc4tfeJNshydiWaOseD0W.png'

    },
    {
        'id': '3',
        'Img': 'https://nagad.com.bd/uploads/nagad-life-story/DAMBrPZ78kFJNVMSXJJODOJA8QkBlmFF6iUe0UBM.png'

    },
    {
        'id': '4',
        'Img': 'https://nagad.com.bd/uploads/nagad-life-story/F9n5ZQsmDdUl854Gr42OxGFiF13aM8bHH4A2BIha.png'

    },
    {
        'id': '5',
        'Img': 'https://nagad.com.bd/uploads/nagad-life-story/VQcKfknnmh63HJPaectQ58Urv033oxBeyFjAEGT0.png'

    },
    {
        'id': '6',
        'Img': 'https://nagad.com.bd/uploads/nagad-life-story/kmkwX798jI6KSvPcPjFklcgV0ysWKN9IcRMv9pwi.png'

    }
]
// console.log(gallery)
const images = [
    "https://picsum.photos/200/300?image=1050",
    //...
    "https://picsum.photos/300/300?image=206",
]

const ImageGallery = () => {
    // const [gallery,setGallery]=useState([]) -----after database creation


    return (
        <div className='my-10 px-4 md:px-20'>
            <h2 className='text-center font-bold text-2xl my-12'>Gallery</h2>
            <div className='rounded-lg p-2 md:p-6 w-full shadow-2xl bg-base-100' >

                <div className='grid grid-cols-3 gap-1 md:gap-4 w-full'>
                    {
                        gallery?.map(imageInfo => <ImageGalleryCard key={imageInfo.id} imageInfo={imageInfo} ></ImageGalleryCard>)
                    }
                </div>
            </div>
        </div>



    );
};

export default ImageGallery;