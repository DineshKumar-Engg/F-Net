import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Cities } from '../../Contant';
import { MultiSelect } from 'primereact/multiselect';
import Logo1 from '../../Assets/Image/Carnival.svg';
import Logo2 from '../../Assets/Image/LeadFest.svg';
import Logo3 from '../../Assets/Image/nbysf.svg';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import Dropdown from 'react-bootstrap/Dropdown';
import selectArrow from '../../Assets/Image/selectArrow.webp'
const OrganizerItems = () => {
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
    <section className='organizerList'>
      <Container>
        <Row className='w-100 d-flex justify-content-center align-items-center flex-column'>
          <Col lg={4} className='OrganizeTitle'>
            <h3 className='w-100 text-white text-center KanitRegular organizerTitle'>
              Organizers
            </h3>
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

        <Row className='organizerCardMain'>
          <Col lg={12} className='organizerCardList'>
            <Row>
              <Col lg={4}>
                <img src={Logo3} alt='' />
              </Col>
              <Col lg={8}>
                <Row>
                  <Col lg={12}>
                    <h2>North Brunswick Youth Sports Festival</h2>
                  </Col>
                  <Col lg={12}>
                    <h5>Description</h5>
                  </Col>
                  <Col lg={12}>
                    <p>
                      Save money with discounted adult single day tickets
                      online Save valuable time & Bypass the ticket booth and
                      enter the gate upon arrival Go contactless Save money
                      with discounted adult single{' '}
                    </p>
                  </Col>
                  <Col lg={12}>
                    <Row>
                      <Col lg={6}>
                        <button type='button' className='buyBtn'>
                          Buy Tickets
                        </button>
                      </Col>
                      <Col lg={6}>
                        <button type='button' className='viewBtn'>
                          View Details
                        </button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col lg={12} className='organizerCardList'>
            <Row>
              <Col lg={4}>
                <img src={Logo2} alt='' />
              </Col>
              <Col lg={8}>
                <Row>
                  <Col lg={12}>
                    <h2>The Lead Feast</h2>
                  </Col>
                  <Col lg={12}>
                    <h5>Description</h5>
                  </Col>
                  <Col lg={12}>
                    <p>
                      Save money with discounted adult single day tickets
                      online Save valuable time & Bypass the ticket booth and
                      enter the gate upon arrival Go contactless Save money
                      with discounted adult single{' '}
                    </p>
                  </Col>
                  <Col lg={12}>
                    <Row>
                      <Col lg={6}>
                        <button type='button' className='buyBtn'>
                          Buy Tickets
                        </button>
                      </Col>
                      <Col lg={6}>
                        <button type='button' className='viewBtn'>
                          View Details
                        </button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col lg={12} className='organizerCardList'>
            <Row>
              <Col lg={4}>
                <img src={Logo1} alt='' />
              </Col>
              <Col lg={8}>
                <Row>
                  <Col lg={12}>
                    <h2>Carnival Events and Rides</h2>
                  </Col>
                  <Col lg={12}>
                    <h5>Description</h5>
                  </Col>
                  <Col lg={12}>
                    <p>
                      Save money with discounted adult single day tickets
                      online Save valuable time & Bypass the ticket booth and
                      enter the gate upon arrival Go contactless Save money
                      with discounted adult single{' '}
                    </p>
                  </Col>
                  <Col lg={12}>
                    <Row>
                      <Col lg={6}>
                        <button type='button' className='buyBtn'>
                          Buy Tickets
                        </button>
                      </Col>
                      <Col lg={6}>
                        <button type='button' className='viewBtn'>
                          View Details
                        </button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OrganizerItems;
