const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const env = require("dotenv").load(); //Use the .env file to load the variables
const blogRouter = require("./routes/blogRoutes");
const userRouter = require("./routes/userRoutes");

//Instantiate the express instance

const app = express();

//Middleware
app.use(helmet()); //lets start by adding some basic security
app.use(cors()); //allow cors
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(passport.initialize());

//Connect to Cosmos DB

//Connect to Cosmos DB Database
mongoose.Promise = global.Promise; //Make the global promise equal to the mongoose promise
mongoose
  .connect(
    process.env.COSMOSDB_CONNSTR + "?ssl=true&replicaSet=globaldb",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      auth: {
        user: process.env.COSMODDB_USER,
        password: process.env.COSMOSDB_PASSWORD
      }
    }
  )
  .then(() => console.log("Connection to CosmosDB successful"))
  .catch(err => console.error(err));

//middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes

app.use("/users", userRouter);
app.use("/blogs", blogRouter);

//Error 404 handling

app.use((req, res) => {
  res.status(404).json({ message: "Resource requested in unaivailable" });
});

//Listen to requests
PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}`);
});