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
				'https://i.imgur.com/uKPmjUb.png',
				'https://i.imgur.com/p1ICee3.png',
				'https://i.imgur.com/fHIL6iV.png',
				'https://i.imgur.com/x9fxboJ.png',
				'https://i.imgur.com/ZXiAC37.png',
				'https://i.imgur.com/tTIZuql.png',
				'https://i.imgur.com/aCcBAh1.png',
				'https://i.imgur.com/oHt4PGq.png',
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
				<div className="sliderContainer">
					<FontAwesomeIcon icon={faCircle} className="topCircle" />
					<span className="topColorSubTitle">Kakhi</span>
					<br />
					<FontAwesomeIcon icon={faCircle} size="1x" className="bottomCircle" />
					<span className="bottomColorSubTitle">Dark Blue</span>
				</div>
				<br />
				<div
					className="slider-wrapper"
					style={{
						transform: `translateX(${this.state.translateValue}px)`,
						transition: `transform ease-out 0.45s`,
					}}
				>
					{this.state.images.map((image, i) => (
						<Slide image={image} key={i} />
					))}
				</div>
				<LeftArrow goToPrevSlide={this.goToPrevSlide} />
				<RightArrow goToNextSlide={this.goToNextSlide} />
			</div>
		);
	}
}

export default Slider;
