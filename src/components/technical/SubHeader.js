import React, { Component } from 'react';
import './SubHeader.css';

class SubHeader extends Component {
	render() {
		return (
			<div className="row ml-2">
				<div className="card-body col-4 p-0 subHeader">SPEC PACKS</div>
				<div className="card-body col-4 p-0 subHeader">ALL PIECES DESIGNED AND DRAWN</div>
				<div className="card-body col-4 p-0 subHeader">
					<span className="subHeaderRight">AW18</span>
				</div>
			</div>
		);
	}
}

export default SubHeader;
