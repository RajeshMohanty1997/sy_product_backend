const express = require("express");
const productsRouter = require("./routes/products");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

//Creating middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/v1/products", productsRouter);

//Connecting to the mongoDB
mongoose.connect(process.env.DB_CONNECTION_URL, () => {
  console.log("Connected to db");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running....");
});
