import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Carousel = ({ photos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider className="slider" {...settings}>
      {photos.map(photo => (
        <div className="slider-item">
          <img src={'/images/spot/' + photo + '.jpg'} alt="" />
        </div>
      ))}
    </Slider>
  );
};
