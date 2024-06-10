"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import CommentBox from "../modules/commentBox";

const CommentsSlider = () => {
  return (
    <Swiper
      breakpoints={{
        100: { slidesPerView: 1 },
        800: { slidesPerView: 2 },
        1000: { slidesPerView: 3 },
      }}
      spaceBetween={50}
      slidesPerView={3}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
      loop={true}
      className="!p-2"
    >
      <SwiperSlide>
        <CommentBox />
      </SwiperSlide>
      <SwiperSlide>
        <CommentBox />
      </SwiperSlide>
      <SwiperSlide>
        <CommentBox />
      </SwiperSlide>
      <SwiperSlide>
        <CommentBox />
      </SwiperSlide>
    </Swiper>
  );
};

export default CommentsSlider;
