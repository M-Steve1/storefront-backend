# Storefront Backend

This is an E-commerce project built with Postgres and Express, transpiled from
typescript to javascript. This project also contain integration
testing done with jasmine.

## Intallation

After cloning the repository run the command below

`   $ npm install                     `

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

- To connect to the development database.
- Change `ENV = test` to `ENV = dev` in '.env' file
- Setup database for development and make sure it tallys with the one on source code
- Edit necessary spec file(s) and variables for development
- Create table `db-migrate up`
- Drop table `db-migrate down`
- start script:

```
 "scripts": {
    "start": "nodemon src/server.ts"
 }
```

#### Testing

- To connect to the testing database.
- Change `ENV = dev` to `ENV = test` in '.env' file
- Setup database for testing and make sure it tallys with the one on source code
- Edit necessary spec file(s) and variables for testing
- Create table `db-migrate --env test up`
- Drop table `db-migrate --env test down`
- Test scripts:

```
 "scripts": {
    "build": "npx tsc",
    "test": "npm run build && jasmine"
  },
```

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

#### Product

- id
- name
- price
- category

#### User

- id
- first_name
- last_name
- user_name
- password

#### Orders

- id
- product_id
- product_quantity
- user_id
- status

#### Formatting

```
 "scripts": {
    "prettier": "prettier --config .prettierrc \"src/**/*.ts\" --write",
    "lint": "eslint src/**/*.ts",
 }
```
