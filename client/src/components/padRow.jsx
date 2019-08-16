import React from 'react';
import PadButton from './padButton.jsx';

const PadRow = ({ rowNumber, toggleCell }) => (
  <tr>
    {
      [1, 2, 3].map((cell) => {
        const padNumber = cell + (3 * rowNumber);
        return <PadButton key={`pad${padNumber}`} padNumber={padNumber} toggleCell={toggleCell} />;
      })
    }
  </tr>
);

export default PadRow;
