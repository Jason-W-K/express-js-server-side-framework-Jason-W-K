module.exports = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey === 'your-secret-key') {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};