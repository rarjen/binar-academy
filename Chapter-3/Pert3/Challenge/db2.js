import { Client } from "pg";

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "challenge_ch3",
  password: "root",
  port: 5432,
});
client.connect();
client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  client.end();
});
