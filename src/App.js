import React from 'react';
import '../src/components/plant.css';
import './components/plant.js';
import ModelViewer from './3D/ModelViewer.jsx';

function App() {
  return (
    <div className="App">
      <ModelViewer scale="0.7" modelPath={"flowertry10.gltf"} />
    </div>
  );
}

export default App;
