import React, { useState } from 'react';
import NavMenuItem from './NavMenuItem';

const CollapseMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{width:'100%'}}>
      <button onClick={() => setIsOpen(!isOpen)}>выбрать точку</button>
      {isOpen && (
        <>
          {options.map((option, index) => (
            <NavMenuItem index={index} icon={'resources/logo.png'} text={option}/>
          ))}
        </>
      )}
    </div>
  );
}

export default CollapseMenu;