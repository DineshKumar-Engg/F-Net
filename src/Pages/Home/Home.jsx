import React from 'react';
import Banner from './Banner';
import Event from './Event';
import FindYourEvent from './FindYourEvent';
import EventSponsor from './EventSponsor';
import '../../Styles/Home.css';
import Form from './Form';
import Vendor from './Vendor';

const Home = () => {
	return (
		<main id='home'>
			<Banner />
			<Event />
			<FindYourEvent />
			<EventSponsor />
			<Vendor />
			<Form />
		</main>
	);
};

export default Home;
