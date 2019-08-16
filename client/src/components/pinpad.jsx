import React from 'react';
import PadButton from './padButton.jsx';
import PadRow from './padRow.jsx';

class Pinpad extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedCells: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
      },
    };

    this.toggleCell = this.toggleCell.bind(this);
  }

  toggleCell(cell) {
    console.log(cell);
    const { clickedCells } = this.state;
    clickedCells[cell] = !clickedCells[cell];
    this.setState({ clickedCells });
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <table style={{ margin: '100px auto', width: 500 }}>
          <tbody>
            {
              [0, 1, 2].map((row) => <PadRow key={`row${row}`} rowNumber={row} toggleCell={this.toggleCell} />)
            }
            <tr>
              <PadButton />
              <PadButton key="pad10" padNumber={10} toggleCell={this.toggleCell} />
              <PadButton />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Pinpad;
