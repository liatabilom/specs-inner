import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const TopColor = ({ color, id }) => {
	return (
		<div className="topCircle" style={{ color }}>
			<FontAwesomeIcon icon={faCircle} size="1x" aria-hidden="true" />
		</div>
	);
};

export default TopColor;
