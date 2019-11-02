import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class BottomColor extends Component {
	bottomColor = () => {
		if (this.props.index === 0)
			return (
				<div style={{ color: '#292F45' }}>
					{this.handleBottomColor()}
					<span className="colorSubTitle">Dark Saphire</span>
				</div>
			);
		if (this.props.index === 1)
			return (
				<div style={{ color: '#A99770' }}>
					{this.handleBottomColor()}
					<span className="colorSubTitle">Beige</span>
				</div>
			);
		if (this.props.index === 2)
			return (
				<div style={{ color: '#A99770' }}>
					{this.handleBottomColor()}
					<span className="colorSubTitle">Beige</span>
				</div>
			);
		if (this.props.index === 3)
			return (
				<div style={{ color: '#A4A5A4' }}>
					{this.handleBottomColor()}
					<span className="colorSubTitle">Grey Melange</span>
				</div>
			);
		if (this.props.index === 4)
			return (
				<div style={{ color: '#CBC8C5' }}>
					{this.handleBottomColor()}
					<span className="colorSubTitle">Light Grey Melange</span>
				</div>
			);
		if (this.props.index === 5)
			return (
				<div style={{ color: '#572E31' }}>
					{this.handleBottomColor()}
					<span className="colorSubTitle">Burgundy</span>
				</div>
			);
		if (this.props.index === 6)
			return (
				<div style={{ color: '#302E2C' }}>
					{this.handleBottomColor()}
					<span className="colorSubTitle">Dark Grey</span>
				</div>
			);
		if (this.props.index === 7)
			return (
				<div style={{ color: '#42342B' }}>
					{this.handleBottomColor()}
					<span className="colorSubTitle">Dark Brown</span>
				</div>
			);
		if (this.props.index === 8)
			return (
				<div style={{ color: '#474244' }}>
					{this.handleBottomColor()}
					<span className="colorSubTitle">Anthracite Melange</span>
				</div>
			);
	};

	handleBottomColor = () => {
		return (
			<div className="bottomCircle">
				<FontAwesomeIcon icon={faCircle} size="1x" aria-hidden="true" />
			</div>
		);
	};

	render() {
		return (
			<div>
				<span>{this.bottomColor()}</span>
			</div>
		);
	}
}

export default BottomColor;
