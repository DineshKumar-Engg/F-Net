import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Styles/Ticket.css';
import BannerThree from '../../Assets/Image/Home/BannerFive.webp';
import { Cities, TicketType } from '../../Contant';
import { MultiSelect } from 'primereact/multiselect';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import Dropdown from 'react-bootstrap/Dropdown';
import selectArrow from '../../Assets/Image/selectArrow.webp';
import LocationIcon from '../../Assets/Image/LocationIcon.svg';
import calenderIcon from '../../Assets/Image/calenderIcon.svg';
import TicketIcon from '../../Assets/Image/TicketIcon.svg';



const Ticket = () => {
	const [selectedCities, setSelectedCities] = useState(null);
	const [dateRange, setDateRange] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);
	const [date, setdate] = useState('');
	const handleSelect = (ranges) => {
		setDateRange([ranges.selection]);
		if (ranges?.selection?.startDate && ranges?.selection?.endDate) {
			const formattedStartDate = format(ranges?.selection?.startDate, 'yyyy-MM-dd');
			const formattedEndDate = format(ranges?.selection?.endDate, 'yyyy-MM-dd');
			const formattedRange = `${formattedStartDate}/${formattedEndDate}`;
			setdate(formattedRange);
		}
	};

	return (
		<main>
			<section className='TicketListBanner'>
				<Container
					fluid
					className='homebannerCont OrganizerBanner'
					style={{ backgroundImage: `url(${BannerThree})` }}></Container>
			</section>

			<section className='TicketListFilters'>
				<Container>
					<Row className='homeEventSelectMain'>
						<Col lg={12} className='w-100 d-flex justify-content-center align-items-center'>
							<Row className='homeEventSelect'>
								<Col lg={4} className='homeEventSelectCol'>
									<MultiSelect
										value={selectedCities}
										onChange={(e) => setSelectedCities(e.value)}
										options={Cities}
										optionLabel='name'
										placeholder='Select Location'
										maxSelectedLabels={3}
										className='w-full  locate'
									/>
								</Col>
								<Col lg={4} className='homeEventSelectCol'>
									<MultiSelect
										value={selectedCities}
										onChange={(e) => setSelectedCities(e.value)}
										options={Cities}
										optionLabel='name'
										placeholder='Select Category'
										maxSelectedLabels={3}
										className='w-full  locate'
									/>
								</Col>
								<Col lg={4} className='homeEventSelectCol DateRangeBg'>
									<Dropdown className='locate'>
										<Dropdown.Toggle id='dropdown-basic'>
											Select Date
											<img src={selectArrow} alt='' />
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<DateRange ranges={dateRange} onChange={handleSelect} />
										</Dropdown.Menu>
									</Dropdown>
								</Col>
								<Col lg={4} className='homeEventSelectCol'>
									<MultiSelect
										value={selectedCities}
										onChange={(e) => setSelectedCities(e.value)}
										options={Cities}
										optionLabel='name'
										placeholder='Select Event Organization'
										maxSelectedLabels={3}
										className='w-full locate'
									/>
								</Col>
								<Col lg={4} className='homeEventSelectCol'>
									<MultiSelect
										value={selectedCities}
										onChange={(e) => setSelectedCities(e.value)}
										options={Cities}
										optionLabel='name'
										placeholder='Select Event'
										maxSelectedLabels={3}
										className='w-full locate'
									/>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</section>

			<section className='ticketListMain'>
				<Container className='ticketListCon'>
					<Row>
						<Col lg={12} className='ticketListTitle'>
							<h3>Chirstmas Festival</h3>
						</Col>
						<Col lg={12} className='ticketListEventOrg'>
							<div>
								<h6>Event Organizers</h6>
							</div>
							<div>
								<h6>North Brunswick Youth Sports Festival</h6>
							</div>
						</Col>
						<Col lg={12} className='ticketListEventLocat'>
							<Row>
								<Col lg={7}>
									<div>
										<h5>Event Location</h5>
									</div>
									<div className='d-flex my-1'>
										<img src={LocationIcon} alt='' />
										<h6 className='px-2'>Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO 65584-5678.</h6>
									</div>
								</Col>
								<Col lg={5}>
									<div>
										<h5>Event Date</h5>
									</div>
									<div className='d-flex my-1'>
										<img src={calenderIcon} alt='' />
										<h6 className='px-2'>Aug 5 - Aug 25, 2024</h6>
									</div>
								</Col>
							</Row>
						</Col>
						<Col lg={12} className='ticketListTicketTitle'>
							<Col lg={7}>
								<div className='d-flex'>
									<img src={TicketIcon} alt='' />
									<h3 className='px-2'>Battle of the Barrels Ticket </h3>
								</div>
							</Col>
							<Col lg={5} className='ticketListTicketDate'>
								<div>
									<h5>Ticket Date</h5>
								</div>
								<div className='d-flex my-1'>
									<img src={calenderIcon} alt='' />
									<h6 className='px-2'>Aug 5 - Aug 25, 2024</h6>
								</div>
							</Col>
						</Col>
						<Col lg={12} className='ticketListTicketContent'>
							<Col lg={6} className='ticketListTicketText'>
								<div>
									<h5>Description</h5>
									<p>
										Save money with discounted adult single day tickets online Save valuable time &
										Bypass the ticket booth and enter the gate upon arrival Go contactless Save
										money with discounted adult single{' '}
									</p>
								</div>
								<div>
									<h5>Announcement</h5>
									<p>
										Save money with discounted adult single day tickets online Save valuable time &
										Bypass the ticket booth and enter the gate upon arrival Go contactless Save
										money with discounted adult single{' '}
									</p>
								</div>
							</Col>
							<Col lg={4} className='ticketListTicketSelect'>
								{TicketType?.map((item, index) => (
									<Row key={index} className='ticketListTicketSelectRow'>
										<Col lg={6} className='ticketListTicketSelectColFirst'>
											<h5>{item?.TicketTypeName}</h5>
										</Col>
										<Col lg={3} className='ticketListTicketSelectColTow'>
											<h4>$ {item?.price}</h4>
										</Col>
										<Col lg={3}>
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
										</Col>
									</Row>
								))}
							</Col>
							<Col lg={2} className='ticketListTicketButton'>
								<button type='button'>Buy Ticket</button>
							</Col>
						</Col>

						<hr />

						<Col lg={12} className='ticketListTicketTitle'>
							<Col lg={7}>
								<div className='d-flex'>
									<img src={TicketIcon} alt='' />
									<h3 className='px-2'>Water Magic Show Ticket  </h3>
								</div>
							</Col>
							<Col lg={5} className='ticketListTicketDate'>
								<div>
									<h5>Ticket Date</h5>
								</div>
								<div className='d-flex my-1'>
									<img src={calenderIcon} alt='' />
									<h6 className='px-2'>Aug 5 - Aug 25, 2024</h6>
								</div>
							</Col>
						</Col>
						<Col lg={12} className='ticketListTicketContent'>
							<Col lg={6} className='ticketListTicketText'>
								<div>
									<h5>Description</h5>
									<p>
										Save money with discounted adult single day tickets online Save valuable time &
										Bypass the ticket booth and enter the gate upon arrival Go contactless Save
										money with discounted adult single{' '}
									</p>
								</div>
								<div>
									<h5>Announcement</h5>
									<p>
										Save money with discounted adult single day tickets online Save valuable time &
										Bypass the ticket booth and enter the gate upon arrival Go contactless Save
										money with discounted adult single{' '}
									</p>
								</div>
							</Col>
							<Col lg={4} className='ticketListTicketSelect'>
								{TicketType?.map((item, index) => (
									<Row key={index} className='ticketListTicketSelectRow'>
										<Col lg={6} className='ticketListTicketSelectColFirst'>
											<h5>{item?.TicketTypeName}</h5>
										</Col>
										<Col lg={3} className='ticketListTicketSelectColTow'>
											<h4>$ {item?.price}</h4>
										</Col>
										<Col lg={3}>
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
										</Col>
									</Row>
								))}
							</Col>
							<Col lg={2} className='ticketListTicketButton'>
								<button type='button'>Buy Ticket</button>
							</Col>
						</Col>
					</Row>
				</Container>


				<Container className='ticketListCon'>
					<Row>
						<Col lg={12} className='ticketListTitle'>
							<h3>Winter Show Festival</h3>
						</Col>
						<Col lg={12} className='ticketListEventOrg'>
							<div>
								<h6>Event Organizers</h6>
							</div>
							<div>
								<h6>North Brunswick Youth Sports Festival</h6>
							</div>
						</Col>
						<Col lg={12} className='ticketListEventLocat'>
							<Row>
								<Col lg={7}>
									<div>
										<h5>Event Location</h5>
									</div>
									<div className='d-flex my-1'>
										<img src={LocationIcon} alt='' />
										<h6 className='px-2'>Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO 65584-5678.</h6>
									</div>
								</Col>
								<Col lg={5}>
									<div>
										<h5>Event Date</h5>
									</div>
									<div className='d-flex my-1'>
										<img src={calenderIcon} alt='' />
										<h6 className='px-2'>Aug 5 - Aug 25, 2024</h6>
									</div>
								</Col>
							</Row>
						</Col>
						<Col lg={12} className='ticketListTicketTitle'>
							<Col lg={7}>
								<div className='d-flex'>
									<img src={TicketIcon} alt='' />
									<h3 className='px-2'>Battle of the Barrels Ticket </h3>
								</div>
							</Col>
							<Col lg={5} className='ticketListTicketDate'>
								<div>
									<h5>Ticket Date</h5>
								</div>
								<div className='d-flex my-1'>
									<img src={calenderIcon} alt='' />
									<h6 className='px-2'>Aug 5 - Aug 25, 2024</h6>
								</div>
							</Col>
						</Col>
						<Col lg={12} className='ticketListTicketContent'>
							<Col lg={6} className='ticketListTicketText'>
								<div>
									<h5>Description</h5>
									<p>
										Save money with discounted adult single day tickets online Save valuable time &
										Bypass the ticket booth and enter the gate upon arrival Go contactless Save
										money with discounted adult single{' '}
									</p>
								</div>
								<div>
									<h5>Announcement</h5>
									<p>
										Save money with discounted adult single day tickets online Save valuable time &
										Bypass the ticket booth and enter the gate upon arrival Go contactless Save
										money with discounted adult single{' '}
									</p>
								</div>
							</Col>
							<Col lg={4} className='ticketListTicketSelect'>
								{TicketType?.map((item, index) => (
									<Row key={index} className='ticketListTicketSelectRow'>
										<Col lg={6} className='ticketListTicketSelectColFirst'>
											<h5>{item?.TicketTypeName}</h5>
										</Col>
										<Col lg={3} className='ticketListTicketSelectColTow'>
											<h4>$ {item?.price}</h4>
										</Col>
										<Col lg={3}>
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
										</Col>
									</Row>
								))}
							</Col>
							<Col lg={2} className='ticketListTicketButton'>
								<button type='button'>Buy Ticket</button>
							</Col>
						</Col>
					</Row>
				</Container>
			</section>
		</main>
	);
};

export default Ticket;
