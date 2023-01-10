CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(150),
    last_name VARCHAR(150),
    user_name VARCHAR(150),
    password VARCHAR(200)
);