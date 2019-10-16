import React, { Component } from 'react';
import Draggable from 'react-draggable';
import CarouselAutoLettering from '../../images/CarouselAutoLettering.png';
import './ClothingDisplay.css';

class ClothingDisplay extends Component {
	render() {
		return (
			<div
				className="card-body p-0 col-md-4 border rounded-0 border-dark scrollPosition"
				style={{
					height: '600px',
					width: '275px',
					overflow: 'scroll',
				}}
			>
				<div style={{ height: '400px', width: '275px', padding: '0' }}>
					<Draggable
						axis="y"
						bounds={(0, 10, 0, 10)}
						handle=".handle"
						grid={(25, 25)}
						allowAnyClick={true}
						disabled={true}
					>
						<img
							src={CarouselAutoLettering}
							alt="Carousel"
							className="carouselImg"
							style={{ height: 2000, width: 250 }}
						/>
					</Draggable>
				</div>
			</div>
		);
	}
}

export default ClothingDisplay;
