const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
// const colors = require("colors");
const path = require("path");
const Request = require("./Models/requestModel.js");
const asyncHandler = require("express-async-handler");
const axios = require("axios");

// Import the Routes and Middlewares below
const userRoutes = require("./Routes/userRoutes.js");
const requestRoutes = require("./Routes/requestRoutes.js");
const { errorHandler, notFound } = require("./Middlewares/errorMiddleware.js");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// Deploy the Routes below
app.use("/api/users", userRoutes);
app.use("/api/requests", requestRoutes);

// --------------------------Function to make calls to 3rd party API------------------------------
const sendRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);

  const type = request.type,
    content = request.content,
    url = request.url,
    token = request.token;

  // Now we will send the request to 3rd party API
  if (type === "GET") {
    try {
      const fig = {
        headers: {
          Authorization: `${token}`,
        },
      };

      const { data } = await axios.get(url, fig);

      res.status(201).json(data);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      res.status(404);
      throw new Error(message);
    }
  } else if (type === "PUT") {
    try {
      const fig = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: content,
      };

      const { data } = await axios.post(url, fig);

      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      res.status(404);
      throw new Error(message);
    }
  } else if (type === "DELETE") {
    try {
      const fig = {
        headers: {
          Authorization: `${token}`,
        },
      };

      const { data } = await axios.delete(url, fig);

      res.status(201).json(data);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      res.status(404);
      throw new Error(message);
    }
  } else if (type === "POST") {
    try {
      const fig = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: content,
      };

      const { data } = await axios.post(url, fig);

      res.status(201).json(data);
    } catch (error) {
      console.log(error);
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;

      res.status(404);
      throw new Error(message);
    }
  }
});

app.get("/api/requests/send/:id", sendRequest);
// --------------------------Function to make calls to 3rd party API------------------------------

// --------------------------deployment------------------------------
// const __dirname = path.resolve();

// We need to alter the below commands while merging the frontend and the backend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("/api/requests/send/:id", sendRequest);

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
