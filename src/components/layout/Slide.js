import React, { Component } from "react";
import Slider from "react-slick";
import JohnMayerImg from "../../../dist/images/jm.png";
import FunImg from "../../../dist/images/fun.jpeg";
import SirPaulImg from "../../../dist/images/sirpaul.jpg";
import AustinImg from "../../../dist/images/austin.jpg";
import NewYorkImg from "../../../dist/images/newyork.jpg";
import SanFranciscoImg from "../../../dist/images/san-francisco.jpg";
import FrankErwinImg from "../../../dist/images/FrankErwin.jpg";
import MadisonGardenImg from "../../../dist/images/madisonGarden.jpg";
import ApolloImg from "../../../dist/images/apollo.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="slider-container">
        <Slider className="slideshow" {...settings}>
          <div className="slideshow" sytle={{ width: 100 }}>
            <div className="slider-text-container">
              <p className="slider-text">Some text will go here</p>
            </div>
            <img className="slider-image" src={JohnMayerImg} />
            <div className="slider-text-container">
              <p className="slider-text">Some text will go here</p>
            </div>
            <img className="slider-image" src={FunImg} />
            <div className="slider-text-container">
              <p className="slider-text">Some text will go here</p>
            </div>
            <img className="slider-image" src={SirPaulImg} />
          </div>
          <div className="slideshow">
            <img className="slider-image" src={AustinImg} />
            <div className="slider-text-container">
              <p className="slider-text">Some text will go here</p>
            </div>
            <img className="slider-image" src={NewYorkImg} />
            <div className="slider-text-container">
              <p className="slider-text">Some text will go here</p>
            </div>
            <img className="slider-image" src={SanFranciscoImg} />
            <div className="slider-text-container">
              <p className="slider-text">Some text will go here</p>
            </div>
          </div>
          <div className="slideshow">
            <div className="slider-text-container">
              <p className="slider-text">Some text will go here</p>
            </div>
            <img className="slider-image" src={FrankErwinImg} />
            <div className="slider-text-container">
              <p className="slider-text">Some text will go here</p>
            </div>
            <img className="slider-image" src={MadisonGardenImg} />
            <div className="slider-text-container">
              <p className="slider-text">Some text will go here</p>
            </div>
            <img className="slider-image" src={ApolloImg} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;
