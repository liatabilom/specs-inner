import React, { Component } from 'react';
import TopColor from './components/slider/TopColor';
import Slide from './components/slider/Slide';
import RightArrow from './components/slider/RightArrow';
import LeftArrow from './components/slider/LeftArrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import './Slider.css';

class Slider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			images: [
				{
					id: 1,
					imageUrl: 'https://i.imgur.com/uKPmjUb.png',
					topColor: 'red',
					topColorName: 'red',
				},
				{
					id: 2,
					imageUrl: 'https://i.imgur.com/p1ICee3.png',
					topColor: 'blue',
					topColorName: 'blue',
				},
			],
			currentIndex: 0,
			translateValue: 0,
		};
	}

	goToPrevSlide = () => {
		if (this.state.currentIndex === 0) return;

		this.setState(prevState => ({
			currentIndex: prevState.currentIndex - 1,
			translateValue: prevState.translateValue + this.slideWidth(),
			id: prevState.image.id,
		}));
	};

	goToNextSlide = () => {
		if (this.state.currentIndex === this.state.images.length - 1) {
			return this.setState({
				currentIndex: 0,
				translateValue: 0,
			});
		}

		this.setState(prevState => ({
			currentIndex: prevState.currentIndex + 1,
			translateValue: prevState.translateValue + -this.slideWidth(),
		}));
	};

	slideWidth = () => {
		return document.querySelector('.slide').clientWidth;
	};

	render() {
		return (
			<div className="slider">
				<div>
					{this.state.images.map(images => (
						<TopColor key={images.id} color={images.topColor} id={images.id} />
					))}

					{this.state.images.map(images => (
						<span className="topColorSubTitle">{images.topColorName}</span>
					))}

					<br />
					<FontAwesomeIcon icon={faCircle} size="1x" className="bottomCircle" aria-hidden="true" />
					<span className="bottomColorSubTitle">Dark Saphire</span>
				</div>
				<div
					className="slider-wrapper"
					style={{
						transform: `translateX(${this.state.translateValue}px)`,
						transition: `transform ease-out 0.45s`,
					}}
				>
					{this.state.images.map(images => (
						<Slide key={images.id} image={images.imageUrl} />
					))}
				</div>
				<LeftArrow goToPrevSlide={this.goToPrevSlide} />
				<RightArrow goToNextSlide={this.goToNextSlide} />
			</div>
		);
	}
}

export default Slider;
