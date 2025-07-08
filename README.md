# Basic CRUD App

A simple Node.js + Express + MongoDB application for managing products with full Create, Read, Update, and Delete (CRUD) functionality.

## Features

- Add new products
- View all products
- View a single product by ID
- Update product details
- Delete products
- Uses MongoDB for data storage
- RESTful API endpoints

## Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- ES Modules

## Project Structure

```
/models
  productModel.js
/controllers
  productController.js
/routes
  productRoutes.js
index.js
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas account or local MongoDB instance

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/basic-crud-app.git
   cd basic-crud-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure MongoDB:**
   - Update the MongoDB connection string in `index.js` if needed.

4. **Run the app:**
   ```sh
   npm run dev
   ```
   The server will start on [http://localhost:3000](http://localhost:3000).

## API Endpoints

| Method | Endpoint                | Description              |
|--------|------------------------|--------------------------|
| GET    | `/api/products`        | Get all products         |
| GET    | `/api/products/:id`    | Get product by ID        |
| POST   | `/api/products`        | Create a new product     |
| PUT    | `/api/products/:id`    | Update a product by ID   |
| DELETE | `/api/products/:id`    | Delete a product by ID   |

## Example Product Object

```json
{
  "name": "Sample Product",
  "quantity": 10,
  "price": 99.99,
  "Image": "https://example.com/image.jpg"
}
```

## Notes

- All API responses are in JSON format.
- Make sure your MongoDB instance is running and accessible.

## License

MIT

