import React from "react";
import { useQuery } from "@tanstack/react-query";
import image from "../.././images/2784129.png";
import NewsCard from "./NewsCard";

const News = () => {
  const { data: newses = [] } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      const data = res.json();
      return data;
    },
  });

  console.log(newses);
  return (
    <section>
      <section className="card w-full pt-8 p-4">
        <div className="h-52 bg-white ">
          <h1 className="text-2xl font-semibold mb-2">Latest News</h1>
          <hr className="mb-4" />
          <div className="w-full bg-[#181818] text-white rounded-xl p-6 flex lg:flex-row md:flex-row flex-col justify-around items-center">
            <h1 className="lg:text-4xl m md:text-3xl text-2xl lg:mb-0 md:mb-0 mb-4 font-bold">
              Get Paid to Stay Informed: <br />{" "}
              <span className="lg:text-6xl md:text-5xl text-4xl text-[#5966FF]">
                Earn Money
              </span>{" "}
              by <br /> Reading News{" "}
            </h1>
            <img src={image} className="w-96" alt="" />
          </div>
        </div>
      </section>
      <section className="p-4 lg:mt-24 mt-44 flex flex-col gap-4">
        {
          newses?.articles?.map((news, i) => <NewsCard news={news} key={i}/>)
        }
      </section>
    </section>
  );
};

export default News;
