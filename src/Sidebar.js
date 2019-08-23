import React, { useState } from "react";
import useCollapse from "react-collapsed";
import Card13 from "./images/cards/Card13.png";
import Card12 from "./images/cards/Card12.png";
import Card11 from "./images/cards/Card11.png";
import Card10 from "./images/cards/Card10.png";
import Card9 from "./images/cards/Card9.png";
import Card8 from "./images/cards/Card8.png";

import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse(
    { expandStyles: { transitionProperty: "width" } },
    { isOpen }
  );

  return (
    <React.Fragment>
      <button
        className="btn btn-outline-dark btnAccordion"
        {...getToggleProps({
          onClick: () => setOpen(oldOpen => !oldOpen)
        })}
      >
        {isOpen ? "<" : "|"}
      </button>
      <section {...getCollapseProps()}>
        <div>
          <div className="containerAccordion d-inline">
            <div className="gallery-wrap">
              <div className="item item-1 .active" />
              <div className="item item-2" />
              <div className="item item-3" />
              <div className="item item-4" />
              <div className="item item-5" />
              <div className="item item-6" />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Sidebar;
