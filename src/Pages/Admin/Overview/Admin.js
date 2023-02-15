import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ColumnChart from 'react-apexcharts';
import Counter from './Counter';
import Map from './Map';



const Admin = () => {
    const { data: agents = [] } = useQuery({
        queryKey: ['agents'],
        queryFn: async () => {
            const res = await fetch('https://one-bit-pay-server.vercel.app/approvedAgents');
            const data = await res.json();
            return data;
        }
    })

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://one-bit-pay-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    const [todoTask, setTodoTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleTodoInputChange = (event) => {
        setTodoTask(event.target.value);
    };

    const addTask = () => {
        setTasks([...tasks, todoTask]);
        setTodoTask("");
    };

    const userCount = users?.filter(users => users?.role === 'user').length;
    const agentCount = users?.filter(agents => agents?.role === 'agent').length;
    const adminCount = users?.filter(admins => admins?.role === 'admin').length;

    const options = {

        series: [{
            name: 'Users',
            data: [userCount, 0]
        }, {
            name: 'Agents',
            data: [agentCount, 0]
        },
        {
            name: 'Admin',
            data: [adminCount, 0]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area'
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
        },


    };

    return (
        <div className='bg-gray-100 rounded-2xl'>
            <div className="p-10">

                <Counter></Counter>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    <div className="mb-10 bg-black rounded-xl p-6 h-96">
                        <h2 className="text-lg text-white font-medium mb-4">Statistics</h2>
                        <ColumnChart options={options} series={options.series} type="bar" />
                    </div>
                    <div className='rounded-xl bg-white p-6 h-96'>
                        <h2 className="text-lg font-medium mb-4">Customers By Area</h2>
                        <div className="">
                            <Map></Map>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <h2 className="text-lg font-medium mb-4">Agent's Work Analysis</h2>
                    <table className="mt-5 w-full text-left table-collapse">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b border-gray-300">Name</th>
                                <th className="px-4 py-2 border-b border-gray-300">Revenue</th>
                                <th className="px-4 py-2 border-b border-gray-300">New Accounts</th>
                                <th className="px-4 py-2 border-b border-gray-300">Daily Goal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {agents.map((agent) => (
                                <tr key={agent._id}>
                                    <td className="px-4 py-2 border-b border-gray-300">
                                        {agent.name}
                                    </td>
                                    <td className="px-4 py-2 border-b border-gray-300">
                                        50$
                                    </td>
                                    <td className="px-4 py-2 border-b border-gray-300">
                                        10
                                    </td>
                                    <td className="px-4 py-2 border-b border-gray-300">
                                        <small className='text-green-500'>completed</small>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mb-10">
                    <h2 className="text-lg font-medium mb-4">Set Goals For Upcoming Week</h2>
                    <div className="flex items-center mb-5">
                        <input
                            type="text"
                            className="w-3/4 px-3 py-2 mr-3 border border-gray-300"
                            placeholder="Enter goal"
                            value={todoTask}
                            onChange={handleTodoInputChange}
                        />
                        <button
                            className="bg-black text-white px-3 py-2 hover:bg-[#5966FF]"
                            onClick={addTask}
                            disabled={!todoTask}
                        >
                            Add Goal
                        </button>
                    </div>
                    <ul className="list-decimal p-6 rounded-xl w-3/4">
                        {tasks.map((task, index) => (
                            <li key={index} className="mb-2 border pl-3">
                                {task}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Admin;