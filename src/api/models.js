const { GoogleGenerativeAI } = require('@google/generative-ai');
const config = require('../../config/config.json');

const generativeAI = new GoogleGenerativeAI(config.api_key);

// Map of available models
const modelsMap = {
  default: config.models.default_model,
  multimodal: config.models.multimodal_model,
  // Add more model mappings as needed
};

// Function to get the generative model based on the specified type
const getGenerativeModel = (type) => {
  const modelName = modelsMap[type] || config.models.default_model;
  return generativeAI.getGenerativeModel({ model: modelName, generationConfig: config.advanced_options.generation_config });
};

module.exports = { getGenerativeModel };