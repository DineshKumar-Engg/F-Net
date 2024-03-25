import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../Styles/Vendor.css';
import VendorTextBgup from '../../Assets/Image/vendorTextBgUP.webp';
import VendorTextBgdown from '../../Assets/Image/vendorTextBgDown.webp';

const Vendor = () => {
	return (
		<Container fluid className='vendorBackBg'>
			<section>
				<Row className='d-flex'>
					<Col className='vendorText'>
						<div>
							<img src={VendorTextBgup} alt='' />
						</div>
						<div>
							<h3>Want to join with Us!</h3>
						</div>
						<div>
							<button>Vendors Click Here</button>
						</div>
						<div>
							<img src={VendorTextBgdown} alt='' />
						</div>
					</Col>
				</Row>
			</section>
		</Container>
	);
};

export default Vendor;
