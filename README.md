# NestJS Clean Architecture

A complete NestJS application with a modular, clean architecture. This project includes modules for Auth, Users, and Products, with basic CRUD APIs for Users and Products.

## Features

- **Modular Architecture**: Code is organized into `Auth`, `Users`, and `Products` modules.
- **CRUD APIs**: Basic Create, Read, Update, and Delete operations for Users and Products.
- **DTOs and Validation**: Uses Data Transfer Objects (DTOs) with `class-validator` for request validation.
- **Repository Pattern**: Implements the repository pattern to separate business logic from data access.
- **In-Memory Storage**: Uses in-memory arrays for data storage (no database required).
- **Logging**: A logging middleware that logs incoming requests.
- **Global Exception Filter**: A global filter to catch and format all exceptions.
- **Response Interceptor**: An interceptor to format all successful responses.

## Project Structure

```text
nest-clean-architecture/
├── src/
│   ├── auth/                 # Auth module
│   │   ├── constants/
│   │   ├── dto/
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   └── auth.service.ts
│   ├── users/                # Users module
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── repositories/
│   │   ├── users.controller.ts
│   │   ├── users.module.ts
│   │   └── users.service.ts
│   ├── products/             # Products module
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── repositories/
│   │   ├── products.controller.ts
│   │   ├── products.module.ts
│   │   └── products.service.ts
│   ├── common/               # Common features
│   │   ├── filters/
│   │   ├── interceptors/
│   │   └── middleware/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── .gitignore
├── .prettierrc
├── nest-cli.json
├── package.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nest-clean-architecture.git
   cd nest-clean-architecture
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the App

- **Development mode**:

  ```bash
  npm run start
  ```

- **Watch mode**:

  ```bash
  npm run start:dev
  ```

- **Production mode**:

  ```bash
  npm run start:prod
  ```

The application will be available at `http://localhost:3000`.

## Running Tests

- **Unit tests**:

  ```bash
  npm run test
  ```

- **End-to-end tests**:

  ```bash
  npm run test:e2e
  ```

- **Test coverage**:

  ```bash
  npm run test:cov
  ```

## API Endpoints

All endpoints are prefixed with `/api/v1`.

### Auth

- **POST /auth/login**
  - **Description**: Authenticates a user and returns a JWT token.
  - **Body**:

    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```

### Users

- **POST /users**
  - **Description**: Creates a new user.
  - **Body**:

    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```

- **GET /users**
  - **Description**: Retrieves all users.

- **GET /users/:id**
  - **Description**: Retrieves a single user by their ID.

- **PATCH /users/:id**
  - **Description**: Updates a user's information.
  - **Body**:

    ```json
    {
      "name": "Johnathan Doe"
    }
    ```

- **DELETE /users/:id**
  - **Description**: Deletes a user by their ID.

### Products

- **POST /products**
  - **Description**: Creates a new product.
  - **Body**:

    ```json
    {
      "name": "Example Product",
      "price": 99.99
    }
    ```

- **GET /products**
  - **Description**: Retrieves all products.

- **GET /products/:id**
  - **Description**: Retrieves a single product by its ID.

- **PATCH /products/:id**
  - **Description**: Updates a product's information.
  - **Body**:

    ```json
    {
      "price": 129.99
    }
    ```

- **DELETE /products/:id**
  - **Description**: Deletes a product by their ID.
