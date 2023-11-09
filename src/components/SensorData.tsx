import React from 'react';

const SensorData = () => {
  return (
    <div className="sensor-data-container">
      <div className="sensor-data">
        <p>Humidity: <span id="humidity-sensor">50</span> / <span id="humidity-editable" contentEditable={false}>70</span></p>
        <p>Moisture: <span id="moisture-sensor">20</span> / <span id="moisture-editable" contentEditable={false}>70</span></p>
        <p>Temperature: <span id="temperature-sensor">10</span> / <span id="temperature-editable" contentEditable={false}>35</span></p>
        <p>Light: <span id="light-sensor">15UV</span> / <span id="light-editable" contentEditable={false}>100UV</span></p>
      </div>
    </div>
  );
};

export default SensorData;
