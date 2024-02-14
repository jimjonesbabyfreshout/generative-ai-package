import GoogleGenerativeAI from '@google/generative-ai';
import EnhancedGoogleGenerativeAI from '../../src/utils/GoogleGenerativeAI';
import config from '../../config/config.json';

// Mock API key for testing
const mockApiKey = 'test-api-key';

// Mock safety settings for testing
const mockSafetySettings = [
  {
    category: 'HARM_CATEGORY_HARASSMENT',
    threshold: 'BLOCK_ONLY_HIGH',
  },
];

describe('EnhancedGoogleGenerativeAI', () => {
  let enhancedGoogleGenerativeAI;

  beforeEach(() => {
    enhancedGoogleGenerativeAI = new EnhancedGoogleGenerativeAI(mockApiKey, mockSafetySettings);
  });

  it('should instantiate GoogleGenerativeAI with provided API key and safety settings', () => {
    expect(enhancedGoogleGenerativeAI.generativeAI).toBeInstanceOf(GoogleGenerativeAI);
    expect(enhancedGoogleGenerativeAI.generativeAI.apiKey).toEqual(mockApiKey);
    expect(enhancedGoogleGenerativeAI.generativeAI.safetySettings).toEqual(mockSafetySettings);
  });

  it('should set safety settings using setSafetySettings method', () => {
    const newSafetySettings = [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
    ];

    enhancedGoogleGenerativeAI.setSafetySettings(newSafetySettings);

    expect(enhancedGoogleGenerativeAI.generativeAI.safetySettings).toEqual(newSafetySettings);
  });

  it('should get generative model with provided model and generationConfig', () => {
    const model = 'gemini-pro';
    const generationConfig = {
      maxOutputTokens: 50,
    };

    const generativeModel = enhancedGoogleGenerativeAI.getGenerativeModel({ model, generationConfig });

    expect(generativeModel).toBeDefined();
    // Add more assertions based on your requirements
  });
});

// Add more test cases as needed