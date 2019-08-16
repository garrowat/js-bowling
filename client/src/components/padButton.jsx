import React from 'react';

const PadButton = ({ padNumber, toggleCell }) => {
  const handleClick = (cellNumber) => {
    toggleCell(cellNumber);
  };

  return (
    <td
      align="center"
      style={{ width: '33%', cursor: 'pointer' }}
      onClick={() => handleClick(padNumber)}
    >
      <h2>{padNumber || ''}</h2>
    </td>
  );
};

export default PadButton;
