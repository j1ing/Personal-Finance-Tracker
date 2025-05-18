import React from 'react';
import './Table.css';

const Table = ({ data = [] }) => {

  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className='tablecomponent'>
      <table>
        <thead>
          <tr>
            {headers.map((columnName, i) => (
              <th key={i}>{columnName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((value, j) => (
                <td key={j}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 

export default Table;

