import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import img from './assets/background4.jpg';
import img1 from './assets/Egyptian man.jpeg';
import img2 from './assets/download1.jpeg';
import img3 from './assets/download2.jpeg';

const slides = [
  {
    image: img1,
    title:
      'Flagpole has helped us reach our KPIs more than twice as fast as any other agency promised. Ali & Omar are awesome! They are incredibly knowledgeable and their communication is top-notch. If anybody is looking for a Digital Marketing agency, Flagpole should be your only choice!',
  },
  {
    image: img2,
    title:
      'For the past three years, we’ve worked with Flagpole, and it’s been a great experience. With their help, NESAA has grown exponentially in the past few years. Ali and Omar have been amazing—always there to guide and support us. If you’re looking to grow your E-commerce business, I highly recommend working with them.',
  },
  {
    image: img3,
    title:
      'Huge shout out to Omar & Ali at Flagpole. We’ve come leaps and bounds over a year. We can count on Omar and Ali to be consistent and we are excited to do business with them for years to come.',
  },
];

export default function App() {
  return (
    <div className="w-full  bg-black flex items-center justify-center px-4 sm:px-8 md:px-16">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper w-full max-w-6xl"
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="h-auto bg-blue-950 flex items-center justify-center text-white text-2xl font-bold rounded-xl px-4 py-8 mt-5 sm:px-8 md:px-16"
              
            >
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
                <img
                  src={slide.image}
                  alt=""
                  className="w-24 h-24 md:w-32 md:h-32 object-cover object-center rounded-full shadow-lg"
                />
                <p className="text-sm md:text-base w-full md:w-3/4 text-center md:text-left leading-relaxed">
                  {slide.title}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
