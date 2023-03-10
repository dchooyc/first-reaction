import React from 'react';
import '../Table.css';

class Table extends React.Component {
    render() {
        return (
            <table className="wonderful">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                {this.props.data.map(row => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        );
    }
}
export default Table;
