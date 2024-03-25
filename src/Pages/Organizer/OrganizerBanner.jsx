import React from 'react';
import { Container } from 'react-bootstrap';
import '../../Styles/Home.css';
import Marquee from 'react-fast-marquee';
import BannerThree from '../../Assets/Image/Home/BannerThree.webp';

const OrganizerBanner = () => {
	return (
		<Container
			fluid
			className='homebannerCont OrganizerBanner'
			style={{ backgroundImage: `url(${BannerThree})` }}>
			<section className='Homebanner'>
				<div className='container-fluid bannerMarquee'>
					<Marquee>
						<h5>
							Festival Season Is Here !!! Stay Tuned ! Festival Season Is Here !!!
							Stay Tuned ! Festival Season Is Here !!! Stay Tuned ! Festival Season Is
							Here !!! Stay Tuned ! Festival Season Is Here !!! Stay Tuned !
						</h5>
					</Marquee>
				</div>
			</section>
		</Container>
	);
};

export default OrganizerBanner;
