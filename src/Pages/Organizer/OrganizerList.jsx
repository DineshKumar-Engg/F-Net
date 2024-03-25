import React from 'react';
import '../../Styles/Organizer.css';
import OrganizerBanner from './OrganizerBanner';
import OrganizerItems from './OrganizerItems';

const OrganizerList = () => {
  return (
    <main id='organizerList'>
      <OrganizerBanner />
      <OrganizerItems />
    </main>
  );
};

export default OrganizerList;
