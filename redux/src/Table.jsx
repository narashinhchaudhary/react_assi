import React from 'react'

const Table = ({ data }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.usename}</td>
              <td>{row.email}</td>
              <td>{row.address.city}</td>
              <td>{row.address.street}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  export default Table;