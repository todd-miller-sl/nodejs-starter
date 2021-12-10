module.exports = {
  development: {
    client: 'pg',
    connection: process.env.PG_CONNECTION,
    migrations: { directory: './src/migrations' },
    seeds: { directory: './src/seeds' },
  },

  testing: {
    client: 'pg',
    connection: process.env.PG_CONNECTION_TESTING,
    migrations: { directory: './src/migrations' },
    seeds: { directory: './src/seeds' },
  },

  staging: {
    client: 'pg',
    connection: process.env.PG_CONNECTION,
    migrations: { directory: './src/migrations' },
    seeds: { directory: './src/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.PG_CONNECTION,
    migrations: { directory: './src/migrations' },
    seeds: { directory: './src/seeds' },
  },
};
