'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,          // affiche les petits points en bas
    infinite: true,      // boucle infinie
    speed: 500,          // vitesse de transition
    slidesToShow: 1,     // nombre de slides visibles
    slidesToScroll: 1    // nombre de slides à faire défiler
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <Slider {...settings}>
        <div><img src="/1.jpg" alt="1" /></div>
        <div><img src="/2.jpg" alt="1" /></div>
        <div><img src="/3.webp" alt="1" /></div>
        <div><img src="/4.webp" alt="1" /></div>
      </Slider>
    </div>
  );
};

export default Carousel;