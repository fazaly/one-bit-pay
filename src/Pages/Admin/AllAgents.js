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
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        users.map((user, i) =>
                            <tr key={user._id}>
                                <td>{i + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                            </tr>
                        )
                    } */}

                </tbody>
            </table>
        </div>
    );
};

export default AllAgents;