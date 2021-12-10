module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
    migrations: { directory: './src/migrations' },
    seeds: { directory: './src/seeds' },
  },

  testing: {
    client: 'pg',
    connection: {
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
    migrations: { directory: './src/migrations' },
    seeds: { directory: './src/seeds' },
  },

  staging: {
    client: 'pg',
    connection: {
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
    migrations: { directory: './src/migrations' },
    seeds: { directory: './src/seeds' },
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
    },
    migrations: { directory: './src/migrations' },
    seeds: { directory: './src/seeds' },
  },
};
