import React from 'react';

const AllAgents = () => {
    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i) =>
                            <tr key={user._id}>
                                <td>{i + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.userEmail}</td>
                                <td>
                                        <button className="text-green-500">Approve Request</button>
                                    }
                                </td>
                                <td>
                                    <button
                                    
                                    className='text-red-500'
                                    >
                                        Delete Request
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