# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, error handling, and advanced features.

---

## ✅ Assignment Overview

You will:
1. Set up an Express.js server
2. Create RESTful API routes for a product resource
3. Implement custom middleware for logging, authentication, and validation
4. Add comprehensive error handling
5. Develop advanced features like filtering, pagination, and search

---

## 🚀 Getting Started

1. Accept the GitHub Classroom assignment invitation  
2. Clone your personal repository that was created by GitHub Classroom  
3. Install dependencies:
   bash
   npm install

   - Run the server:
npm start

📁 Files Included
- Week2-Assignment.md: Detailed assignment instructions
- server.js: Main Express.js server file
- routes/products.js: RESTful routes for product resource
- middleware/logger.js: Logs request method, URL, and timestamp
- middleware/auth.js: Checks for API key in headers
- middleware/validateProduct.js: Validates product data
- utils/errorHandler.js: Global error handling middleware
- utils/customErrors.js: Custom error classes
- .env.example: Example environment variables file
- README.md: Project documentation

⚙️ Requirements
- Node.js (v18 or higher)
- npm or yarn
- Postman, Insomnia, or curl for API testing

📦 API Endpoints
Product Routes
- GET /api/products
Returns all products
- GET /api/products/:id
Returns a specific product by ID
- POST /api/products
Creates a new product
Headers:
x-api-key: your-secret-key
- Body Example:
{
  "name": "Tablet",
  "description": "10-inch screen",
  "price": 300,
  "category": "electronics",
  "inStock": true
}
- PUT /api/products/:id
Updates an existing product
Headers:
x-api-key: your-secret-key
- Body Example:
{
  "price": 350,
  "inStock": false
}
- DELETE /api/products/:id
Deletes a product
Headers:
x-api-key: your-secret-key



🧠 Middleware Features
- Logger: Logs method, URL, and timestamp for every request
- Authentication: Requires x-api-key header for protected routes
- Validation: Ensures product data is complete and correctly typed

🚨 Error Handling
- Global error handler for catching and formatting errors
- Custom error classes:
- NotFoundError
- ValidationError
- UnauthorizedError

🔍 Advanced Features
- Filtering products by category:
GET /api/products?category=electronics
- Pagination support:
GET /api/products?page=2&limit=5
- Search by name:
GET /api/products/search?name=coffee
- Product statistics:
GET /api/products/stats


