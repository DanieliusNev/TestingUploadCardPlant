import React, { useState } from 'react';
import './components/plant.css';
import ModelViewer from './3D/ModelViewer.jsx';
import ButtonEdit from './components/ButtonEdit';
import ButtonDelete from './components/ButtonDelete';
import SensorData from './components/SensorData';
import PopUp from './components/PopUp';

function App() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false); 

  const handleViewClick = () => {
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
  };

  return (
    <div className="App">
      <div className="buttons-container">
        <ButtonEdit />
        <ButtonDelete />
        <button id="view-button" onClick={handleViewClick}>View</button> {/* Trigger PopUp */}
      </div>
      <SensorData />
      <ModelViewer scale="0.7" modelPath={"flowertry10.gltf"} />

    
      <PopUp isOpen={isPopUpOpen} onClose={handleClosePopUp} />
    </div>
  );
}

export default App;






