import React from "react";
import Slider from "react-slick";
import "./CustomCarousel.scss";
import Card from "../Card/Card";

const CustomCarousel = ({ data }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        {data && data?.length
          ? data?.map((item: any, index: any) => {
              return (
                <div key={index}>
                  <Card cardData = {item} />
                </div>
              );
            })
          : null}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
