import React, { useState } from 'react';
import OrganizerBanner from './OrganizerBanner';
import OrganizerEvent from './OrganizerEvent';
import OrganizerSponsor from './OrganizerSponsor';
import '../../Styles/Home.css';
import OrganizerVendor from './OrganizerVendor';

const Organizers = () => {
	return (
		<>
			<OrganizerBanner />
			<OrganizerEvent />
			<OrganizerSponsor/>
			<OrganizerVendor/>
		</>
	);
};

export default Organizers;
