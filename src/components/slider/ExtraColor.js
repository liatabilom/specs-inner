import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class ExtraColor extends Component {
	extraColor = () => {
		if (this.props.index === 2)
			return (
				<div style={{ color: '#964541' }}>
					{this.handleExtraColor()}
					<span className="colorSubTitle">Chili</span>
				</div>
			);
		if (this.props.index === 5)
			return (
				<div style={{ color: '#312C3D' }}>
					{this.handleExtraColor()}
					<span className="colorSubTitle">Dark Saphire</span>
				</div>
			);
	};

	handleExtraColor = () => {
		return (
			<div className="extraCircle">
				<FontAwesomeIcon icon={faCircle} aria-hidden="true" />
			</div>
		);
	};

	render() {
		return (
			<div>
				<span>{this.extraColor()}</span>
			</div>
		);
	}
}

export default ExtraColor;
