import React from 'react';\

class Pad extends React.component() {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <table>
          <tbody>
            {
              [0, 1, 2].map((row) => {
                <tr>
                  {
                    [1, 2, 3].map((cell) => {
                      <td></td>
                    });
                  }
                </tr>
              })
            }
            <tr><td>10</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}
