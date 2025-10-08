const express = require('express');
const { v4: uuidv4 } = require('uuid');
const validateProduct = require('../middleware/validateProduct');

const router = express.Router();

let products = [
  { id: '1', name: 'Laptop', description: 'High-performance laptop', price: 1200, category: 'electronics', inStock: true },
  { id: '2', name: 'Smartphone', description: 'Latest model', price: 800, category: 'electronics', inStock: true },
  { id: '3', name: 'Coffee Maker', description: 'Programmable coffee maker', price: 50, category: 'kitchen', inStock: false }
];

// GET all products
router.get('/', (req, res) => {
  const { category, page = 1, limit = 10 } = req.query;
  let result = products;

  // Filter by category
  if (category) {
    result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  // Pagination
  const startIndex = (parseInt(page) - 1) * parseInt(limit);
  const endIndex = startIndex + parseInt(limit);
  const paginatedResult = result.slice(startIndex, endIndex);

  res.json({
    page: parseInt(page),
    limit: parseInt(limit),
    total: result.length,
    data: paginatedResult
  });
});

// GET product by ID
const { NotFoundError } = require('../utils/customErrors');

router.get('/:id', (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) {
    return next(new NotFoundError('Product not found'));
  }
  res.json(product);
});

// POST new product
router.post('/', validateProduct, (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
router.put('/:id', validateProduct, (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
  } else {
    const { NotFoundError } = require('../utils/customErrors');
throw new NotFoundError('Product not found');
  }
});

// DELETE product
router.delete('/:id', (req, res) => {
  const initialLength = products.length;
  products = products.filter(p => p.id !== req.params.id);
  if (products.length < initialLength) {
    res.status(204).send();
  } else {
    const { NotFoundError } = require('../utils/customErrors');
throw new NotFoundError('Product not found');
  }
});

module.exports = router;
router.get('/search', (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: 'Name query is required' });
  }

  const result = products.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(result);
});
router.get('/stats', (req, res) => {
  const stats = {};

  products.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });

  res.json(stats);
});