import React, { useEffect } from 'react';
import { useState } from 'react';
import BlogInfo from './BlogInfo';

const Blog = () => {

    const [blogpost, setBlogPost] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBlogPost(data)
            })
    }, [])
    return (
        <div>
            <section className="pt-10 lg:pt-[80px] pb-10 lg:pb-20">
                <div className="container">
                    <div className="flex flex-wrap justify-center -mx-4">
                        <div className="w-full px-4">
                            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                                <span className="font-semibold text-lg text-primary mb-2 block">
                                    Our Blogs
                                </span>
                                <h2
                                    className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                                >
                                    Our Recent News
                                </h2>
                                <p className="text-base text-body-color">
                                    Finential sector have been focused on MFS recent time from them mobile banking is now most popular.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-2">
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