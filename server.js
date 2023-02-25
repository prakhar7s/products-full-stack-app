const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/itemRoutes");

require("dotenv").config();

const app = express();

// middleware
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

// Database connection
const dbURL = process.env.DB_URL;
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    // Start the server
    app.listen(PORT, function () {
      console.log("CONNECTED TO DB");
    });
  })
  .catch((err) => console.log(err));

// Routes
app.use(itemRoutes);
