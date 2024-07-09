import React from 'react';
import './keyboard.css';

const Keyboard = ({ pressedKey }) => {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  return (
    <div className="keyboard-container">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {row.map(key => (
            <div key={key} className={`key ${pressedKey === key ? 'key-pressed' : ''}`}>
              {key}
            </div>
          ))}
        </div>
      ))}
      <div className="keyboard-row">
        <div className={`key space-key ${pressedKey === ' ' ? 'key-pressed' : ''}`}></div>
      </div>
    </div>
  );
};

export default Keyboard;
