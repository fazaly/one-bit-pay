import React from 'react';
import { useDeletUserMutation, useGetUserDetailsQuery } from '../../features/api/apiSlice';

const AllAgents = () => {
    const { data, isLoading, isSuccess, isError } = useGetUserDetailsQuery();
    const users = data;
    const [deleteUser] = useDeletUserMutation();

    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.filter(agents => agents?.role === 'agent').map((user, i) =>
                            <tr key={user._id}>
                                <td>{i + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.userEmail}</td>
                                <td>
                                    <button
                                        onClick={() => deleteUser(user?._id)}
                                        className='btn btn-sm bg-red-500'
                                    >
                                        Delete
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