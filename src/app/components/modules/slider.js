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
        800: { slidesPerView: 2 },
        1000: { slidesPerView: 3 },
        1391: { slidesPerView: 4 },
      }}
      slidesPerView={1}
      spaceBetween={10}
      className="!p-2"
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