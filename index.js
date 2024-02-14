import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './ui/components/App';
import ThemeStyles from './styles/theme.css'; // Include global theme styles
import './styles/app.css';

// Import Telemetry for tracking user interactions
import Telemetry from './utils/telemetry';

// Import Security for additional security measures
import Security from './utils/security';

// Import GoogleGenerativeAI for AI capabilities
import EnhancedGoogleGenerativeAI from './utils/GoogleGenerativeAI';
import config from './config/config.json';

// Configure and initialize Telemetry
Telemetry.init({ apiKey: 'your-telemetry-api-key' });

// Configure and initialize Security measures
Security.setupHeadersMiddleware();

// Initialize GoogleGenerativeAI with API key and safety settings
const googleGenerativeAI = new EnhancedGoogleGenerativeAI(config.api_key, config.safetySettings);

ReactDOM.render(
  <Router>
    <ThemeStyles />
    <App googleGenerativeAI={googleGenerativeAI} />
  </Router>,
  document.getElementById('root')
);