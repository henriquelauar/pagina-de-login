const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banco",
});

app.get("/", (req, res) => {
  db.query(
    "INSERT INTO users (email, password) VALUES ('henriquelauar2002@gmail.com', '12345678')",
    (err, result) => {
      if (err) console.log(err);
    }
  );
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
