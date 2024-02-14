const NodeCache = require('node-cache');
const config = require('../../config/config.json');
const { handleApiError } = require('./errorHandling');

const cache = new NodeCache({ stdTTL: config.cache_duration });

const cacheResults = (key, data) => {
  cache.set(key, data);
  return data;
};

const getCachedResults = (key) => {
  const cachedData = cache.get(key);
  return cachedData || null;
};

const serveCachedResults = (key, res) => {
  const cachedResults = getCachedResults(key);

  if (cachedResults) {
    res.json({ results: cachedResults, page: 1, totalPages: 1 });
  } else {
    handleApiError({ message: 'Cached results not found' }, res);
  }
};

module.exports = { cacheResults, getCachedResults, serveCachedResults };