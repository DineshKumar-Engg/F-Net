import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Hamburger } from './Hamburger';
import Logo from '../Assets/Image/festivLogo.svg';
import '../Styles/Header.css';
import cartIcon from '../Assets/Image/CartIcon.svg';

const Header = () => {
	const [showNavbar, setShowNavbar] = useState(false);

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	return (
		<nav className='navbar'>
			<div className='container'>
				<div className='logo'>
					<NavLink to='/'>
						<img src={Logo} alt='' />
					</NavLink>
				</div>
				<div className='menu-icon' onClick={handleShowNavbar}>
					<Hamburger />
				</div>
				<div className={`nav-elements  ${showNavbar && 'active'}`}>
					<ul>
						<li>
							<NavLink to='/findyourevent'>Event</NavLink>
						</li>
						<li>
							<NavLink to='/organizer'>Organizer</NavLink>
						</li>
						<li>
							<NavLink to='/projects'>Get Involved</NavLink>
						</li>
						<li>
							<NavLink to='/about'>Contact Us</NavLink>
						</li>
						<li>
							<NavLink to='/tickets'>
								<button className='navBtn'>Get Ticket</button>
							</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>
								<img src={cartIcon} alt='' />
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
