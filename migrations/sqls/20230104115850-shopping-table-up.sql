CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(150),
    lastName VARCHAR(150),
    userName VARCHAR(150),
    password VARCHAR(200)
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    price integer,
    category VARCHAR(100)
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    product_id bigint REFERENCES products(id),
    product_quantity integer,
    user_id bigint REFERENCES users(id),
    status VARCHAR(50)
);

CREATE TABLE order_products(
    id SERIAL PRIMARY KEY,
    quantity integer,
    product_id bigint REFERENCES products(id),
    order_id bigint REFERENCES orders(id)
);
