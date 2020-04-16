import React from 'react';

const Info = ({ coords }) => (
  <table className="info-table">
    <caption>Your coordinates</caption>
    <tbody>
      <tr>
        <td>Latitude</td>
        <td className="value">{coords.latitude}</td>
      </tr>
      <tr>
        <td>Longitude</td>
        <td className="value">{coords.longitude}</td>
      </tr>
      <tr>
        <td>Accuracy</td>
        <td className="value">{coords.accuracy}</td>
      </tr>
    </tbody>
  </table>
);

export default Info;
