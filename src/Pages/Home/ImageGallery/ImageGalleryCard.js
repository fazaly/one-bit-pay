import React from 'react';
import './ImageGalleryCard.css';

const ImageGalleryCard = ({ imageInfo }) => {
    console.log(imageInfo)
    return (
        <>
            <div style={{
                transition: '.5s'
            }} className="rounded-lg hoverEffect w-full hover:w-full cursor-pointer ">
                <figure><img className='rounded-xl w-full md:w-full h-full' src={imageInfo.Img} alt="Shoes" /></figure>
            </div>



            {/* <div className="md:hidden w-full bg-base-100 shadow-xl">
                <figure><img className='w-full md:w-full h-full' src={imageInfo.Img} alt="Shoes" /></figure>
            </div> */}
        </>



    );
};

export default ImageGalleryCard;