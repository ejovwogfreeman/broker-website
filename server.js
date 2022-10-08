const express = require("express");
require("dotenv").config();
const app = express();
const userRoutes = require("./routes/userRoutes");
const supportRoutes = require("./routes/supportRoutes");
const connectDB = require("./config/db");
const User = require("./models/userModel");
const Transaction = require("./models/transactionModel");
const Deposit = require("./models/depositModel");
const Investment = require("./models/investmentModel");
const Email = require("./models/emailModel");
const cors = require("cors");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

let gfs, gridfsBucket;
const conn = mongoose.connection;

const port = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(express.json());

app.get("/file/:filename", async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.use("/api/users", userRoutes);
app.use("/api/support", supportRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to financial freedom investment");
});

const func = async () => {
  await Email.find().then((data) => console.log(data));
};

// func();

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
