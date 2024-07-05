import "dotenv/config";

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT, PGSSL } = process.env;

const POSTGRES_CREDENTIALS = {
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: PGPORT,
  ssl: PGSSL,
};
export { POSTGRES_CREDENTIALS };
