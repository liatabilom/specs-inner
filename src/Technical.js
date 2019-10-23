import React, { Component } from 'react';
import SubHeader from './components/technical/SubHeader';
import ClothingDisplay from './components/technical/ClothingDisplay';
import UpperSidebar from './components/technical/UpperSidebar';
import BottomSidebar from './components/technical/BottomSidebar';
import Footer from './components/technical/Footer';
import Hanger from './Hanger';

class Technical extends Component {
	render() {
		return (
			<div style={{ background: '#F5F4EF' }}>
				<SubHeader />
				<UpperSidebar />
				<div className="container scrollPosition">
					<ClothingDisplay />
				</div>
				<BottomSidebar />
				<Footer />
				<br />
				<div>
					<h1>
						<Hanger />
					</h1>
				</div>
			</div>
		);
	}
}

export default Technical;
