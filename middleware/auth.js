const { UnauthorizedError } = require('../utils/customErrors');

module.exports = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.API_KEY) {
    return next(new UnauthorizedError('Invalid API key'));
  }
  next();
};
