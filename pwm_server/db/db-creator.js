const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ecommerce.db');

// SQL statement to create a new table
const createTableSql = `
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price REAL,
    currency TEXT,
    category TEXT,
    inStock BOOLEAN,
    image TEXT,
    review REAL,
    discount REAL,
    description TEXT,
    shipping_cost REAL,
    shipping_method TEXT,
    shipping_estimatedDelivery TEXT
);`;

// Create the table
db.run(createTableSql, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Table created successfully');
});

// Close the database connection
db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Closed the database connection.');
});
