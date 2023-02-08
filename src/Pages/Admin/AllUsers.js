import React from 'react';
import { useGetUserDetailsQuery, useMakeAdminMutation } from '../../features/api/apiSlice';

const AllUsers = () => {
    const { data, isLoading, isSuccess, isError } = useGetUserDetailsQuery();
    const [makeAdmin] = useMakeAdminMutation()
    const users = data;

    if (isLoading) {
        return <p>Loading..</p>
    }
    if (isError) {
        return <p>Something Went Wrong ! Please Check .. </p>
    }

    return (
        <div>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th><p className="mr-10 text-center">Actions</p></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, i) =>
                            <tr key={user._id}>
                                <td>{i + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.userEmail}</td>
                                <td>
                                    {user?.role !== 'admin' ?
                                        <>
                                            <button onClick={() => makeAdmin(user?._id)} className="btn btn-sm mr-6">Make Admin</button>
                                            <button

                                                className='btn btn-sm bg-red-500'
                                            >
                                                Delete
                                            </button>
                                        </>
                                        :
                                        <p>Admin</p>
                                    }

                                </td>

                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;