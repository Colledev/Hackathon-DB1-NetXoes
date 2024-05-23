import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Hero = () => {
    const images = [
        "/backgrounds/Background NetXoes 1.jpg",
        "/backgrounds/Background NetXoes caps.jpg",
        "/backgrounds/Background NetXoes Soccer.jpg",
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative pt-16">
            <img
                src={images[currentImageIndex]}
                className="w-full max-h-[500px] object-cover"
                alt={`Slide ${currentImageIndex + 1}`}
            />
            <div className="absolute top-1/2 left-4">
                <div>
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
            </div>
            <div className="absolute top-1/2 right-4">
                <div>
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
            </div>
        </div>
    );
};

export default Hero;
