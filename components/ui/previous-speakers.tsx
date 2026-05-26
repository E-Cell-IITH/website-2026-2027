"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const Carousel_003 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  images: { src: string; alt: string; name: string; role: string }[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const css = `
  .Carousal_003 {
    width: 100%;
    height: 450px;
    padding-bottom: 50px !important;
  }
  
  .Carousal_003 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 320px;
    border-radius: 1rem;
    overflow: hidden;
  }

  .swiper-pagination-bullet {
    background-color: #fff !important;
    opacity: 0.3;
  }
  .swiper-pagination-bullet-active {
    background-color: #fff !important;
    opacity: 1;
  }
`;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`relative w-full max-w-6xl px-5 mx-auto ${className || ""}`}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                delay: 2500,
                disableOnInteraction: true,
              }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                clickable: true,
              }
              : false
          }
          navigation={
            showNavigation
              ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
              : false
          }
          className="Carousal_003"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="relative group">
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={image.src}
                alt={image.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-1">{image.name}</h3>
                <p className="text-sm font-mono text-zinc-400">{image.role}</p>
              </div>
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-8 w-8 text-white drop-shadow-lg" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-8 w-8 text-white drop-shadow-lg" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export function PreviousSpeakers() {
  const speakers = [
    {
      src: "/speakers/Upasana.jpg",
      alt: "Upasana",
      name: "Upasana Kamineni",
      role: "VC of the Apollo Foundation and Apollo Life, Founder and MD of URLife",
    },
    {
      src: "/speakers/Anup Gupta.jpeg",
      alt: "Anup Gupta",
      name: "Anup Gupta",
      role: "Founder and CEO of MathonGo",
    },
    {
      src: "/speakers/Ashish_Arora.jpeg",
      alt: "Ashish Arora",
      name: "Ashish Arora",
      role: "Founder and Chief Mentor of Physics Galaxy",
    },
    {
      src: "/speakers/Akhil Gupta, Founder, Nobroker.jpg",
      alt: "Akhil Gupta",
      name: "Akhil Gupta",
      role: "Founder, No Broker",
    },
    {
      src: "/speakers/Devvrat Arya - VP of Technology, Pepperfry.jpg",
      alt: "Devvrat Arya",
      name: "Devvrat Arya",
      role: "VP of Technology, Pepperfry",
    },
    {
      src: "/speakers/TN Hari - HR Head, BigBasket.jpg",
      alt: "TN Hari",
      name: "TN Hari",
      role: "HR Head, Big Basket",
    },
    {
      src: "/speakers/Shashank Randev - Founder VC, 100X.VC.jpg",
      alt: "Shashank Randev",
      name: "Shashank Randev",
      role: "Founder VC, 100X.VC",
    },
  ];

  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-32 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl mb-16 text-center">
        <h2 className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-4">Insights From</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Previous Speakers</h3>
      </div>

      <div className="w-full">
        <Carousel_003
          images={speakers}
          showPagination={true}
          showNavigation={true}
          autoplay={true}
          loop={true}
        />
      </div>
    </section>
  );
}
