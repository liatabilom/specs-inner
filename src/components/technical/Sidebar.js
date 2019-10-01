import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import './Sidebar.css';

function Sidebar() {
	const [isOpen, setOpen] = useState(false);
	const { getCollapseProps, getToggleProps } = useCollapse(
		{ expandStyles: { transitionProperty: 'width' } },
		{ isOpen }
	);

	return (
		<React.Fragment>
			<button
				className="btn btn-dark-outline btnAccordion"
				{...getToggleProps({
					onClick: () => setOpen(oldOpen => !oldOpen),
				})}
			>
				{isOpen ? '<' : '|'}
			</button>
			<section {...getCollapseProps()}>
				<div>
					<div className="containerAccordion">
						<div className="gallery-wrap">
							<div className="item item-1 .active"></div>
							<div className="item item-2"></div>
							<div className="item item-3"></div>
							<div className="item item-4"></div>
							<div className="item item-5"></div>
							<div className="item item-6"></div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default Sidebar;
