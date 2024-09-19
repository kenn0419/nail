
const Contact = () => {
    return (
        <div className="w-main flex justify-between mx-auto gap-20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.8735497000303!2d-3.4676481!3d55.93423000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887daff871b1f17%3A0x4225d599718c6f13!2sHollywood%20nails%20%26%20Beauty%2C%20112%20E%20Main%20St%2C%20Broxburn%20EH52%205EQ%2C%20V%C6%B0%C6%A1ng%20Qu%E1%BB%91c%20Anh!5e0!3m2!1svi!2s!4v1726738063281!5m2!1svi!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="w-[50%]">
                <h2 className='text-[46px] text-main font-semibold font-banner'>Contact us</h2>
                <p className='mb-4'>Have any questions? Feel free to use the contact form below to get in touch with us. We will answer you as soon as possible!.</p>
                <input type="text" placeholder="Your Name" className="outline-none p-2 border border-[#ced4da] w-[100%] rounded-md mb-4" />
                <input type="email" placeholder="Email" className="outline-none p-2 border border-[#ced4da] w-[100%] rounded-md mb-4" />
                <input type="tel" placeholder="Phone Number" className="outline-none p-2 border border-[#ced4da] w-[100%] rounded-md mb-4" />
                <input type="text" placeholder="Your Name" className="outline-none p-2 border border-[#ced4da] w-[100%] rounded-md mb-4" />
                <textarea type="text" placeholder="Message" rows={4} className="outline-none p-2 border border-[#ced4da] w-[100%] rounded-md mb-4"></textarea>
                <button className='py-2 px-5 bg-main text-[#fff] font-semibold text-base rounded-sm'>Send</button>
            </div>
        </div>
    )
}

export default Contact