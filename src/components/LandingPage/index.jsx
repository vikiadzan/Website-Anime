// pages/index.js

"use client"
// pages/index.js
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = ({ api }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let currentIndex = 0;

    const handleNext = () => {
      currentIndex = (currentIndex + 1) % api.data.length;
      updateSlider();
    };

    const updateSlider = () => {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const intervalId = setInterval(handleNext, 5000); // Auto slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [api.data]);

  return (
    <div className="slider-container">
      <div ref={sliderRef} className="slider">
        {api.data?.map((anime) => (
          <Link
            key={anime.mal_id}
            href={`/anime/${anime.mal_id}`}
            className="slider-item"
          >
            <Image
              src={anime.images.webp.image_url}
              alt={anime.title}
              width={200}
              height={350}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
