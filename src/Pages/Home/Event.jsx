import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../Styles/Home.css";
import CardImageOne from "../../Assets/Image/Home/cardone.svg";
import CardImageTow from "../../Assets/Image/Home/cardTwo.svg";
import CardImageThree from "../../Assets/Image/Home/cardThree.svg";
import CardImageFour from "../../Assets/Image/Home/cardFour.svg";
import LocationImage from "../../Assets/Image/Home/LocationImage.svg";
import TimeImage from "../../Assets/Image/Home/TimeImage.svg";
import CalenderImage from "../../Assets/Image/Home/CalenderImage.svg";

const Event = () => {
  return (
    <Container fluid>
      <section className="homeEvent">
        <Row className="w-100 d-flex justify-content-center align-items-center">
          <Col lg={3} className="homeEventTitle">
            <h3>Event Highlights</h3>
          </Col>
        </Row>
        <Container>
          <Row className="CardEventTemplateRow">
            <Col lg={3} className="CardEventTemplate">
              <Row className="CardEventTemplateBanner">
                <img src={CardImageOne} alt="" />
              </Row>
              <Row>
                <h4>Carousel Ride Events</h4>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={LocationImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>
                    Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
                    65584-5678.
                  </h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={TimeImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>10:00pm - 12:00pm</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={CalenderImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>May 17,2024 - May 20,2024</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <div className="cardEventTemplateBtnText">
                <Col lg={6}>
                  <button>Buy Ticket</button>
                </Col>
                <Col lg={6}>
                  <div>View Events</div>
                </Col>
                </div>
              </Row>
            </Col>
            <Col lg={3} className="CardEventTemplate">
              <Row className="CardEventTemplateBanner">
                <img src={CardImageTow} alt="" />
              </Row>
              <Row>
                <h4>Carousel Ride Events</h4>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={LocationImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>
                    Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
                    65584-5678.
                  </h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={TimeImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>10:00pm - 12:00pm</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={CalenderImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>May 17,2024 - May 20,2024</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <div className="cardEventTemplateBtnText">
                <Col lg={6}>
                  <button>Buy Ticket</button>
                </Col>
                <Col lg={6}>
                  <div>View Events</div>
                </Col>
                </div>
              </Row>
            </Col>
            <Col lg={3} className="CardEventTemplate">
              <Row className="CardEventTemplateBanner">
                <img src={CardImageThree} alt="" />
              </Row>
              <Row>
                <h4>Carousel Ride Events</h4>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={LocationImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>
                    Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
                    65584-5678.
                  </h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={TimeImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>10:00pm - 12:00pm</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={CalenderImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>May 17,2024 - May 20,2024</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <div className="cardEventTemplateBtnText">
                <Col lg={6}>
                  <button>Buy Ticket</button>
                </Col>
                <Col lg={6}>
                  <div>View Events</div>
                </Col>
                </div>
              </Row>
            </Col>
            <Col lg={3} className="CardEventTemplate">
              <Row className="CardEventTemplateBanner">
                <img src={CardImageFour} alt="" />
              </Row>
              <Row>
                <h4>Carousel Ride Events</h4>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={LocationImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>
                    Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
                    65584-5678.
                  </h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={TimeImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>10:00pm - 12:00pm</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={CalenderImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>May 17,2024 - May 20,2024</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <div className="cardEventTemplateBtnText">
                <Col lg={6}>
                  <button>Buy Ticket</button>
                </Col>
                <Col lg={6}>
                  <div>View Events</div>
                </Col>
                </div>
              </Row>
            </Col>
            <Col lg={3} className="CardEventTemplate">
              <Row className="CardEventTemplateBanner">
                <img src={CardImageOne} alt="" />
              </Row>
              <Row>
                <h4>Carousel Ride Events</h4>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={LocationImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>
                    Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
                    65584-5678.
                  </h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={TimeImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>10:00pm - 12:00pm</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={CalenderImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>May 17,2024 - May 20,2024</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <div className="cardEventTemplateBtnText">
                <Col lg={6}>
                  <button>Buy Ticket</button>
                </Col>
                <Col lg={6}>
                  <div>View Events</div>
                </Col>
                </div>
              </Row>
            </Col>
            <Col lg={3} className="CardEventTemplate">
              <Row className="CardEventTemplateBanner">
                <img src={CardImageThree} alt="" />
              </Row>
              <Row>
                <h4>Carousel Ride Events</h4>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={LocationImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>
                    Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
                    65584-5678.
                  </h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={TimeImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>10:00pm - 12:00pm</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={CalenderImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>May 17,2024 - May 20,2024</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <div className="cardEventTemplateBtnText">
                <Col lg={6}>
                  <button>Buy Ticket</button>
                </Col>
                <Col lg={6}>
                  <div>View Events</div>
                </Col>
                </div>
              </Row>
            </Col>
            <Col lg={3} className="CardEventTemplate">
              <Row className="CardEventTemplateBanner">
                <img src={CardImageTow} alt="" />
              </Row>
              <Row>
                <h4>Carousel Ride Events</h4>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={LocationImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>
                    Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
                    65584-5678.
                  </h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={TimeImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>10:00pm - 12:00pm</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={CalenderImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>May 17,2024 - May 20,2024</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <div className="cardEventTemplateBtnText">
                <Col lg={6}>
                  <button>Buy Ticket</button>
                </Col>
                <Col lg={6}>
                  <div>View Events</div>
                </Col>
                </div>
              </Row>
            </Col>
            <Col lg={3} className="CardEventTemplate">
              <Row className="CardEventTemplateBanner">
                <img src={CardImageTow} alt="" />
              </Row>
              <Row>
                <h4>Carousel Ride Events</h4>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={LocationImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>
                    Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
                    65584-5678.
                  </h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={TimeImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>10:00pm - 12:00pm</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <Col lg={2}>
                  <img src={CalenderImage} alt="" />
                </Col>
                <Col lg={10}>
                  <h5>May 17,2024 - May 20,2024</h5>
                </Col>
              </Row>
              <Row className="cardEventTemplateText">
                <div className="cardEventTemplateBtnText">
                <Col lg={6}>
                  <button>Buy Ticket</button>
                </Col>
                <Col lg={6}>
                  <div>View Events</div>
                </Col>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
};

export default Event;
