import React, { useEffect } from 'react';
import { useGetAgentRequestQuery } from '../../features/api/apiSlice';
import AgentRequestTableRow from './AgentRequestTableRow';

const AgentRequest = () => {

    const { data, isLoading, isSuccess, isError } = useGetAgentRequestQuery();
    console.log(data)

    // useEffect(() => {
    //     if (isLoading) {
    //         return <p className='text-center text-xl font-bold'>Loading</p>
    //     }

    //     if (isError) {
    //         return <p className='text-center text-xl font-bold text-red'>Something Wrong!</p>
    //     }
    // }, [isLoading, isError, isSuccess])



    // console.log(agentsRequest)

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

                            {isSuccess &&
                                data?.map(agentRequest => <AgentRequestTableRow key={agentRequest._id} agentRequest={agentRequest}></AgentRequestTableRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AgentRequest;