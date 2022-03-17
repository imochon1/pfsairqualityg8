require("dotenv").config();

const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');

const config = require("./config");
// console.log("mongo_uri", config.mongo_uri);

mongoose
  // .connect(config.mongo_uri)
  .connect(`mongodb+srv://carlosavrelsalvador:VmjpSUC0WhpmF6ph@cluster0.q53vc.mongodb.net/pfsairqualityg8-staging?retryWrites=true&w=majority`)
  .then(() => console.log("Mongo DB connected"))
  .catch(() => console.log("Error in connection"));

const PORT = process.env.PORT || 5000; // https://help.heroku.com/P1AVPANS/why-is-my-node-js-app-crashing-with-an-r10-error
const app = express();
const server = require('http').Server(app);
const PlantRouter = require("./routes/PlantRouter");
const UserRouter = require("./routes/UserRouter");

app.use(cors());
app.use('/health', (req, res) => {
  res.status(200).json({
    appName: 'API',
    version: process.env.npm_package_version,
    status: 'OK',
  });
});

// get localhost:5000
app.get("/", (__, res) => {
  res.json({ message: "Backend APi-NOSQL pfsairqualityg8 running " });
});

app.use("/plants", PlantRouter);

app.use("/users", UserRouter);

server.listen(PORT, (error) => {
  if (error) {
    console.log(`
          \n\n
          --------------------------------
          --------------------------------

          API:

          Status: Error
          Log: ${error}

          --------------------------------
          --------------------------------
          \n\n`
    );
  } else {
    console.log(`
          \n\n
          --------------------------------
          --------------------------------

          API:

          Name: Express API
          Port: ${PORT}
          Status: OK

          --------------------------------
          --------------------------------
          \n\n`
    );
  }
});