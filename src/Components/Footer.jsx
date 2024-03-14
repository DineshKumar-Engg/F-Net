import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactIcon from '../Assets/Image/Footer/ContactIcon.svg';
import FestivTicketLogo from '../Assets/Image/Footer/FestivTicketLogo.svg';
import MailIcon from '../Assets/Image/Footer/MailIcon.svg';
import sigurLogo from '../Assets/Image/Footer/sigurLogo.svg';
import '../Styles/Header.css';

const Footer = () => {
	return (
		<Container fluid>
			<section className='footerCont'>
				<Container>
					<Row>
						<Col>
							<Row>
								<Col lg={12}>
									<img src={FestivTicketLogo} alt='' />
								</Col>
								<Col lg={12}>
									<img src={sigurLogo} alt='' />
								</Col>
							</Row>
						</Col>
						<Col className='footerSiteMap'>
							<Row>
								<h2>SITE MAP</h2>
							</Row>
							<Row>
								<div>
									<a href=''>Home</a>
								</div>
								<div>
									<a href=''>Event Highlights</a>
								</div>
								<div>
									<a href=''>Find Your Events</a>
								</div>
								<div>
									<a href=''>Organize Events</a>
								</div>
								<div>
									<a href=''>Sponsor</a>
								</div>
								<div>
									<a href=''>Vendor</a>
								</div>
								<div>
									<a href=''>Privacy, Terms & Cookies</a>
								</div>
							</Row>
						</Col>
						<Col className='footerInfo'>
							<Row>
								<h2>Contact Us</h2>
							</Row>
							<Row className='footerInfotext'>
								<Col>
									<Row>
										<Col lg={1} className='footerInfotextCol'>
											<img src={ContactIcon} alt='' />
										</Col>
										<Col>
											<h4>7326789900</h4>
										</Col>
									</Row>
								</Col>
								<Col>
									<Row>
										<Col lg={1}>
											<img src={MailIcon} alt='' />
										</Col>
										<Col>
											<h4>FestivadminNew@gmail.com</h4>
										</Col>
									</Row>
								</Col>
							</Row>
							<Row className='footerInfoUpdate'>
								<Col lg={12}>
									<h4>Stay Connected</h4>
								</Col>
								<Col lg={12}>
									<h6>
										Don’t be left behind! Sign up today for the latest
										entertainment updates!
									</h6>
								</Col>
								<Col>
									<Row>
										<Col lg={8}>
											<input
												type='email'
												name=''
												id=''
												placeholder='Enter Your Email'
											/>
										</Col>
										<Col lg={4}>
											<button type='button'>Get Updates</button>
										</Col>
									</Row>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>
		</Container>
	);
};

export default Footer;
