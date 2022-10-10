import PG from "pg";

const Pool = PG.Pool;

export const conn = new Pool({
  user: "postgres",
  host: "localhost",
  database: "challenge_ch3",
  password: "root",
  port: 5432,
});

conn.connect((err) => {
  if (err) throw err;
  // console.log("Connected");
});
