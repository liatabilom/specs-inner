import React, { Component } from 'react';
import './SubHeader.css';

class SubHeader extends Component {
	render() {
		return (
			<div>
				<div className="row subHeaderContainer" style={{ margin: 0 }}>
					<div className="card-body col-4 p-0 subHeader">SPEC PACKS</div>
					<div className="card-body col-4 p-0 subHeader">ALL PIECES DESIGNED AND DRAWN</div>
					<div className="card-body col-4 p-0 subHeader rightHeader">AW18</div>
				</div>
			</div>
		);
	}
}

export default SubHeader;
