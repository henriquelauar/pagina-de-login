const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const { compare } = require("bcrypt");
const app = express();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
        db.query(
          "INSERT INTO users (email, password) VALUE (?,?)",
          [email, hash],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "Usuário cadastrado com sucesso" });
          }
        );
    } else {
      res.send({ msg: "Email já cadastrado" });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
        if (err) {
            res.send({err: err})
        }
        if (result.lenght > 0) {
          compare(password, result[0].password, (error, response) => {
            if (error) {
              res.send(error)
            }
            if (response) {
              res.send ({ msg: "Usuário logado" })
            } else {
              res.send ({ msg: "Senha incorreta" })
            }
          })
        } else {
          res.send({ msg: "Usuário não registrado" })
        }
    }
  );
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
