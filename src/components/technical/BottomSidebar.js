import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import './BottomSidebar.css';

function Sidebar() {
	const [isOpen, setOpen] = useState(false);
	const { getCollapseProps, getToggleProps } = useCollapse(
		{ expandStyles: { transitionProperty: 'width' } },
		{ isOpen }
	);

	return (
		<React.Fragment>
			<button
				className="btn btn-dark-outline btnAccordion-bottom"
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
							<div className="item item-7 .active"></div>
							<div className="item item-8"></div>
							<div className="item item-9"></div>
							<div className="item item-10"></div>
							<div className="item item-11"></div>
							<div className="item item-12"></div>
							<div className="item item-13"></div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}

export default Sidebar;
