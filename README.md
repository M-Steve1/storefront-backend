# Storefront Backend

This is an E-commerce project built with Postgres and Express, transpiled from
typescript to javascript. This project also contain integration
testing done with jasmine.

## Intallation

After cloning the repository run the command below

`$ npm install`

## Usage

- Setup your .env file using the .env.example template file.
- Create a database.json file

```
// database.json
{
    "dev": {
        "driver": "pg",
        "user": "YOUR USERNAME",
        "password": "YOUR PASSWORD",
        "host": "YOUR HOST",
        "database": "YOUR DATABASE FOR DEVELOPMENT",
        "port": "YOUR PORT"
    },

    "test": {
        "driver": "pg",
        "user": "YOUR USERNAME",
        "password": "YOUR PASSWORD",
        "host": "YOUR HOST",
        "database": "YOUR DATABASE FOR TESTING",
        "port": "YOUR PORT"
    }
}
```

- Using psql create a test and dev database.
- Create table `db-migrate up`
- Drop table `db-migrate down`

#### Development

- Connect to the development database.
- Setup database for development and make sure it tally with the one on source code
- Create table `db-migrate up`
- Drop table `db-migrate down`
- start script:

```
 "scripts": {
    "start": "nodemon src/server.ts"
 }
```

#### Testing

- Setup database for testing and make sure it tally with the one on source code

- Test scripts:

```
 "scripts": {
  "build": "npx tsc",
  "test": "set ENV=test && db-migrate --env test up && npm run build && jasmine"
  },
```

- Drop table `db-migrate --env test down`

## API Endpoints

#### Products

- Index `productRouter.get('/product/index', index);`
- Show `productRouter.get('/product/show/:id', getProductById);`
- Create `productRouter.post('/product/create', tokenAuth, create);`[token required]
- Top 5 most popular products `productServiceRouter.get('/product/five_most_popular_products', fiveMostPopularProducts);`
- Products by category `productServiceRouter.get('/product/category/:category', productsByCategory);`

#### Users

- Index `userRouter.get('/user/index', tokenAuth, index);`[token required]
- Show `userRouter.get('/user/show/:id', tokenAuth, getUserById);` [token required]
- Create `userRouter.post('/user/signup', createUser);`
- Signin `userRouter.post('/user/signin', authenticate);`

#### Orders

- Create `orderRoute.post('/order/create', tokenAuth, create);` [token required]
- Add Product to order `orderRoute.post('/order/:id/product', tokenAuth, addProduct);` [token required]
- Current Order by user `orderServiceRoute.get('/order/current_order/:id', idAuth, userCurrentOrder);`[token required]
- Completed Orders by user `orderServiceRoute.get('/order/completed_orders/:id', idAuth, userCompletedOrders);`[token required]

## Data Shapes

#### Products

- id SERIAL PRIMARY KEY
- name VARCHAR(200)
- price integer
- category VARCHAR(100)

#### Users

- id SERIAL PRIMARY KEY
- first_name VARCHAR(150)
- last_name VARCHAR(150)
- user_name VARCHAR(150)
- password VARCHAR(200)

#### Orders

- id SERIAL PRIMARY KEY
- product_id bigint REFERENCES products(id)
- product_quantity integer
- user_id bigint REFERENCES users(id)
- status VARCHAR(50)

#### order_products

- id SERIAL PRIMARY KEY
- quantity integer
- product_id bigint REFERENCES products(id)
- order_id bigint REFERENCES orders(id)

#### Formatting

```
 "scripts": {
    "prettier": "prettier --config .prettierrc \"src/**/*.ts\" --write",
    "lint": "eslint src/**/*.ts",
 }
```
