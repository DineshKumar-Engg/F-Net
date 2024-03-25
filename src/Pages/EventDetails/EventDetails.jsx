import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Styles/EventDetail.css'
const EventDetails = () => {
	return (
		<section className='eventDetailSec'>
			<Container className='eventDetailCont'>
				<Row>
					<Col lg={6} className='eventDetailColFirst'>
						<Row>
							<Col lg={12} className='eventDetailText'>
								<div>
                                    <h3>Christmas Festival</h3>
                                </div>
							</Col>
							<Col lg={12} className='eventDetailText'>
								<div>
									<span>Event Organizers</span>
								</div>
								<div>
									<h6>North Brunswick Youth Sports Festival</h6>
								</div>
							</Col>
							<Col lg={12} className='eventDetailText'>
								<div>
									<span>Address</span>
								</div>
								<div>
									<h6>132, My Street, Kingston, New York 12401.</h6>
								</div>
							</Col>
							<Col lg={12} className='eventDetailText'>
								<div>
									<h5>Event Description</h5>
								</div>
								<div>
									<h6>
										Save money with discounted adult single day tickets online
										Save valuable time & Bypass the ticket booth and enter the
										gate upon arrival Go contactless Save money with discounted
										adult single{' '}
									</h6>
								</div>
							</Col>
							<Col lg={12} className='eventDetailText'>
								<div>
									<h5>Event Announcement</h5>
								</div>
								<div>
									<h6>
										Save money with discounted adult single day tickets online{' '}
									</h6>
								</div>
							</Col>
							<Col lg={12} className='eventDetailText'>
								<div>
									<h5>Tickets</h5>
								</div>
								<div >
									<Row>
										<Col lg={11} className='eventDetailTicketList'>
                                            <Row>
                                            <Col lg={8}>
											<h5>03$ Unlimited Ticket </h5>
										</Col>
										<Col lg={4}>
											<button>Buy Tickets</button>
										</Col>
                                            </Row>
                                        </Col>
									</Row>
								</div>
							</Col>
						</Row>
					</Col>
					<Col lg={6}>
						
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default EventDetails;
