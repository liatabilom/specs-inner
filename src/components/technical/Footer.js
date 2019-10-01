import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<div className="row ml-2">
				<div className="card-body col-4 p-0 "> </div>
				<div className="card-body col-4 p-0 "></div>
				<div className="card-body col-3 p-0 ">
					<span className="footerText">All Rights Reserved</span>
				</div>
			</div>
		);
	}
}

export default Footer;
