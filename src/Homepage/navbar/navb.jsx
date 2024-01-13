import React, {select, useState, useEffect, useRef} from 'react';
import "../../styles/index.css"

import CustomDropdown from 'Homepage/dropdown/drop';
function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
	return (
		<div>
		<div className='headerhh'>
			<h2>LLG.</h2>
			<CustomDropdown/>
		</div>
		</div>
	);
}


export default Navbar;
