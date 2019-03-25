// Update with your config settings.

const prodDbConnection = {
  host: "localhost",
  database: "bublDB",
  user: "student",
  password: "password"
};

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/bublDB.sqlite3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  testing: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/testingDB.sqlite3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL || prodDbConnection,
  //   migrations: {
  //     directory: './data/migrations'
  //   },
  //   seeds: {
  //     directory: './data/seeds'
  //   }
  // }
  production: {
    client: "sqlite3",
    connection: "./data/testingDB.sqlite3",
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
