import React from "react";
import { useContext } from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis
  } from "recharts";
import { AuthContext } from "../../../context/AuthProvider";



const Chart2 = () => {
    const {user, userDetails} = useContext(AuthContext);

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
        {
          subject: "History",
          A: 65,
          fullMark: 1500
        }
      ];
    
  return (
    <RadarChart
      cx={150}
      cy={150}
      outerRadius={80}
      width={500}
      height={500}
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
