const express = require("express");
const cookieParser = require("cookie-parser");
<<<<<<< HEAD

const authRouter = require("./routes/auth.routes");
const accountRouter = require("./routes/account.routes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/accounts", accountRouter);

=======
const authRouter = require("./routes/auth.routes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);

>>>>>>> main
app.get("/", (req, res) => {
  res.send("Ledger Service is up and running");
});
module.exports = app;
