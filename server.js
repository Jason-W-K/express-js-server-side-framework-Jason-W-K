const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./utils/errorHandler');
const productRoutes = require('./routes/products');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(logger);
app.use('/api/products', auth); // Protect product routes with API key

// Routes
app.use('/api/products', productRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});