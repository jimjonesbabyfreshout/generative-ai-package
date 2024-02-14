import React, { useState, useEffect } from 'react';
import RealTimeUpdates from './RealTimeUpdates';
import InteractiveElements from './InteractiveElements';
import DarkModeSwitch from './DarkModeSwitch';
import '../styles/app.css';
import config from '../../../config/config.json'; // Import config for model options

const App = () => {
  const [selectedModel, setSelectedModel] = useState(config.models.default_model);

  useEffect(() => {
    // Add any initialization logic based on the selected model
    console.log(`Selected model: ${selectedModel}`);
  }, [selectedModel]);

  // Placeholder state and useEffect for real-time updates
  // ...

  return (
    <div className="container">
      <h1>Generative AI Package</h1>
      <div>
        <label>Select Model:</label>
        <select onChange={(e) => setSelectedModel(e.target.value)} value={selectedModel}>
          <option value={config.models.default_model}>Default Model</option>
          <option value={config.models.multimodal_model}>Multimodal Model</option>
          {/* Add more model options as needed */}
        </select>
      </div>
      <RealTimeUpdates /> {/* Real-time updates component */}
      <InteractiveElements /> {/* Interactive elements component */}
      <DarkModeSwitch /> {/* Dark mode switch component */}
    </div>
  );
};

export default App;