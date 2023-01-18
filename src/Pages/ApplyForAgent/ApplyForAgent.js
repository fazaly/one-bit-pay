import React from 'react';
import { Form } from 'react-router-dom';
import './ApplyForAgent.css'

const ApplyForAgent = () => {

    const handleupdateInfo = (e) => {
        e.preventDefault()
        const form = e.target;
        const UserName = form.userName.value;
        const businessName = form.businessName.value;
        const businessLocation = form.businessLocation.value;
        const businessType = form.businessType.value;
        const tinNumber = form.tinNumber.value;
        const email = form.email.value;
        const image = form.image.files[0]
        const agentInfo = {
            AgentName: UserName,
            BusinessName: businessName,
            BusinessLocation: businessLocation,
            BusinessType: businessType,
            tinId: tinNumber,
            email,
            image
        }
        console.log(agentInfo);
    }
    return (
        <div>
            <div className="p-5">
                <div className="mx-4 p-4">
                    <div className="flex items-center">
                        <div className="flex items-center text-[#00AAFF] relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-[#5966FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark ">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#00AAFF]">Personal</div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-[#5966FF]"></div>
                        <div className="flex items-center text-white relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-[#5966FF] border-[#5966FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus ">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="8.5" cy="7" r="4"></circle>
                                    <line x1="20" y1="8" x2="20" y2="14"></line>
                                    <line x1="23" y1="11" x2="17" y2="11"></line>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#00AAFF]">Account</div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-[#5966FF]"></div>
                        <div className="flex items-center text-white relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-[#5966FF] border-[#5966FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail ">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#00AAFF]">Message</div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-[#5966FF]"></div>
                        <div className="flex items-center text-white relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-[#5966FF] border-[#5966FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database ">
                                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                </svg>
                            </div>
                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-[#00AAFF]">Confirm</div>
                        </div>
                    </div>
                </div>
                <Form id="user" onSubmit={handleupdateInfo} className="mt-8 p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                        <div className="w-full flex-1 mx-2 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">Your Name</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input type='text' name='userName' placeholder="Enter Name" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                        </div>
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">Business Name</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input type='text' name='businessName' placeholder="Enter Business Name" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                        </div>
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">Business Location</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input name="businessLocation" type='text' placeholder="Enter Location" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                        </div>
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">Business Type</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input type='text' name='businessType' placeholder="Enter Business type" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                        </div>
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">TIN ID</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input type='text' name='tinNumber' placeholder="Enter TIN ID" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                        </div>
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">Email</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input type='email' name='email' placeholder="jhon@doe.com" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                        </div>
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-[#00AAFF] text-md leading-8 uppercase">Image</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input type='file' name='image' placeholder="Enter NID Number" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" /> </div>
                        </div>
                    </div>
                    <div className="flex p-2 mt-4">
                        {/* <button className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition">Previous</button> */}
                        <div className="flex-auto flex flex-row-reverse">
                            <button type='submit'
                                className="text-base  ml-3  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:text-gray-100 bg-gradient-to-r from-[#00AAFF] to-[#8759f1] hover:to-[#00AAFF]  hover:from-[#8759f1] text-white duration-200 ease-in-out transition">Update Information</button>
                            <button type='reset' className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:text-gray-100 bg-gradient-to-r from-[#00AAFF] to-[#8759f1] hover:to-[#00AAFF]  hover:from-[#8759f1] text-white duration-200 ease-in-out transition">Reset</button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default ApplyForAgent;