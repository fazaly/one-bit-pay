import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ColumnChart from 'react-apexcharts';


const Admin = () => {
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
            data: [userCount]
        }, {
            name: 'Agents',
            data: [5, 15]
        },
        {
            name: 'Admin',
            data: [adminCount]
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
            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            },
        },


    };

    return (
        <div>
            <div className="p-10">
                <h1 className="text-3xl font-medium mb-5">Admin Dashboard</h1>
                <div className="mb-10">
                    <h2 className="text-lg font-medium mb-4">Users Statistics</h2>
                    <ColumnChart options={options} series={options.series} type="bar" />
                </div>
                <div className="mb-10">
                    <h2 className="text-lg font-medium mb-4">User List</h2>
                    <table className="mt-5 w-full text-left table-collapse">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b border-gray-300">Name</th>
                                <th className="px-4 py-2 border-b border-gray-300">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-4 py-2 border-b border-gray-300">
                                        {user.name}
                                    </td>
                                    <td className="px-4 py-2 border-b border-gray-300">
                                        {user.userEmail}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mb-10">
                    <h2 className="text-lg font-medium mb-4">To-Do Tasks</h2>
                    <div className="flex items-center mb-5">
                        <input
                            type="text"
                            className="w-full px-3 py-2 mr-3 border border-gray-300"
                            placeholder="Enter task"
                            value={todoTask}
                            onChange={handleTodoInputChange}
                        />
                        <button
                            className="bg-blue-500 text-white px-3 py-2 hover:bg-blue-600"
                            onClick={addTask}
                            disabled={!todoTask}
                        >
                            Add Task
                        </button>
                    </div>
                    <ul className="list-decimal pl-5">
                        {tasks.map((task, index) => (
                            <li key={index} className="mb-2">
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