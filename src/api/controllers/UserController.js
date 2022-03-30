const User = require("../models/User");
const storage = require("../utils/storage");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
module.exports = {
  // key : value
  findAll: async (req, res) => {
    try {
      // const allUser = await User.find();
      const allActiveUsers = await User.find({ is_active: true });
      res.status(200).json({ message: "All users ", users: allActiveUsers });
    } catch (error) {
      res.status(400).json({
        message: "Error recover users",
        error,
      });
    }
  },

  create: async (req, res) => {
    try {
      console.log("process.env => ", process.env.NODE_ENV)
      console.log("req.body = ", req.body)
      console.log("User = ", User)
      const salt = await bcrypt.genSalt(SALT_ROUNDS)
      const { password } = req.body
      const passwordHash = await bcrypt.hash(password, salt);
      console.log(passwordHash)
      req.body['password'] = passwordHash
      const newUser = await User.create(req.body);
      console.log("newUser con hash", newUser)
      res.status(201).json({
        message: "User created sucessfully",
        user: newUser,
      });
    } catch (error) {
      res.status(400).json({
        message: "Error creating user",
        error,
      });
    }
  },

  findOneById: async (req, res) => {
    const { idUser } = req.params;

    try {
      const userFound = await User.findById(idUser, { is_active: true });
      if (!userFound) {
        res.status(404).json({ message: "User not found or inactive" });
      } else {
        res.status(200).json({
          message: "User found ",
          user: userFound,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error user not found",
        error,
      });
    }
  },

  findOneByEmail: async (req, res) => {
    const { email } = req.params;
    console.log("req.params =", req.params)

    try {
      const userFound = await User.findOne({ email: email });
      if (!userFound) {
        res.status(404).json({ message: "User not found or inactive" });
      } else {
        res.status(200).json({
          message: "User found ",
          user: userFound,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error user not found",
        error,
      });
    }
  },

  updateOneById: async (req, res) => {
    const id = req.params.idUser;
    const salt = await bcrypt.genSalt(SALT_ROUNDS)
    const { password } = req.body
    if (password) {
      const passwordHash = await bcrypt.hash(password, salt);
      console.log(passwordHash)
      req.body['password'] = passwordHash
    }

    try {
      const userUpdated = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json({
        message: "User updated successfully ",
        user: userUpdated,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error update user",
        error,
      });
    }
  },

  deleteById: async (req, res) => {
    const id = req.params.idUser;

    try {
      const userDeleted = await User.findByIdAndDelete(id);
      console.log("RESPONSE DELETED", userDeleted);
      res.status(200).json({
        message: "User deleted successfully ",
        user: userDeleted._id,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error delete user",
        error,
      });
    }
  },

  softDeletebyId: async (req, res) => {
    const id = req.params.idUser;
    try {
      const userSoftDeleted = await User.findByIdAndUpdate(
        id,
        { is_active: false },
        { new: true }
      );
      res.status(200).json({
        message: "User soft deleted successfully ",
        user: userSoftDeleted,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error update user",
        error,
      });
    }
  },

};
