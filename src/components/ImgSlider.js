import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./ImgSlider.css";

import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
        <div className="slider__image">
            <Slider {...settings} className="slider">
                <img className="sliderHome__image" src="/images/amazon-banner-1.jpg" alt="prime video banner 1"/>
                <img className="sliderHome__image" src="/images/amazon-banner-2.jpg" alt="prime video banner 2"/>
                <img className="sliderHome__image" src="/images/amazon-banner-3.jpg" alt="prime video banner 3"/>
                <img className="sliderHome__image" src="/images/amazon-banner-4.jpg" alt="prime video banner 4"/>
                <img className="sliderHome__image" src="/images/amazon-banner-5.jpg" alt="prime video banner 5"/>
                <img className="sliderHome__image" src="/images/amazon-banner-6.jpg" alt="prime video banner 6"/>
                <img className="sliderHome__image" src="/images/amazon-banner-7.jpg" alt="prime video banner 7"/>
            </Slider>
        </div>
    );
  }
}