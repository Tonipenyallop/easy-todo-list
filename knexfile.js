// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "taesukim",
      password: "",
      database: "practice",
      charset: "utf8",
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: "ec2-52-70-205-234.compute-1.amazonaws.com",
      user: "axbtdxdvrsnylf",
      password:
        "883aafd35f8c562b4551d1be88bd74acb1e31ac3c516762d82ee032b45aeb9e4",
      database: "datmb9k78hnknc",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
