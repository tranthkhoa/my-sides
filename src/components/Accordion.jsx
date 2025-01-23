import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activePanel, setActivePanel] = useState(null);

  const handleClick = (index) => {
    setActivePanel(activePanel === index ? null : index);
  };

  return (
    <ul className="templatemo-accordion">
      {items.map((item, index) => (
        <li key={index}>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              handleClick(index);
            }}
          >
            {item.title}
          </a>
          <ul 
            className={activePanel === index ? 'active' : ''}
            style={{ 
              display: activePanel === index ? 'block' : 'none'
            }}
          >
            {item.content}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default Accordion; 