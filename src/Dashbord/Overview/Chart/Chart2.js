import React from "react";
import { useSelector } from "react-redux";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import { useGetUserLoggedinDetailsQuery } from "../../../features/api/apiSlice";



const Chart2 = () => {
  const email = useSelector((state) => state.auth.email);
  const { data: userDetails } = useGetUserLoggedinDetailsQuery(email)

  const data = [
    {
      subject: "Main Balance",
      A: 50000,
      fullBalance: 50000
    },
    {
      subject: "Received",
      A: 10000,
      fullMark: 10000
    },
    {
      subject: "Sended",
      A: 15050,
      fullMark: 1550
    },
    {
      subject: "Mobile Recharge",
      A: 5500,
      fullMark: 550
    },
    {
      subject: "Donation",
      A: 85,
      fullMark: 1230
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
