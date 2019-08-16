import React from 'react';

class Pinpad extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <table align="center" width="500">
          <tbody>
            {
              [0, 1, 2].map((row) => (
                <tr>
                  {
                    [1, 2, 3].map((cell) => <td align="center"><h2>{cell + (3 * row)}</h2></td>)
                  }
                </tr>
              ))
            }
            <tr>
              <td />
              <td><h2>10</h2></td>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Pinpad;
