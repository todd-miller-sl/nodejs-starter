nodejs-starter
==============

> Node.js starter template

## Getting started

### 1. Cloning repo

```sh
git clone git@github.com:dustinmwang2104/nodejs-starter.git
cd nodejs-starter
```

### 2. Preparation

1. Create environment files.

```sh
cp .env.example .env.development
cp .env.example .env.testing
```

2. Ensure the parameters inside the environment file are correct for database
connection.

3. Create schema (defined as `PGDATABASE`), if not exists.

4. Install dependencies.

```sh
npm install
```

### 3. Starting the server

```sh
npm start
```

## Scripts

```sh
# Start server
npm start

# Start server with hot-reloading
npm run dev

# Run unit tests
npm test

# Run unit tests with code coverage report
npm run test:coverage

# Lint source files
npm run lint

# Lint source files and fix
npm run lint:fix

# Run database migration
npm run migrate

# Create a new database migration
npm run migrate:make

# Refresh database and run migrations
npm run migrate:refresh

# Refresh database, run migrations and run seeding
npm run migrate:refresh:seed

# Rollback all database migrations
npm run unmigrate

# Run database seeding
npm run seed

# Create a new database seeder
npm run seed:make
```
