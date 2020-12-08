import React from "react";



function NavTabs(props) {
  const tabs = ['IT Department', 'Production', 'Marketing', 'Home'];
  return (
    <div className="text-center text-black">
      <h2> Employee Directory</h2>

      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li className="nav-item" key={tab}>
            <a
              href={'#' + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? 'nav-link active' : 'nav-link'
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavTabs;