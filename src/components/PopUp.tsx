import React from 'react';
interface PopUpProps {
    isOpen: boolean;
    onClose: () => void;
  }
  const PopUp: React.FC<PopUpProps> = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="overlay" id="popup">
      <div className="popup-content">
        <button id="close-button" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M7.71875 6.28125 L6.28125 7.71875 L23.5625 25 L6.28125 42.28125 L7.71875 43.71875 L25 26.4375 L42.28125 43.71875 L43.71875 42.28125 L26.4375 25 L43.71875 7.71875 L42.28125 6.28125 L25 23.5625 Z"></path>
          </svg>
        </button>
        <div className="popup-inner">
          <div className="popup-header">
            <h2 className="plant-name">Plant Name</h2>
            <p className="location">Location</p>
          </div>
          <div className="image-holder">
            <div id="root"></div>
          </div>

          <div className="sensor-data-lala">
            <p>
              Humidity: <span id="humidity-sensor">50</span> /{' '}
              <span id="humidity-editable">70</span>
            </p>
            <p>
              Moisture: <span id="moisture-sensor">20</span> /{' '}
              <span id="moisture-editable">70</span>
            </p>
            <p>
              Temperature: <span id="temperature-sensor">10</span> /{' '}
              <span id="temperature-editable">35</span>
            </p>
            <p>
              Light: <span id="light-sensor">15UV</span> /{' '}
              <span id="light-editable">100UV</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default PopUp;
