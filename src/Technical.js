import React, { Component } from 'react';
import SubHeader from './components/technical/SubHeader';
import ClothingDisplay from './components/technical/ClothingDisplay';
import Sidebar from './components/technical/Sidebar';
import Footer from './components/technical/Footer';
import Hanger from './Hanger';

class Technical extends Component {
	render() {
		return (
			<div style={{ background: '#F5F4EF' }}>
				<SubHeader />

				<h1>
					<ClothingDisplay />
				</h1>
				<Sidebar />
				<Footer />
				<br />
				<Hanger />
			</div>
		);
	}
}

export default Technical;
