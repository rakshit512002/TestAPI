const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
// const colors = require("colors");
const path = require("path");

// Import the Routes and Middlewares below
const userRoutes = require("./Routes/userRoutes.js");
const { errorHandler, notFound } = require("./Middlewares/errorMiddleware.js");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// Deploy the Routes below
app.use("/api/users", userRoutes);

// --------------------------deployment------------------------------
// const __dirname = path.resolve();

// We need to alter the below commands while merging the froneend and the backend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

// Deploy the error handling middlewares below
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);
