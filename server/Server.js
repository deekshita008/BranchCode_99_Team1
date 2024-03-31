require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

const authRoutes = require("./Routes/authRoute");
const app = express();
const port = process.env.PORT || 8000;

app.use(
  session({
    secret: 'SIFBJKHFGUSFBUFLSF',
    resave: false,
    saveUninitialized: true,
  })
);

// app.use(passport.initialize());
// app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors({
//     origin: 'http://localhost:5173',
//     credentials: true
// }));

const User = require("./Models/userModel");

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use('/', authRoutes);

mongoose
  .connect(
    "mongodb+srv://nisargpatil03:RJxKVOXRL0KzYv4y@gcdb0.7tml8w2.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));


app.use('/',authRoutes)
app.get("/", (req, res) => {
  res.send("backend");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
