const pgp = require("pg-promise")({});
const db = pgp(
  process.env.DATABASE_URL || "postgres://localhost:5432/furever_home"
);
// const db = pgp("postgres://localhost:5432/furever_home");

module.exports = { db };
