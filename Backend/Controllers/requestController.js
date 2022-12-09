const Request = require("../Models/requestModel.js");
const asyncHandler = require("express-async-handler");

// @desc    Get logged in user requests
// @route   GET /api/requests
// @access  Private
const getRequests = asyncHandler(async (req, res) => {
  const requests = await Request.find({ user: req.user._id });
  res.json(requests);
});

//@description     Fetch single Request
//@route           GET /api/requests/:id
//@access          Public
const getRequestById = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);

  if (request) {
    res.json(request);
  } else {
    res.status(404).json({ message: "Request not found" });
  }

  res.json(request);
});

//@description     Create or Update single Request
//@route           GET /api/requests/create
//@access          Private
const createRequest = asyncHandler(async (req, res) => {
  const { type, content, url, token } = req.body;

  if (!type || !url) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const request = new Request({
      user: req.user._id,
      type,
      content,
      url,
      token,
    });

    const createdRequest = await request.save();

    res.status(201).json(createdRequest);
  }
});

//@description     Delete single Request
//@route           DELETE /api/requests/:id
//@access          Private
const deleteRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);

  if (request.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (request) {
    await request.remove();
    res.json({ message: "Request Removed" });
  } else {
    res.status(404);
    throw new Error("Request Not Found");
  }
});

// @desc    Update a request
// @route   PUT /api/requests/:id
// @access  Private
const updateRequest = asyncHandler(async (req, res) => {
  const { type, content, url, token } = req.body;

  const request = await Request.findById(req.params.id);

  if (request.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (request) {
    request.type = type;
    request.content = content;
    request.url = url;
    request.token = token;

    const updatedRequest = await request.save();
    res.json(updatedRequest);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

module.exports = {
  getRequests,
  getRequestById,
  createRequest,
  updateRequest,
  deleteRequest,
};
