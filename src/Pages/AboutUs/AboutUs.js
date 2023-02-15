import React from 'react';
import { FaAward, FaFacebook, FaFingerprint, FaGithub, FaHtml5, FaLinkedinIn, FaPaperPlane, FaRetweet, FaRocket, FaServicestack, FaUserFriends, FaWallet } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const AboutUs = () => {

    const herosData = [
        {
            "id": "01",
            "name": "Md. Fazaly Rabbi",
            "img": "https://i.ibb.co/nMqFSkM/f-logo.png",
            "designation": "Front-End Developer",
            "portfolio_link": " https://fazaly-portfolio.netlify.app/",
            "resume_link": "https://drive.google.com/file/d/1YSSd_AZmuZ0xsr8RLpUVmB5ugy9dtnpt/view?usp=sharing",
            "fb_link": " https://www.facebook.com/Kasem3D/",
            "github_link": " https://github.com/fazaly",
            "linkedIn_link": " https://www.linkedin.com/in/md-fazaly-rabbi-34b36b151/",
        },
        {
            "id": "02",
            "name": "Shamim Sarkar",
            "img": "https://i.ibb.co/9rGvJ7h/h3cp21.jpg",
            "designation": "Full-stack Developer",
            "portfolio_link": "https://my-portfolio-70f87.web.app/",
            "resume_link": "https://drive.google.com/file/d/1e5BPlryzr_CQ4hTw43tK7952-q4H2ZXr/view?usp=drivesdk",
            "fb_link": "https://www.facebook.com/alpha.sk399?mibextid=ZbWKwL",
            "github_link": "https://github.com/shamim-s",
            "linkedIn_link": "https://www.linkedin.com/in/shamim-sarkar-29847113a",
        },
        {
            "id": "03",
            "name": "Abdullah Al Jaber",
            "img": "https://i.ibb.co/F6N7spP/jaber.jpg",
            "designation": "Front-End Developer",
            "portfolio_link": "https://beautiful-paletas-02d240.netlify.app/",
            "resume_link": "https://drive.google.com/drive/u/0/folders/1Oy87nzSwKhBTgmIrpkgbdkaX52FR8HCF",
            "fb_link": "https://www.facebook.com/jarajaber/",
            "github_link": "https://github.com/jaber1104076",
            "linkedIn_link": "https://www.linkedin.com/in/abdullah-al-jaber-529339a2/",
        },
        {
            "id": "04",
            "name": "Md. Rakibul Islam Rakib",
            "img": "https://i.ibb.co/DzKJFTV/pre-formal.jpg",
            "designation": "Front-End Developer",
            "portfolio_link": "https://fazaly-portfolio.netlify.app/",
            "resume_link": "https://drive.google.com/file/d/1YSSd_AZmuZ0xsr8RLpUVmB5ugy9dtnpt/view?usp=sharing",
            "fb_link": "https://www.facebook.com/profile.php?id=100008279194811",
            "github_link": "https://github.com/Rakibul187",
            "linkedIn_link": "https://www.linkedin.com/in/mri-rakib-web-developer/",
        },
        {
            "id": "05",
            "name": "ABU SHALA AHAMAD",
            "img": "https://i.ibb.co/4MJ5Xqd/322589931-2809927542484233-7150946767672570142-n.jpg",
            "designation": "Front-End Developer",
            "portfolio_link": "https://dynamic-empanada-6dd7f9.netlify.app/",
            "resume_link": "https://drive.google.com/file/d/13LkD55ibgLqJEJ5B2Xn6gCiDaWVb6PWy/view?usp=sharing",
            "fb_link": "https://www.facebook.com/swopnil.spl?mibextid=ZbWKwL",
            "github_link": "https://github.com/AhmadShopnil",
            "linkedIn_link": "https://www.linkedin.com/in/ahmad-shopnil/",
        },
        {
            "id": "06",
            "name": "Sumaya Kabir Shifa",
            "img": "https://i.ibb.co/7rVpS72/sumaya-kabir-shifa.jpg",
            "designation": "Front-End Developer",
            "portfolio_link": "https://sumaya-kabir-portfolio.netlify.app/",
            "resume_link": "https://drive.google.com/file/d/1b-s1hXYIZDfsT5U5kvjV0X-NASRVO-_x/view",
            "fb_link": "https://www.facebook.com/sumaya.sheikh.940",
            "github_link": "https://github.com/sumaya-kabir",
            "linkedIn_link": "https://www.linkedin.com/in/sumaya-kabir-shifa-85ba99189/",
        }
    ]

    return (
        <div>
            <main className='w-11/12 mt-10 mb-10 mx-auto'>
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                    style={{
                        minHeight: "75vh"
                    }}>
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                            borderRadius: "50px 0px"
                        }}>
                        <span className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-3xl">
                                        "Unleashing the Power of Innovation: Our Journey at OneBitPay"
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-300">
                                        OneBitPay is a payment solutions company that is at the forefront of the financial technology revolution. We aim to empower individuals and businesses with secure and innovative payment options, bridging the gap between traditional financial systems and the digital age.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                <section className="pb-20 bg-gray-300 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <FaAward className='text-xl'></FaAward>
                                        </div>
                                        <h6 className="text-xl font-semibold">Fast and secure transactions</h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            OneBitPay offers quick and secure payment processing, ensuring that your transactions are processed quickly and securely.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                                            <FaRetweet className='text-xl'></FaRetweet>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Global accessibility
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Our platform is accessible from anywhere in the world, allowing you to send and receive payments regardless of your location.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                                            <FaFingerprint className='text-xl'></FaFingerprint>
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            User-friendly interface
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-600">
                                            Our platform is designed with the user in mind, offering a simple and intuitive interface that makes it easy for you to manage your payments
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-wrap items-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                                    <FaUserFriends className='text-xl'></FaUserFriends>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Integration with e-commerce platforms
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    OneBitPay integrates with a variety of e-commerce platforms, allowing businesses to seamlessly accept payments from their customers. Our platform supports a wide range of popular shopping carts and e-commerce platforms.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                                    With OneBitPay, businesses can enjoy fast and secure payment processing, low transaction fees, and easy integration with their existing e-commerce setup. Whether you're a small online business or a large enterprise, OneBitPay has a solution that is right for you.
                                </p>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                                    <img
                                        alt="..."
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                        className="w-full align-middle rounded-t-lg"
                                    />
                                    <blockquote className="relative p-8 mb-4">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            className="absolute left-0 w-full block"
                                            style={{
                                                height: "95px",
                                                top: "-94px"
                                            }}
                                        >
                                            <polygon
                                                points="-30,95 583,95 583,65"
                                                className="text-pink-600 fill-current"
                                            ></polygon>
                                        </svg>
                                        <h4 className="text-xl font-bold text-white">
                                            24/7 customer support
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Our dedicated customer support team is available 24/7 to help you with any questions or issues you may have.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{ height: "80px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                                        <FaRocket className='text-xl'></FaRocket>
                                    </div>
                                    <h3 className="text-3xl font-semibold">
                                        A growing company
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                        OneBitPay is a payment processor that enables merchants to accept cryptocurrency payments, and its growth will depend on various factors, such as the adoption of cryptocurrencies, the demand for cryptocurrency payment processing services, the company's ability to attract and retain customers, and competition in the payment processing industry.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <FaFingerprint></FaFingerprint>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">
                                                        Transaction speed and reliability
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <FaHtml5></FaHtml5>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">Amazing page examples</h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                                                        <FaPaperPlane></FaPaperPlane>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-600">Dynamic components</h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="pt-20 pb-48">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold">
                                    Here are our heroes
                                </h2>
                                <p className="text-lg leading-relaxed m-4 text-gray-600">
                                    At OneBitPay, our team is driven by a common goal: to empower individuals and businesses with innovative payment solutions. We believe that financial freedom should be a right for all, and our mission is to make this a reality through our products and services.
                                </p>
                            </div>
                        </div>
                        {/* <div className="flex flex-wrap">
                            <div className="w-full md:w-5/12 lg:w-7/12 lg:mb-5 mb-12 p-4 shadow-md rounded-lg shadow-slate-400">
                                <div className="px-3">
                                    <img
                                        alt="..."
                                        src={jaber}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Ryan Tompson
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Web Developer
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaFacebook></FaFacebook>
                                            </button>
                                            <button
                                                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaLinkedinIn></FaLinkedinIn>
                                            </button>
                                            <button
                                                className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaGithub></FaGithub>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-5 mb-12 p-4 shadow-xl rounded-lg shadow-slate-600">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={jaber}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Romina Hadid
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Marketing Specialist
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaFacebook></FaFacebook>
                                            </button>
                                            <button
                                                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaLinkedinIn></FaLinkedinIn>
                                            </button>
                                            <button
                                                className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaGithub></FaGithub>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-5 mb-12 p-4 shadow-xl rounded-lg shadow-slate-600">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={jaber}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Abu Shala Ahamad (Sopnil)
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            UI/UX Designer
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaFacebook></FaFacebook>
                                            </button>
                                            <button
                                                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaLinkedinIn></FaLinkedinIn>
                                            </button>
                                            <button
                                                className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaGithub></FaGithub>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-5 mb-12 p-4 shadow-xl rounded-lg shadow-slate-600">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={jaber}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Sumaya Kabir Shifa
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Founder and CEO
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaFacebook></FaFacebook>
                                            </button>
                                            <button
                                                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaLinkedinIn></FaLinkedinIn>
                                            </button>
                                            <button
                                                className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaGithub></FaGithub>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-5 mb-12 p-4 shadow-xl rounded-lg shadow-slate-600">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={jaber}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Jenna Kardi
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Founder and CEO
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaFacebook></FaFacebook>
                                            </button>
                                            <button
                                                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaLinkedinIn></FaLinkedinIn>
                                            </button>
                                            <button
                                                className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaGithub></FaGithub>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-5 mb-12 p-4 shadow-xl rounded-lg shadow-slate-600">
                                <div className="px-6">
                                    <img
                                        alt="..."
                                        src={jaber}
                                        className="shadow-lg rounded-full max-w-full mx-auto"
                                        style={{ maxWidth: "120px" }}
                                    />
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Jenna Kardi
                                        </h5>
                                        <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                                            Founder and CEO
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaFacebook></FaFacebook>
                                            </button>
                                            <button
                                                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaLinkedinIn></FaLinkedinIn>
                                            </button>
                                            <button
                                                className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                type="button"
                                            >
                                                <FaGithub></FaGithub>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* profile card start*/}
                        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                            {
                                herosData.map(hero =>
                                    <div key={hero.id} className="flex flex-col justify-center p-8 shadow-lg shadow-slate-300 hover:shadow-2xl hover:shadow-slate-500 rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100">
                                        <img src={hero.img} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                                        <div className="space-y-4 text-center">
                                            <div className="my-2 space-y-1">
                                                <h2 className="text-xl font-semibold sm:text-2xl">{hero.name}</h2>
                                                <p className="px-5 text-xs sm:text-base dark:text-gray-400">Full-stack developer</p>
                                            </div>
                                            <div className="divider divide-gray-900"></div>
                                            <div className='flex justify-around'>
                                                <a href={hero.portfolio_link} target="_blank" rel='noreferrer'> <button className='btn btn-sm rounded-sm'>portfolio</button></a>
                                                <a href={hero.resume_link} target="_blank" rel='noreferrer'><button className='btn btn-sm rounded-sm'>Resume</button></a>
                                            </div>
                                            <div className="flex justify-center pt-2 space-x-4 align-center">
                                                <a rel="noopener noreferrer" href={hero.fb_link} target="_blank" aria-label="Facebool" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                                                    <button
                                                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                        type="button"
                                                    >
                                                        <FaFacebook></FaFacebook>
                                                    </button>
                                                </a>
                                                <a rel="noopener noreferrer" href={hero.linkedIn_link} target="_blank" title="Facebook" className="flex items-center p-1">
                                                    <button
                                                        className="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                        type="button"
                                                    >
                                                        <FaLinkedinIn></FaLinkedinIn>
                                                    </button>
                                                </a>
                                                <a rel="noopener noreferrer" href={hero.github_link} target="_blank" aria-label="Twitter" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                                                    <button
                                                        className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 p-2"
                                                        type="button"
                                                    >
                                                        <FaGithub></FaGithub>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        {/* profile card end*/}


                    </div>
                </section>

                <section className="pb-20 relative block bg-gray-900">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{ height: "80px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-900 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold text-white">
                                    OneBitPay - Your One-Stop Shop for Secure and Convenient Payment Solutions
                                </h2>
                                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                                    OneBitPay is a leading provider of secure and convenient payment solutions for individuals and businesses. We offer a range of services designed to make it easy for you to manage your digital assets and make payments to anyone, anywhere in the world.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <FaServicestack className="text-xl"></FaServicestack>
                                </div>
                                <h6 className="text-xl mt-5 font-semibold text-white">
                                    Exchange Services
                                </h6>
                                <p className="mt-2 mb-4 text-gray-500 text-justify">
                                    OneBitPay offers a fast and convenient exchange service, allowing you to easily convert between different cryptocurrencies and fiat currencies. Our exchange is secure, reliable, and easy to use.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <FaWallet className="text-xl"></FaWallet>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Payment Processing
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500 text-justify">
                                    OneBitPay provides fast and secure payment processing for merchants of all sizes. Our platform integrates with a wide range of e-commerce platforms, making it easy for you to accept digital payments from your customers.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <MdSecurity className="text-2xl"></MdSecurity>
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Security
                                </h5>
                                <p className="mt-2 mb-4 text-gray-500 text-justify">
                                    At OneBitPay, security is our top priority. We use state-of-the-art encryption technologies and employ rigorous security measures to ensure that your information and digital assets are always safe and secure.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative block py-24 lg:pt-0 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <h4 className="text-2xl font-semibold">
                                            Want to work with us?
                                        </h4>
                                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                            Complete this form and we will get back to you in 24 hours.
                                        </p>
                                        <div className="relative w-full mb-3 mt-8">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="full-name"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Full Name"
                                                style={{ transition: "all .15s ease" }}
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Email"
                                                style={{ transition: "all .15s ease" }}
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="message"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                rows="4"
                                                cols="80"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Type a message..."
                                            />
                                        </div>
                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div >
    );
};

export default AboutUs;