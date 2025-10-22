const express = require('express');
const app = express();
const productsRouter = require('./routes/products');
const logger = require('./middleware/logger');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/products', productsRouter);

// Error Handler
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
