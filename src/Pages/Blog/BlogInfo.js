import React from 'react';
import { Link } from 'react-router-dom';

const BlogInfo = ({ blog }) => {
    const { image, date, title, description, _id } = blog
    return (

        <div className="">
            <div className="max-w-[400px] mx-auto mb-10 shadow-zinc-500 shadow-lg hover:shadow-slate-600 hover:shadow-2xl p-6 rounded-lg">
                <div className="rounded overflow-hidden mb-8">
                    <img
                        src={image}
                        alt=""
                        className="w-[350px] h-[200px]"
                    />
                </div>
                <div>
                    <span
                        className="
                     bg-[#5966FF]
                     rounded-md
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     shadow-md
                     hover:shadow-2xl
                     "
                    >
                        {date}
                    </span>
                    <h3>
                        <a
                            href="javascript"
                            className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                        >
                            {title.slice(0, 40) + '...'}
                        </a>
                    </h3>
                    <p className="text-base text-body-color">
                        <span>{description.slice(0, 40) + '...'} <Link to={`/blogpost/${_id}`} className='text-[#00AAFF]'>Click to see More</Link></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogInfo;