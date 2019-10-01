import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './ClothingDisplay.css';

class ClothingDisplay extends Component {
	render() {
		return (
			<div
				className="card-body p-0 col-sm-12 border border-dark parent clothingScroll"
				style={{
					height: '500px',
					width: '275px',
					position: 'relative',
					overflow: 'scroll',
					padding: '0',
				}}
			>
				<div style={{ height: '500px', width: '275px', padding: '0' }}>
					<Draggable
						axis="y"
						bounds={(0, 10, 0, 10)}
						handle=".handle"
						grid={(25, 25)}
						allowAnyClick={true}
						cancel={'.body'}
						disabled={true}
					>
						<img
							src="https://i.imgur.com/FgOBFx9.jpg"
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
