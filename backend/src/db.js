const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./db/voluntarios.db",
  sqlite3.OPEN_READWRITE,
  err => {
    if (err) {
      console.log(err.message);
      return;
    }

    console.log("conectado ao banco de dados");
  }
);

module.exports = db;
