const mongoose = require("mongoose");
function connectionDb() {
  mongoose.set("strictQuery", true);
  let user = process.env.NOT_ADMIN_USER;
  let pass = process.env.NOT_ADMIN_PASS;
  let URL = `mongodb+srv://${user}:${pass}@estudosdev2.mrqrypv.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", () => {
    console.log("Erro");
  });

  db.on("open", () => {
    console.log("Sucesso!");
  });
}

module.exports = connectionDb;
