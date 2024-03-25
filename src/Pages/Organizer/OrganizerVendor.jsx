import React from 'react'
import Slider from "react-slick";
import Logo1 from '../../Assets/Image/Vendor/Carnival.svg'
import Logo2 from '../../Assets/Image/Vendor/LeadFest.svg'
import Logo3 from '../../Assets/Image/Vendor/carniv.png'
import Logo4 from '../../Assets/Image/Vendor/carniva.png'
import Logo5 from '../../Assets/Image/Vendor/nbysf.svg'
import { Container, Row, Col } from 'react-bootstrap';
import '../../Styles/Organizer.css'
const OrganizerVendor = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 5000,
        rows: 2,
        slidesPerRow: 2,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };

    return (
        <section className='slickVendor'>
            <Container fluid>
                <Row className='w-100 d-flex justify-content-center align-items-center flex-column'>
                    <Col lg={4} className="OrganizeListTitle">
                        <h3 className='w-100 text-white text-center'>Vendor</h3>
                    </Col>
                </Row>
                <div className="slider-container my-5">
                    <Slider {...settings}>
        <div>
          <img src={Logo1} alt="" />
        </div>
        <div>
        <img src={Logo2} alt="" />
        </div>
        <div>
        <img src={Logo3} alt="" />
        </div>
        <div>
        <img src={Logo4} alt="" />
        </div>
        <div>
        <img src={Logo2} alt="" />
        </div>
        <div>
        <img src={Logo1} alt="" />
        </div>
        <div>
        <img src={Logo3} alt="" />
        </div>
        <div>
        <img src={Logo4} alt="" />
        </div>
        <div>
        <img src={Logo1} alt="" />
        </div>
        <div>
        <img src={Logo3} alt="" />
        </div>
        <div>
        <img src={Logo4} alt="" />
        </div>
        <div>
        <img src={Logo2} alt="" />
        </div>
        <div>
        <img src={Logo4} alt="" />
        </div>
        <div>
        <img src={Logo3} alt="" />
        </div>
        <div>
        <img src={Logo2} alt="" />
        </div>
        <div>
        <img src={Logo1} alt="" />
        </div>
      </Slider>
                </div>

                <Row className='w-100 my-5 d-flex justify-content-center align-items-center'>
                    <Col lg={12} className='w-100 d-flex justify-content-center align-items-center'>
                        <button type="button" className='vendorBtn'>Vendor Click Here</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default OrganizerVendor