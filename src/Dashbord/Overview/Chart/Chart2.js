import React from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
  } from "recharts";
import { AuthContext } from "../../../context/AuthProvider";
import { useGetUserLoggedinDetailsQuery } from "../../../features/api/apiSlice";



const Chart2 = () => {
   const email = useSelector((state) => state.auth.email);
   const {data:userDetails} = useGetUserLoggedinDetailsQuery(email)

    const data = [
        {
          subject: "Main Balance",
          A: userDetails?.balance,
          fullBalance: 50000
        },
        {
          subject: "Received",
          A: 98,
          fullMark: 1500
        },
        {
          subject: "Sended",
          A: 86,
          fullMark: 1500
        },
        {
          subject: "Geography",
          A: 99,
          fullMark: 1500
        },
        {
          subject: "Physics",
          A: 85,
          fullMark: 1500
        },
      ];
    
  return (
    <RadarChart
      cx={150}
      cy={150}
      outerRadius={80}
      width={300}
      height={300}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.8}
      />
    </RadarChart>
  );
};

export default Chart2;
