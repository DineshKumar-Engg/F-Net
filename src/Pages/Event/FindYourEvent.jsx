import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Styles/Home.css';
import CardImageOne from '../../Assets/Image/Home/cardone.svg';
import CardImageTow from '../../Assets/Image/Home/cardTwo.svg';
import CardImageThree from '../../Assets/Image/Home/cardThree.svg';
import CardImageFour from '../../Assets/Image/Home/cardFour.svg';
import LocationImage from '../../Assets/Image/Home/LocationImage.svg';
import TimeImage from '../../Assets/Image/Home/TimeImage.svg';
import CalenderImage from '../../Assets/Image/Home/CalenderImage.svg';
import { Cities } from '../../Contant';
import { MultiSelect } from 'primereact/multiselect';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import Dropdown from 'react-bootstrap/Dropdown';
import selectArrow from '../../Assets/Image/selectArrow.webp'

const FindYourEvent = () => {
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
		<Container fluid>
			<section className='homeEvent findEvent'>
				<Row className='w-100 d-flex justify-content-center align-items-center'>
					<Col lg={4} className='homeEventTitle'>
						<h3>Events</h3>
					</Col>
				</Row>
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
									<Dropdown.Toggle  id="dropdown-basic">
										Select Date
										<img src={selectArrow} alt="" />
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
				<Container fluid className='eventsScrollX'>
					<Row className='CardEventTemplateRow'>
						<Col lg={3} className='CardEventTemplate'>
							<Row className='CardEventTemplateBanner'>
								<img src={CardImageOne} alt='' />
							</Row>
							<Row>
								<h4>Carousel Ride Events</h4>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={LocationImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>
										Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
										65584-5678.
									</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={TimeImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>10:00pm - 12:00pm</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={CalenderImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>May 17,2024 - May 20,2024</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<div className='cardEventTemplateBtnText'>
									<Col lg={6}>
										<button>Buy Ticket</button>
									</Col>
									<Col lg={6}>
										<div>View Events</div>
									</Col>
								</div>
							</Row>
						</Col>
						<Col lg={3} className='CardEventTemplate'>
							<Row className='CardEventTemplateBanner'>
								<img src={CardImageTow} alt='' />
							</Row>
							<Row>
								<h4>Carousel Ride Events</h4>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={LocationImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>
										Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
										65584-5678.
									</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={TimeImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>10:00pm - 12:00pm</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={CalenderImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>May 17,2024 - May 20,2024</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<div className='cardEventTemplateBtnText'>
									<Col lg={6}>
										<button>Buy Ticket</button>
									</Col>
									<Col lg={6}>
										<div>View Events</div>
									</Col>
								</div>
							</Row>
						</Col>
						<Col lg={3} className='CardEventTemplate'>
							<Row className='CardEventTemplateBanner'>
								<img src={CardImageThree} alt='' />
							</Row>
							<Row>
								<h4>Carousel Ride Events</h4>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={LocationImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>
										Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
										65584-5678.
									</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={TimeImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>10:00pm - 12:00pm</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={CalenderImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>May 17,2024 - May 20,2024</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<div className='cardEventTemplateBtnText'>
									<Col lg={6}>
										<button>Buy Ticket</button>
									</Col>
									<Col lg={6}>
										<div>View Events</div>
									</Col>
								</div>
							</Row>
						</Col>
						<Col lg={3} className='CardEventTemplate'>
							<Row className='CardEventTemplateBanner'>
								<img src={CardImageFour} alt='' />
							</Row>
							<Row>
								<h4>Carousel Ride Events</h4>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={LocationImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>
										Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
										65584-5678.
									</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={TimeImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>10:00pm - 12:00pm</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={CalenderImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>May 17,2024 - May 20,2024</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<div className='cardEventTemplateBtnText'>
									<Col lg={6}>
										<button>Buy Ticket</button>
									</Col>
									<Col lg={6}>
										<div>View Events</div>
									</Col>
								</div>
							</Row>
						</Col>
						<Col lg={3} className='CardEventTemplate'>
							<Row className='CardEventTemplateBanner'>
								<img src={CardImageOne} alt='' />
							</Row>
							<Row>
								<h4>Carousel Ride Events</h4>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={LocationImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>
										Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
										65584-5678.
									</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={TimeImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>10:00pm - 12:00pm</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={CalenderImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>May 17,2024 - May 20,2024</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<div className='cardEventTemplateBtnText'>
									<Col lg={6}>
										<button>Buy Ticket</button>
									</Col>
									<Col lg={6}>
										<div>View Events</div>
									</Col>
								</div>
							</Row>
						</Col>
						<Col lg={3} className='CardEventTemplate'>
							<Row className='CardEventTemplateBanner'>
								<img src={CardImageThree} alt='' />
							</Row>
							<Row>
								<h4>Carousel Ride Events</h4>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={LocationImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>
										Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
										65584-5678.
									</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={TimeImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>10:00pm - 12:00pm</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={CalenderImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>May 17,2024 - May 20,2024</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<div className='cardEventTemplateBtnText'>
									<Col lg={6}>
										<button>Buy Ticket</button>
									</Col>
									<Col lg={6}>
										<div>View Events</div>
									</Col>
								</div>
							</Row>
						</Col>
						<Col lg={3} className='CardEventTemplate'>
							<Row className='CardEventTemplateBanner'>
								<img src={CardImageTow} alt='' />
							</Row>
							<Row>
								<h4>Carousel Ride Events</h4>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={LocationImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>
										Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
										65584-5678.
									</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={TimeImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>10:00pm - 12:00pm</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={CalenderImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>May 17,2024 - May 20,2024</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<div className='cardEventTemplateBtnText'>
									<Col lg={6}>
										<button>Buy Ticket</button>
									</Col>
									<Col lg={6}>
										<div>View Events</div>
									</Col>
								</div>
							</Row>
						</Col>
						<Col lg={3} className='CardEventTemplate'>
							<Row className='CardEventTemplateBanner'>
								<img src={CardImageTow} alt='' />
							</Row>
							<Row>
								<h4>Carousel Ride Events</h4>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={LocationImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>
										Robert Kinder, 15RD NW Midway Lane, St. Robert street , MO
										65584-5678.
									</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={TimeImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>10:00pm - 12:00pm</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<Col lg={2}>
									<img src={CalenderImage} alt='' />
								</Col>
								<Col lg={10}>
									<h5>May 17,2024 - May 20,2024</h5>
								</Col>
							</Row>
							<Row className='cardEventTemplateText'>
								<div className='cardEventTemplateBtnText'>
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

export default FindYourEvent;
