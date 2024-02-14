import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config/config.json'; // Import config for API endpoint and model options

const RealTimeUpdates = ({ selectedModel }) => {
  const [prompt, setPrompt] = useState(''); // State to store the prompt
  const [page, setPage] = useState(1); // State to track pagination
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch real-time updates when the component mounts or the selected model changes
    fetchRealTimeUpdates();
  }, [selectedModel]);

  const fetchRealTimeUpdates = async () => {
    try {
      const response = await axios.post(config.apiEndpoint + '/generate', { prompt, page, model: selectedModel });
      const { results, totalPages } = response.data;
      setResults(results);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Error fetching real-time updates:', error);
    }
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="real-time-updates">
      <h2>Real-Time Updates</h2>
      <div>
        <label>Prompt:</label>
        <input type="text" value={prompt} onChange={handlePromptChange} />
      </div>
      <button onClick={() => fetchRealTimeUpdates()}>Fetch Updates</button>
      <div>
        {results.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <button key={pageNumber} onClick={() => handlePageChange(pageNumber)}>
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};
