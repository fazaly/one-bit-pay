import React, { useEffect } from 'react';
import { useState } from 'react';
import BlogInfo from './BlogInfo';

const Blog = () => {

    const [blogpost, setBlogPost] = useState([])

    useEffect(() => {
        fetch('https://one-bit-pay-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBlogPost(data)
            })
    }, [])
    return (
        <div>
            <section className="max-w-[1440px] mx-auto mt-20">
                <div>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full">
                            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                                <span className="font-bold text-[45px] text-primary mb-2 block">
                                    Our Blogs
                                </span>
                                <h2
                                    className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4"
                                >
                                    Our Recent News
                                </h2>
                                <p className="text-base text-center text-body-color">
                                    Financial sector have been focused on MFS recent time from them mobile banking is now most popular.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {
                            blogpost.map(blog => <BlogInfo
                                key={blog._id}
                                blog={blog}
                            ></BlogInfo>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;