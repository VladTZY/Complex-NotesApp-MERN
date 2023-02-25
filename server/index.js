require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const notesRouter = require("./routes/notes");
const { sequelize } = require("./database/sequelize");

const app = express();

app.use(morgan("tiny"));
//app.use(helmet());
app.use(express.json());

app.use("/api/notes/", notesRouter);

sequelize.sync().then(() => {
  console.log("Connected to db");
  app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`);
  });
});
