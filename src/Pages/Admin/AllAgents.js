import React from 'react';
import { useDeletUserMutation, useGetUserDetailsQuery } from '../../features/api/apiSlice';
import agentImg from '../../images/user.jpg';
import { RiDeleteBin5Fill } from "react-icons/ri";

const AllAgents = () => {
    const { data, isLoading, isSuccess, isError } = useGetUserDetailsQuery();
    const users = data;
    const [deleteUser] = useDeletUserMutation();

    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Joined Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.filter(agents => agents?.role === 'agent').map((user, i) =>
                            <tr key={user._id}>
                                <td className='flex items-center'>
                                    <img className='w-12 h-12 rounded-xl mr-6' src={agentImg} alt="" />
                                    <div>
                                        <p className="text-[#5966FF] font-medium text-xl">{user.name}</p>
                                        <small className='text-gray-500'>{user.userEmail}</small>
                                    </div>
                                </td>
                                <td>{user.date}</td>
                                <td>
                                    <button
                                        onClick={() => deleteUser(user?._id)}
                                        className='text-xl text-red-500'
                                        data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete Agent"
                                    >
                                        <RiDeleteBin5Fill></RiDeleteBin5Fill>
                                    </button>

                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllAgents;