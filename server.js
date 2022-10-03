const express = require("express");
require("dotenv").config();
const app = express();
const userRoutes = require("./routes/userRoutes");
const supportRoutes = require("./routes/supportRoutes");
const connectDB = require("./config/db");
const User = require("./models/userModel");
const Transaction = require("./models/transactionModel");
const Investment = require("./models/investmentModel");
const Email = require("./models/emailModel");
const cors = require("cors");

const port = process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/support", supportRoutes);

const func = async () => {
  await Email.find().then((data) => console.log(data));
};

// func();

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
