import React, { useState } from 'react';
import axios from 'axios';
import config from '../../../config/config.json'; // Import config for API endpoint and model options

const InteractiveElements = ({ selectedModel }) => {
  const [inputText, setInputText] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [generatedContent, setGeneratedContent] = useState('');

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);
  };

  const handleGenerateContent = async () => {
    try {
      const formData = new FormData();
      formData.append('prompt', inputText);
      imageFiles.forEach((file) => formData.append('images', file));

      const response = await axios.post(`${config.apiEndpoint}/generate`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        params: {
          model: selectedModel,
        },
      });

      const { results } = response.data;
      setGeneratedContent(results);
    } catch (error) {
      console.error('Error generating content:', error);
    }
  };

  return (
    <div className="interactive-elements">
      <h2>Interactive Elements</h2>
      <div>
        <label>Text Input:</label>
        <input type="text" value={inputText} onChange={handleTextChange} />
      </div>
      <div>
        <label>Image Input:</label>
        <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      </div>
      <button onClick={handleGenerateContent}>Generate Content</button>
      <div>
        <h3>Generated Content:</h3>
        <p>{generatedContent}</p>
      </div>
    </div>
  );
};