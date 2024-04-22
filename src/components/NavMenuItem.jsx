import React from 'react';

const NavMenuItem = ({ icon, text }) => {
  return (
    <div className="NavMenu_item">
      <img src={icon} />
      <p>{text}</p>
    </div>
  );
}

export default NavMenuItem;