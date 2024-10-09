const express = require("express")
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT;

const corsOptions = {
    origin: process.env.LINK,
    optionsSuccessStatus: 200,
    credentials: true,
};
  
app.options("*", cors(corsOptions));
app.use(cors(corsOptions));

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB and listening on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
});



