const express = require("express");
const {
  getRequests,
  getRequestById,
  createRequest,
  updateRequest,
  deleteRequest,
} = require("../controllers/requestController.js");
const router = express.Router();
const { protect } = require("../Middlewares/authMiddleware.js");

router.route("/").get(protect, getRequests);
router
  .route("/:id")
  .get(getRequestById)
  .delete(protect, deleteRequest)
  .put(protect, updateRequest); // For updating the request
router.route("/create").post(protect, createRequest); // For creating a new request

module.exports = router;
