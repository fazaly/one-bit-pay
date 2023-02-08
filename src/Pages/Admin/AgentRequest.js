import React from 'react';

const AgentRequest = () => {
    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th><p className="mr-10 text-center">Actions</p></th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        users.map((user, i) =>
                            <tr key={user._id}>
                                <td>{i + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                        <button className="btn btn-sm mr-6">Approve Request</button>
                                                                                                                        <button
                                         className='text-red-500'
                                          >
                                            Delete Request
                                        </button>

                                    
                                </td>

                            </tr>
                        )
                    } */}

                </tbody>
            </table>
        </div>
    );
};

export default AgentRequest;