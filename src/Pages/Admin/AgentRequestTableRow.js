import React from 'react';
import { useMakeAgentMutation } from '../../features/api/apiSlice';

const AgentRequestTableRow = ({ agentRequest }) => {

    const [makeAgent] = useMakeAgentMutation();
    console.log(makeAgent);
    console.log(agentRequest?.email);

    return (
        <tr className="text-gray-700">
            <td className="px-4 py-3 border">
                <div className="flex items-center text-sm">
                    <div>
                        <p className="font-semibold text-black">{agentRequest?.name}</p>
                    </div>
                </div>
            </td>
            <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold  rounded-sm">{agentRequest?.email} </span>
            </td>
            {agentRequest?.status === "accepted" ?
                <>
                    <td className="px-4 py-3 text-md font-semibold border text-green-400"><span className=' leading-tight  bg-gray-100'>approved</span></td>
                </>
                :
                <td className="px-4 py-3 text-md font-semibold border text-yellow-400"><span className=' leading-tight  bg-gray-100'>Pending</span></td>

            }



            <td className="px-4 py-3 text-sm border">12 hours ago</td>
            <td className="px-4 py-3 text-sm border">
                {agentRequest?.status === "accepted" ?
                    <>
                        <p>approved</p>
                    </>
                    :
                    <button onClick={() => makeAgent(agentRequest?.email)} className='btn btn-sm btn-success'>Approve</button>

                }

            </td>
        </tr>

    );
};

export default AgentRequestTableRow;