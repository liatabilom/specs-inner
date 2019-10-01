import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render() {
		return (
			<footer>
				<hr style={{ margin: 0 }} />
				<div className="row" style={{ margin: 0 }}>
					<div className="card-body col-4 p-0 "></div>
					<div className="card-body col-4 p-0 "></div>
					<div className="card-body col-4 p-0 ">
						<span className="footerText">All Rights Reserved</span>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
