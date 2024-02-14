import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import config from "../../config/config.json";

class EnhancedGoogleGenerativeAI {
  constructor(apiKey, safetySettings) {
    this.generativeAI = new GoogleGenerativeAI(apiKey, safetySettings);
  }

  getGenerativeModel({ model, generationConfig }) {
    return this.generativeAI.getGenerativeModel({ model, generationConfig });
  }

  setSafetySettings(settings) {
    this.generativeAI.setSafetySettings(settings);
  }

  // Additional methods and enhancements can be added here
}

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

const googleGenerativeAI = new EnhancedGoogleGenerativeAI(config.api_key, safetySettings);

export default googleGenerativeAI;