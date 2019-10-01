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
				<div className="container">
					<div className="row">
						<div className="card-body p-0 m-2 col-lg-auto border">
							<h1>
								<ClothingDisplay />
							</h1>
							<Sidebar />
							<Footer />
							<br />
							<footer>
								<Hanger />
							</footer>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Technical;
