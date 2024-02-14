const handleApiError = (error, res) => {
  console.error(error);

  if (error.response && error.response.status) {
    const { status, data } = error.response;
    res.status(status).json({ error: `API Error - ${status}`, details: data });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};