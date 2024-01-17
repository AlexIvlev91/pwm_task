import express, { Request, Response } from "express";
import sqlite3 from "sqlite3";
import cors from 'cors';


// Define the product type
type Product = {
  id: number;
  name: string;
  price: number;
  currency: string;
  category: string;
  inStock: boolean;
  image: string;
  review: number;
  discount: number;
  description: string;
  shipping: {
    cost: number;
    method: string;
    estimatedDelivery: string;
  };
};

const app = express();
const port = 3001;

// Enable All CORS Requests for development
app.use(cors());

// Connect to the SQLite database
let db = new sqlite3.Database(
  "db/ecommerce.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connected to the SQLite database.");
    }
  }
);

// Function to get all products from the database
function getAllProducts(
  callback: (err: Error | null, products?: Product[]) => void
) {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) {
      callback(err);
      return;
    }
    // Type assertion here
    callback(null, rows as Product[]);
  });
}

// Products route
app.get("/products", (req: Request, res: Response) => {
  getAllProducts((err, products) => {
    if (err) {
      res.status(500).send("Error fetching data from the database");
      return;
    }
    res.json(products);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
