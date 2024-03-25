import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BannerFive from '../../Assets/Image/Home/BannerTwo.webp';
import CancelBtn from '../../Assets/Image/CancelBtn.svg';
import '../../Styles/Ticket.css';
import OrgLogo from '../../Assets/Image/nbysf.svg';

const BuyTicket = () => {
	const TicketBuy = [
		{
			TicketOrg: OrgLogo,
			EventName: 'Chirstmas Festival',
			TicketName: '3$ Unlimited Ticket',
			TicketType: 'General',
			price: '5.56',
			quantity: 3,
		},
		{
			TicketOrg: OrgLogo,
			EventName: 'Winter Festival',
			TicketName: 'Combo Ticket',
			TicketType: 'Vlounteer',
			price: '5.56',
			quantity: 4,
		},
		{
			TicketOrg: OrgLogo,
			EventName: 'Car Ride Festival',
			TicketName: '15$ Kids Ticket',
			TicketType: 'FrontLine Worker',
			price: '5.56',
			quantity: 5,
		},
		{
			TicketOrg: OrgLogo,
			EventName: 'Carnival Festival',
			TicketName: '3$ Ferris Riders Ticket',
			TicketType: 'Staff',
			price: '5.56',
			quantity: 2,
		},
	];

	return (
		<main>
			<section className='TicketListBanner'>
				<Container
					fluid
					className='homebannerCont OrganizerBanner'
					style={{ backgroundImage: `url(${BannerFive})` }}></Container>
			</section>

			<section className='buyticketMain'>
				<Container className='buyticketCont'>
					{TicketBuy?.map((item, index) => (
						<Row key={index} className='buyticketRow'>
							<Col lg={2}>
								<img src={item?.TicketOrg} alt='' />
							</Col>
							<Col lg={3}>
								<div>
									<h6>Event Name</h6>
								</div>
								<div>
									<h5 className='buyticketRowEvent'>{item?.EventName}</h5>
								</div>
							</Col>
							<Col lg={2}>
								<div>
									<h6>Ticket Name</h6>
								</div>
								<div>
									<h5>{item?.TicketName}</h5>
								</div>
							</Col>
							<Col lg={2}>
								<div>
									<h6>Ticket Name</h6>
								</div>
								<div className='d-flex buyticketRowSelect'>
									<div>
										<h5>{item?.TicketType}</h5>
									</div>
									<div>
										<select name='' id=''>
											<option value=''>Qty</option>
											{Array.from(
												{
													length: item.quantity,
												},
												(_, index) => index + 1,
											).map((value) => (
												<option key={value} value={value}>
													{value}
												</option>
											))}
										</select>
									</div>
								</div>
							</Col>
							<Col lg={2}>
								<div>
									<h6>Total Ticket Price</h6>
								</div>
								<div>
                                    <h5>$ {item?.price}</h5>
                                </div>
							</Col>
							<Col lg={1}>
								<button type='button'>
									<img src={CancelBtn} alt='' />
								</button>
							</Col>
						</Row>
					))}
				</Container>
			</section>
		</main>
	);
};

export default BuyTicket;
