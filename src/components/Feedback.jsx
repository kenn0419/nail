import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import m from '../images/m-google.png';
import n from '../images/N-google.png';
import j from '../images/J-google.png';
import l from '../images/L-google.png';
import h from '../images/h-google.jpg';
import r from '../images/r-google.png';
import r2 from '../images/r2-google.png';
import b from '../images/b-google.png';
import k from '../images/k-google.png';


const testimonials = [
    {
        img: m,
        name: "Marta Lewandowska",
        rating: 5,
        description: "Going to that place for 2 years now and I am always very happy and satisfied with all the stuff. Lovely, nice atmosphere. Always get what I want. I will recommend it to everyone. My best nail salon.",
    },
    {
        img: n,
        name: "Nicky Kilday",
        rating: 5,
        description: "This was my third time in this salon and I absolutely love my nails, they are amazing at what they do and I won’t be going anywhere else now",
    },
    {
        img: l,
        name: "Lucy Mackinnon",
        rating: 5,
        description: "I’m sharing a picture of wot I asked them to do on my daughters nails and another picture of wot the girl actually done, which was a complete mess yet she still charged me £15 for it so I wouldn’t go back",
    },
    {
        img: m,
        name: "Maria",
        rating: 4,
        description: "Got acrylics and nail art which took abt 40mins from start to finish.  Nails were everything I wanted and matching the reference picture perfectly ✨ and they're holding up well ",
    },
    {
        img: j,
        name: "Jean Miller",
        rating: 5,
        description: "First class service clean and so welcoming I always go here and they make a stunning job of my nails. I also had as pedicure which was so relaxing after a day at work",
    },
    {
        img: h,
        name: "hania buchanan",
        rating: 5,
        description: "Love this place!! Always amazing nails, staff are lovely! Fantastic prices. So talented and can always do anything I ask for. Would never go anywhere else",
    },
    {
        img: r,
        name: "Rebecca Mcgregor",
        rating: 5,
        description: "Absolutely fantastic service from start to end! All nail technicians are superb, I’ve been coming here for years, do exactly what you ask and have no issue to change if unsure. Made to feel extremely comfortable. Micheal and his team love kids, I’m a mother of 2 and makes me feel at ease knowing my kids can come in and are made to feel extremely welcome.. keep up the good work. 💙",
    },
    {
        img: r2,
        name: "Rachael Hope",
        rating: 5,
        description: "Been using  Hollywood nails for my nails for a couple years now always polite service and lovely nails.. always have compliments! ... had my first pedicure today and it was amazing so relaxing defo recommend.",
    },
    {
        img: b,
        name: "Bella Dalton",
        rating: 5,
        description: "I travel from Edinburgh to get my nails done here. Everyone in the shop is lovely . Nails and toes always come out to perfection ❤️. They don’t bat an eyelid taking children in x",
    },
    {
        img: k,
        name: "Kaylie Love",
        rating: 5,
        description: "I can not recommend Hollywood nails enough . Always very kind and attentive. They always go above and beyond. Wouldn’t go anywhere else. Lovely family friendly place and welcoming.",
    },
];

const Feedback = () => {
    return (
        <div className="carousel-container">
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{
                    el: ".swiper-pagination",
                    clickable: true,
                }}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 10 },
                    768: { slidesPerView: 1, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                }}
                modules={[Navigation, Pagination]}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="slide-content">
                            <img src={testimonial.img} alt={testimonial.name} className="slide-image" />
                            <div className="slide-details">
                                <h3 className='font-bold text-[28px]'>{testimonial.name}</h3>
                                <p className='text-main text-[20px]'>{'★'.repeat(testimonial.rating)}</p>
                                <p className='text-sm'>{testimonial.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="tablet:hidden phone:hidden swiper-button-prev"></div>
            <div className="tablet:hidden phone:hidden swiper-button-next"></div>
            <div className="swiper-pagination"></div>
        </div>
    );
};

export default Feedback;
