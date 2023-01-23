import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';
Chart.register(ArcElement);

const ChartView = () => {
    const data = {
        labels: ["Send Money", "Receive Money", "Mobile Recharge"],
        datasets: [{
            data: [ 32, 45, 65],
            backgroundColor: [
                "#5966FF",
                "rgba(54,162, 235, 0.2)",
                "rgba(255,206, 86, 0.2)",
                 
            ],
            borderColor: ["#5966FF", "rgba(54,162, 235, 0.2)", "rgba(255,206, 86, 0.2)"],
        }]
    }
    return (
        <div className=''>
            <Doughnut data={data}/>
        </div>
    );
};

export default ChartView;