const { default: mongoose } = require("mongoose");
require('dotenv').config({path: './config/.env'})

mongoose
  .connect(
    "mongodb+srv://" + process.env.DB_LOG +"@cluster0.vvmwg.mongodb.net/socialMedia",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Connexion failed", err));
