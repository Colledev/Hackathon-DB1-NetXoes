import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

const Hero = () => {
    const images = [
        "/backgrounds/Background NetXoes 1.jpg",
        "/backgrounds/Background NetXoes caps.jpg",
        "/backgrounds/Background NetXoes Soccer.jpg",
    ];

    const [swiper, setSwiper] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const updateCurrentImageIndex = (swiper) => {
        const activeIndex = swiper.realIndex % images.length;
        setCurrentImageIndex(
            activeIndex >= 0 ? activeIndex : images.length + activeIndex
        );
    };

    const prevSlide = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };

    const nextSlide = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goToSlide = (index) => {
        if (swiper !== null) {
            swiper.slideTo(index);
        }
    };

    return (
        <div className="relative pt-16">
            <Swiper
                spaceBetween={-1}
                slidesPerView={1}
                onSlideChange={(swiper) => updateCurrentImageIndex(swiper)}
                onSwiper={(swiper) => setSwiper(swiper)}
                loop={true}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={image}
                            className="w-full max-h-[500px] object-cover"
                            alt={`Slide ${index + 1}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute top-1/2 left-4 z-10">
                <button onClick={prevSlide}>
                    <div className="rounded-full bg-white p-2 w-[40px] h-[40px]">
                        <ArrowBackIosNewIcon
                            style={{
                                marginLeft: "-2px",
                                marginBottom: "2px",
                            }}
                        />
                    </div>
                </button>
            </div>
            <div className="absolute top-1/2 right-4 z-10">
                <button onClick={nextSlide}>
                    <div className="rounded-full bg-white p-2 w-[40px] h-[40px]">
                        <ArrowForwardIosIcon
                            style={{
                                marginLeft: "2px",
                                marginBottom: "2px",
                            }}
                        />
                    </div>
                </button>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center z-10">
                <div>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`inline-block w-3 h-3 rounded-full mx-1 cursor-pointer ${
                                index === currentImageIndex
                                    ? "bg-black"
                                    : "bg-white"
                            }`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
