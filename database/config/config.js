require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: "postgres",
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
    logging: false,
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: "postgres",
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
    logging: false,
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
    logging: false,
  },
};
