import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEarnFromNewsMutation, useGetUserLoggedinDetailsQuery } from "../../features/api/apiSlice";
import { toast } from "react-hot-toast";

const NewsCard = ({news}) => {
  const [more, setMore] = useState(false);
  const {urlToImage, author, content, publishedAt, title, description, source} = news;

  const email = useSelector((state) => state.auth.email);
  const {data} = useGetUserLoggedinDetailsQuery(email);
  const userDetails = data?.data;
  const [postData, {isError, isSuccess, isLoading}] = useEarnFromNewsMutation();
  console.log(userDetails);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      toast.success("Congratulations You Earned $0.75");
    }
  },[isLoading, isSuccess,])

  const myStyle = {
    backgroundImage: `url(${urlToImage})`,
    backgroundPosition: "center",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
  };

  const readMore = () => {
    const data = {
      email: userDetails.userEmail,
      balance: userDetails.balance,
      name: userDetails.name,
    }

    setMore(!more)
    setTimeout(() => {
      postData(data);
    }, 10000)
  }
  return (
    <div className=" text-[#181818] bg-[#EEEFFF] rounded-lg">
      <div className="container grid grid-cols-12 mx-auto ">
        <div
          className="bg-no-repeat bg-cover col-span-full lg:col-span-4"
          style={myStyle}
        ></div>
        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
          <div className="flex justify-start">
            <span className="px-2 py-1 text-sm text-[#5966FF] rounded-full font-semibold">
              {source?.name}
            </span>
          </div>
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="flex-1 pt-2">
            {description}
          </p>
          {
            more && <p className="duration-300 ease-in-out">{content}</p>
          }
          {
            more ? <button
            rel="noopener noreferrer"
            onClick={() => setMore(!more)}
            className="inline-flex items-center pt-2 pb-6 space-x-2 btn btn-sm w-40 rounded-full mt-4 mb-4 text-sm bg-red-500 border-none"
          >
            <span >Read less</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button> : <button
            rel="noopener noreferrer"
            onClick={() => readMore()}
            className="inline-flex items-center pt-2 pb-6 space-x-2 btn btn-sm w-40 rounded-full mt-4 mb-4 text-sm bg-green-500 border-none"
          >
            <span >Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          }
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center justify-start gap-2 items-start pt-2">
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 dark:text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="self-center text-md">{author}</span>
            </div>
            <span className="text-sm">Date: {publishedAt}</span>
            <span className="text-sm border border-green-500 p-2 text-green-500 rounded-full">Time: Read 10s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
