nodejs-starter
==============

> Node.js starter template

## Prerequisites

1. [Docker](https://docker.com) engine
2. [docker-compose](https://docs.docker.com/compose)
3. [Node.js](https://nodejs.org/en/download/releases) 16.x
4. [npm](https://www.npmjs.com) 8.x

## Getting started

```sh
# Clone repo
git clone git@github.com:dustinmwang2104/nodejs-starter.git
cd nodejs-starter

# Install npm dependencies
npm install

# Create and start docker containers
docker-compose up

# Run database migrations and seeders
docker-compose exec app npm run migrate:refresh:seed
```

`docker-compose up` or `docker-compose start` will start server on host's port
`3333` and will expose main postgres server on host's port `4444`.

> *Tip: [`docker-compose` setup](docker-compose.yml) is only for development
purpose.

## Available npm scripts

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
