import React from 'react';

const AgentRequest = () => {
    return (
        <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Email</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">

                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    <div className="flex items-center text-sm">
                                        <div>
                                            <p className="font-semibold text-black">Stevens</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-xs border">
                                    <span className="px-2 py-1 font-semibold  rounded-sm">stv@gmail.com </span>
                                </td>
                                <td className="px-4 py-3 text-md font-semibold border text-yellow-400"><span className=' leading-tight  bg-gray-100'>Pending</span></td>
                                <td className="px-4 py-3 text-sm border">12 hours ago</td>
                                <td className="px-4 py-3 text-sm border">
                                    <button className='btn btn-sm btn-success'>Approve</button>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AgentRequest;