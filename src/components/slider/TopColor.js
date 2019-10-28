import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class TopColor extends Component {
	topColor = () => {
		if (this.props.index === 0)
			return (
				<div style={{ color: '#70634E' }}>
					{this.handleTopColor()}
					<span className="colorSubTitle">Kakhi</span>
				</div>
			);
		if (this.props.index === 1)
			return (
				<div style={{ color: '#292F45' }}>
					{this.handleTopColor()}
					<span className="colorSubTitle">Dark Saphire</span>
				</div>
			);
		if (this.props.index === 2)
			return (
				<div style={{ color: '#712528' }}>
					{this.handleTopColor()}
					<span className="colorSubTitle">Sun-Dried Tomato</span>
				</div>
			);
		if (this.props.index === 3)
			return (
				<div style={{ color: '#454D66' }}>
					{this.handleTopColor()}
					<span className="colorSubTitle">Mood Indigo</span>
				</div>
			);
		if (this.props.index === 4)
			return (
				<div style={{ color: '#454D66' }}>
					{this.handleTopColor()}
					<span className="colorSubTitle">Mood Indigo</span>
				</div>
			);
		if (this.props.index === 5)
			return (
				<div style={{ color: '#7F7569' }}>
					{this.handleTopColor()}
					<span className="colorSubTitle">Rock Ridge</span>
				</div>
			);
		if (this.props.index === 6)
			return (
				<div style={{ color: '#5B412A' }}>
					{this.handleTopColor()}
					<span className="colorSubTitle">Camel</span>
				</div>
			);
	};

	handleTopColor = () => {
		return (
			<div className="topCircle">
				<FontAwesomeIcon icon={faCircle} size="1x" aria-hidden="true" />
			</div>
		);
	};

	render() {
		return (
			<div>
				<span>{this.topColor()}</span>
			</div>
		);
	}
}

export default TopColor;
