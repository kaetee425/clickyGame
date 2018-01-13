import React from 'react'
import './Nav.css'

const Nav = (props) => {
	return (
		<nav className="navbar navbar-inverse navbar-top">
			<div className="container-fluid">
				<div className="navbar-header">	
					{props.children}
				</div>
			</div>
		</nav>
	)

};

export default Nav