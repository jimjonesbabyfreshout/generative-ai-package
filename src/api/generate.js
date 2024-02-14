const express = require('express');
const router = express.Router();
const { generateContent, paginateResults, cacheResults } = require('./utils/generateHelpers');

router.post('/', async (req, res) => {
  try {
    const { prompt, page = 1, model = "default" } = req.body;
    const results = await generateContent(prompt, model);
    const paginatedResults = paginateResults(results, page);
    const cachedResults = cacheResults(prompt, paginatedResults);
    res.json({ results: cachedResults, page, totalPages: Math.ceil(results.length / config.pagination.items_per_page) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;