const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// routes
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});


app.listen(PORT, () => {
    console.log(`Running on port ${PORT}..`);
})