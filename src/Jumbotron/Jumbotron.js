import React from "react"
import './Jumbotron.css'

const Jumbotron = (props) => {
	return (
		<div className="jumbotron text-center">
			<h1>Clicky Game!</h1>
			<h3>Click an image to earn points, but don't click on any more than once!</h3>
		</div>
	)
}

export default Jumbotron