// // Update with your config settings.

// module.exports = {
//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './data/hobbits.db3',
//     },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './data/migrations',
//     },
//     seeds: {
//       directory: './data/seeds',
//     },
//   },
//   testing: {
//     client: 'sqlite3',
//     connection: {
//       filename: './data/test.db3',
//     },
//     useNullAsDefault: true,
//     migrations: {
//       directory: './data/migrations',
//     },
//     seeds: {
//       directory: './data/seeds',
//     },
//   },
// };

const sqlite = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
}

// Knex will automatically look for an object named development, not dev.
// Will need to use --env=dev
// Or --env=test
// To determine which environment to migrate
// Or which inviroment to seed with mock data
module.exports = {
  dev: {
    ...sqlite,
    connection: {
      filename: "./data/dev.db3",
    },
  },
  test: {
    ...sqlite,
    connection: {
      filename: "./data/test.db3",
    },
  },
}