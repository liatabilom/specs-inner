import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class BottomColor extends Component {
	render() {
		return (
			<div>
				{this.state.images.map(images => (
					<FontAwesomeIcon icon={faCircle} size="1x" className="bottomCircle" aria-hidden="true" />
					<span className="bottomColorSubTitle">Dark Saphire</span>
			
				))}
				
			</div>
		);
	}
}

export default BottomColor;
