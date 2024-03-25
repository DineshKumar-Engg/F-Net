import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import FindEvent from './Pages/Event/FindEvent';
import Organizers from './Pages/Organizer/Organizers';
import OrganizerList from './Pages/Organizer/OrganizerList';
import EventDetailMain from './Pages/EventDetails/EventDetailMain';
import Ticket from './Pages/Ticket/Ticket';
import BuyTicket from './Pages/Ticket/BuyTicket';


const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/findyourevent' element={<FindEvent />} />
				<Route path='/organizer' element={<OrganizerList />} />
				<Route path='/organizer/nbysf' element={<Organizers />} />
				<Route path='/organizer/nbysf/carnival' element={<EventDetailMain />} />
				<Route path='/tickets' element={<Ticket />} />
				<Route path='/tickets' element={<Ticket />} />
				<Route path='/buytickets' element={<BuyTicket />} />
				<Route path='*' element={<Home />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
