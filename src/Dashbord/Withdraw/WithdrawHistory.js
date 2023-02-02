import React from 'react';

const WithdrawHistory = () => {
    return (
        <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                <th className="px-4 py-3">Agent Email</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Amount</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3">Transection Id</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    <div className="flex items-center text-sm">
                                        <div>
                                            <p className="font-semibold text-black">Sufyan</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-xs border">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                                </td>
                                <td className="px-4 py-3 text-ms font-semibold border">2200</td>
                                <td className="px-4 py-3 text-sm border">10 hours ago</td>
                                <td className="px-4 py-3 text-sm border">02345MK</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    <div className="flex items-center text-sm">
                                        <div>
                                            <p className="font-semibold text-black">Stevens</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-xs border">
                                    <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm"> Pending </span>
                                </td>
                                <td className="px-4 py-3 text-md font-semibold border">2700</td>
                                <td className="px-4 py-3 text-sm border">12 hours ago</td>
                                <td className="px-4 py-3 text-sm border">1UO4550</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    <div className="flex items-center text-sm">
                                        <div>
                                            <p className="font-semibold">Nora</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-xs border">
                                    <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"> Nnacceptable </span>
                                </td>
                                <td className="px-4 py-3 text-md font-semibold border">1700</td>
                                <td className="px-4 py-3 text-sm border">1 days ago</td>
                                <td className="px-4 py-3 text-sm border">890456CA</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    <div className="flex items-center text-sm">
                                        <div>
                                            <p className="font-semibold">Ali</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 border text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                                </td>
                                <td className="px-4 py-3 border text-md font-semibold">2300</td>
                                <td className="px-4 py-3 border text-sm">1 days ago</td>
                                <td className="px-4 py-3 text-sm border">565MN45</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    <div className="flex items-center text-sm">
                                        <div>
                                            <p className="font-semibold">Khalid</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 border text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-sm"> Pending </span>
                                </td>
                                <td className="px-4 py-3 border text-md font-semibold">2056</td>
                                <td className="px-4 py-3 border text-sm">2 days ago</td>
                                <td className="px-4 py-3 text-sm border">1U3L843</td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    <div className="flex items-center text-sm">
                                        <div>
                                            <p className="font-semibold">Nasser</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 border text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                                </td>
                                <td className="px-4 py-3 border text-md font-semibold">2999</td>
                                <td className="px-4 py-3 border text-sm">2 days ago</td>
                                <td className="px-4 py-3 text-sm border">456JK30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default WithdrawHistory;