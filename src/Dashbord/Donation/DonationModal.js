import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { format } from "date-fns";
import { toast } from "react-hot-toast";

const DonationModal = ({ institute, modal, setModal }) => {
    // const [loading, setLoading] = useState(false);
    const { user, loading, setLoading } = useContext(AuthContext)



    const handleDonate = (event) => {
        event.preventDefault();
        const form = event.target;
        const amount = form.amount.value;
        const senderEmail = user?.email;
        const receiverEmail = institute?.email;
        const time = format(new Date(), "PP");
        const sendMoneyInfo = {
            senderEmail,
            receiverEmail,
            amount: parseInt(amount),
            time,
            type: "donation"
        };
        // console.log(institute)
        // console.log(sendMoneyInfo);

        fetch("https://one-bit-pay-server.vercel.app/sendMoney", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(sendMoneyInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success("Thank You So Much For Donation");
                form.reset();
                // setLoading(false);
                setModal(!modal)
            });





    }



    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn bg-[#5966FF] hover:bg-red-600 btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{institute.Name}</h3>

                    <form onSubmit={handleDonate} className="space-y-2 my-10">

                        <input
                            type="text"
                            name="amount"
                            required
                            placeholder="Amount"
                            className=" w-full border-0 border-b-2 border-slate-700 outline-none text-slate-700 focus:text-[#5966FF]  focus:border-b-[#5966FF]"
                        />
                        <p className="">
                            <button
                                type="submit"
                                className="btn  bg-[#5966FF] btn-xs rounded-sm border-none hover:bg-green-300 rounded-lg"
                            >
                                Buy Happiness
                            </button>
                        </p>
                    </form>



                </div>
            </div>
        </div>
    );
};

export default DonationModal;