import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import react icons

import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import  proPic from "../assets/profile.jpg";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";


const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10">Our Customers</h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                {/* <FaStar /> */}
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                Fantastic site! The vast selection of books and easy navigation make finding my next read a breeze. The checkout process is smooth, and shipping is fast. Highly recommend it!
                </p>
                <Avatar
                  img={p3}
                  alt="avatar of Jese"
                  rounded
                   className="w-10 mb-4 rounded-full"
                />
                <h5 className="text-lg font-medium ">Mark Ping</h5>
                <p className="text-base">Writer</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                {/* <FaStar /> */}
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                A wonderful platform for book lovers! The categories are well-organized, and I appreciate the helpful reviews. Customer service is responsive and friendly. Definitely my go-to book site now.
                </p>
                <Avatar
                  img={p1}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 rounded-full"
                />
                <h5 className="text-lg font-medium ">John Martin</h5>
                <p className="text-base">Author</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                {/* <FaStar /> */}
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                Amazing experience! The book variety is extensive, and the website design is user-friendly. I always find something new and exciting to read. A perfect site for book enthusiasts.</p>
                <Avatar
                  img={p2}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 rounded-full"
                />
                <h5 className="text-lg font-medium "> David Thompson </h5>
                <p className="text-base">Book Blogger</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                {/* <FaStar /> */}
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                Great book selection and excellent service! The website is straightforward to use, and I love the detailed descriptions. Fast shipping and secure payment options make shopping here enjoyable.</p>
                <Avatar
                  img={p3}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 rounded-full"
                />
                <h5 className="text-lg font-medium ">Emily Davis</h5>
                <p className="text-base">Librarian</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                {/* <FaStar /> */}
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                Love this website! Easy to navigate with a fantastic range of books. The customer support team is very helpful, and the prices are reasonable. A must-visit for every reader!</p>
                <Avatar
                  img={p4}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 rounded-full"
                />
                <h5 className="text-lg font-medium ">Michael Brown</h5>
                <p className="text-base">Editor, XYZ Publishing</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                {/* <FaStar /> */}
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-5">
                A brilliant website with an impressive range of books across all genres. The process from browsing to purchasing is seamless, and the special deals are a great bonus. I highly recommend this site to all avid readers.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4 rounded-full"
                />
                <h5 className="text-lg font-medium ">Lisa Patel</h5>
                <p className="text-base">Freelance Writer</p>
              </div>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
