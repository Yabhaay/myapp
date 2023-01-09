import React from "react";
import '../App.css';

const Sidebar = () => {
 
  return (
    <div className="py-3">
      <h1>Stantech AI</h1>
      <ul className="my-3 list-group">
        <li className="h3 my-3 list-item">Replenishment</li>
        <li className="h3 my-3 list-item">Impact</li>
        <li className="h3 my-3 list-item">Firm Wide</li>
        <li className="h3 my-3 list-item">SKU Level</li>
      </ul>
    </div>
  );
};

export default Sidebar;
