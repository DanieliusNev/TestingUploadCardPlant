import React from 'react';
import './components/plant.css';
import ModelViewer from './3D/ModelViewer.jsx';
import ButtonEdit from './components/ButtonEdit';
import ButtonDelete from './components/ButtonDelete';
import SensorData from './components/SensorData';

function App() {
  return (
    <div className="App">
      <div className="buttons-container">
        <ButtonEdit />
        <ButtonDelete />
      </div>
      <SensorData />
      <ModelViewer scale="0.7" modelPath={"flowertry10.gltf"} />
    </div>
  );
}

export default App;



