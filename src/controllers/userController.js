const User = require("../models/userModel");

// Get all users with pagination, search and sort
exports.getUsers = async (req, res) => {
  const { page = 1, limit = 5, search = "", sort = "" } = req.query;
  const query = {
    $or: [
      { first_name: { $regex: search, $options: "i" } },
      { last_name: { $regex: search, $options: "i" } },
    ],
  };
  const sortQuery = sort.startsWith("-")
    ? { [sort.slice(1)]: -1 }
    : { [sort]: 1 };

  try {
    const users = await User.find(query)
      .sort(sort ? sortQuery : {})
      .limit(parseInt(limit))
      .skip((page - 1) * limit);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).json({});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user by ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).json({});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
