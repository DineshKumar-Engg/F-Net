import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import BannerOne from "../../Assets/Image/Home/BannerOne.webp";
import BannerTwo from "../../Assets/Image/Home/BannerTwo.webp";
import BannerThree from "../../Assets/Image/Home/BannerThree.webp";
import BannerFour from "../../Assets/Image/Home/BannerFour.webp";
import BannerFive from "../../Assets/Image/Home/BannerFive.webp";
import BannerSix from "../../Assets/Image/Home/BannerSix.webp";
import BannerSeven from "../../Assets/Image/Home/BannerSeven.webp";
import '../../Styles/Home.css'


const Banner = () => {
    
  return (
    <Container fluid className="homebannerCont">
        <section className="Homebanner">
        <Carousel fade slide={false} interval={null}>
          <Carousel.Item>
            <img
              className="Carousel-items-set"
              src={BannerOne}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carousel-items-set"
              src={BannerTwo}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="Carousel-items-set"
              src={BannerThree}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" Carousel-items-set"
              src={BannerFour}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" Carousel-items-set"
              src={BannerFive}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" Carousel-items-set"
              src={BannerSix}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" Carousel-items-set"
              src={BannerSeven}
              alt="Third slide"
            />
          </Carousel.Item>
          <div className="container-fluid bannerMarquee">
              <Marquee>
                    <h5>Festival Season Is Here !!! Stay Tuned ! Festival Season Is Here !!! Stay Tuned ! Festival Season Is Here !!! Stay Tuned ! Festival Season Is Here !!! Stay Tuned ! Festival Season Is Here !!! Stay Tuned !</h5>
              </Marquee>
        </div>
        </Carousel>
      </section>
    </Container>
  );
};

export default Banner;
