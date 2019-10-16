import React, { Component } from 'react';
import Slider from './Slider';
import './Specs.css';

class Main extends Component {
	render() {
		return (
			<div style={{ background: '#80848F' }}>
				<div className="header" style={{ padding: 20 }}>
					<header>
						<a href="https://www.correiagoncalves.com" style={{ textDecoration: 'none', color: 'white' }}>
							Na'dia
							<br />
							Correia Gonc,alves
						</a>
					</header>
				</div>
				<br />
				<div>
					<img src="https://i.imgur.com/cU9UWnN.gif" alt="Textile" className="textile" />
				</div>
				<div className="container">
					<Slider />
				</div>
				<br />
			</div>
		);
	}
}

export default Main;
