import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import path from "../utils/path";

const FormConfirm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const formatServices = (services) => {
        return services.map((service, index) => `${index + 1}. ${service.text}`).join('\n');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingData = {
            name,
            phone,
            email,
            date: localStorage.getItem('selectedDateTime'),
            service: formatServices(JSON.parse(localStorage.getItem('list'))),
            price: JSON.parse(localStorage.getItem('list')).reduce((prev, acc) => prev + acc.price, 0) + '£'
        };
        try {
            const response = await axios.post('https://script.google.com/macros/s/AKfycbxFynO0I_fijni3-G2wWf9F7rxCJsw6MA9HJGMWrkUV83D7QGcagL6XOPjjxDkSCjn3/exec', bookingData, {
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                }
            });

            if (response.data.status === 'success') {
                // toast.success(response.data.message)
                navigate(`/${path.THANK}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div className='w-main mx-auto mt-5'>
            <form onSubmit={handleSubmit} className="w-[80%] p-4 bg-sub-main shadow-md rounded-md">
                <h2 className="text-[46px] font-bold mb-4 text-main uppercase font-banner">Your Details</h2>
                <div className='flex gap-6 justify-between w-[100%]'>
                    <div className='w-[70%]'>
                        <div className="mb-4 w-[100%]">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                className="w-[50%] p-2 border border-[#c3c3c3] mt-1 rounded-lg bg-transparent"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4 w-[100%]">
                            <label className="block text-gray-700">Phone</label>
                            <input
                                type="tel"
                                className="w-[50%] p-2 border border-[#c3c3c3] mt-1 rounded-lg bg-transparent"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4 w-[100%]">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-[50%] p-2 border border-[#c3c3c3] mt-1 rounded-lg bg-transparent"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className="w-full bg-main text-[#fff] uppercase font-semibold py-2 px-4 rounded-md outline-none">Confirm</button>

            </form>
        </div>
    )
}

export default FormConfirm