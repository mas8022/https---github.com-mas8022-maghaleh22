"use client";
import React from "react";
import Cart from "./cart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Sliders = () => {
  return (
    <Swiper
      breakpoints={{
        100: {slidesPerView: 1},
        800: { slidesPerView: 2 },
        1000: { slidesPerView: 3 },
        1391: { slidesPerView: 4 },
      }}
      slidesPerView={4}
      spaceBetween={10}
      className="!p-2 overflow-hidden rounded-xl"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
      loop={true}
    >
      <SwiperSlide className="!flex items-center justify-center">
        <Cart />
      </SwiperSlide>
      <SwiperSlide className="!flex items-center justify-center">
        <Cart />
      </SwiperSlide>
      <SwiperSlide className="!flex items-center justify-center">
        <Cart />
      </SwiperSlide>
      <SwiperSlide className="!flex items-center justify-center">
        <Cart />
      </SwiperSlide>
      <SwiperSlide className="!flex items-center justify-center">
        <Cart />
      </SwiperSlide>
      <SwiperSlide className="!flex items-center justify-center">
        <Cart />
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliders;
