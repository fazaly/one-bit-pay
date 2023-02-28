import React from 'react';
import { useDeletUserMutation, useGetUserDetailsQuery, useMakeAdminMutation } from '../../features/api/apiSlice';
import { RiDeleteBin5Fill, RiAdminFill, RiCheckFill } from "react-icons/ri";
import userImage from "../../images/userImage2.png";

const AllUsers = () => {
    const { data, isLoading, isError } = useGetUserDetailsQuery();
    const users = data;
    const [makeAdmin] = useMakeAdminMutation()
    const [deleteUser] = useDeletUserMutation()

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
                        <th>User Name</th>
                        <th>Joined Date</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, i) =>
                            <tr key={user._id}>
                                <td className='flex items-center'>
                                    <div className='w-20 rounded-full'>
                                        {
                                            user?.imageUrl ?
                                                <img className='w-14 h-14 rounded-full mr-6' src={user?.imageUrl} alt="" />
                                                :
                                                <img className='w-14 h-14 rounded-full mr-6' src={userImage} alt="" />
                                        }
                                    </div>
                                    <div>
                                        <p className="text-[#070733] font-medium text-lg">{user.name}</p>
                                        <small className='text-gray-500'>{user.userEmail}</small>
                                    </div>
                                </td >
                                <td><small>{user.date}</small></td>
                                <td>
                                    <p className='font-semibold'>{user.role}</p>
                                </td>
                                <td>
                                    {user?.role !== 'admin' ?
                                        <>
                                            <button
                                                onClick={() => makeAdmin(user?._id)}
                                                className="text-xl mr-6"
                                                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make Admin"
                                            ><RiAdminFill></RiAdminFill></button>
                                            <button
                                                onClick={() => deleteUser(user?._id)}
                                                className='text-red-500 text-xl'
                                                data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete User"
                                            >
                                                <RiDeleteBin5Fill></RiDeleteBin5Fill>
                                            </button>
                                        </>
                                        :
                                        <p className='text-center text-green-400 text-3xl font-bold'><RiCheckFill></RiCheckFill></p>
                                    }

                                </td>

                            </tr >
                        )
                    }

                </tbody >
            </table >
        </div >
    );
};

export default AllUsers;