# 📦 Express.js Product API

## 🚀 Overview
This is a RESTful API built with Express.js to manage a collection of products. It supports full CRUD operations, middleware for logging, authentication, and validation, as well as advanced features like filtering, pagination, search, and statistics.

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone <your-github-classroom-repo-url>
cd express-product-api
2. Install Dependencies
npm install


3. Create a .env File
Use the .env.example file as a reference and set your own API key.

4. Start the Server
npm start


The server will run locally at:
http://localhost:3000



🔐 Environment Variables
Create a .env file in the root directory with the following:
API_KEY=your-secret-key
PORT=3000



📚 API Endpoints
Base URL
http://localhost:3000/api/products



Public Routes (No API Key Required)
- GET /api/products
→ Returns all products
→ Supports filtering by category (?category=electronics)
→ Supports pagination (?page=1&limit=5)
- GET /api/products/:id
→ Returns a specific product by its ID
- GET /api/products/search?name=tablet
→ Searches products by name (case-insensitive partial match)
- GET /api/products/stats
→ Returns product statistics grouped by category



Protected Routes (require x-api-key header)
- POST /api/products
→ Creates a new product
→ Requires full product data in request body

- PUT /api/products/:id
→ Updates an existing product by ID
→ Partial updates allowed (e.g., just price or inStock)

- DELETE /api/products/:id
→ Deletes a product by ID



🧪 Example Requests
Create Product
POST /api/products
Headers:
  x-api-key: your-secret-key
Body:
{
  "name": "Tablet",
  "description": "10-inch screen",
  "price": 300,
  "category": "electronics",
  "inStock": true
}


Update Product
PUT /api/products/abc123
Headers:
  x-api-key: your-secret-key
Body:
{
  "price": 350,
  "inStock": false
}


Filter by Category
GET /api/products?category=electronics


Pagination
GET /api/products?page=2&limit=5


Search by Name
GET /api/products/search?name=tablet


Product Stats
GET /api/products/stats



🧰 Middleware Features
- Logger: Logs method, URL, and timestamp for every request.
- Authentication: Requires x-api-key header for protected routes.
- Validation: Ensures product data is complete and correctly typed.

🚨 Error Handling
- Global error handler for formatting and responding to errors.
- Custom error classes:
- NotFoundError
- ValidationError
- UnauthorizedError

📌 Notes
- This API uses in-memory storage (no database).
- Use Postman, Insomnia, or curl to test endpoints.
- Ensure your .env file is configured before starting the server.


