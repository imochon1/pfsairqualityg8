const User = require("../models/User");
const storage = require("../utils/storage");

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
      const newUser = await User.create(req.body);
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

  updateOneById: async (req, res) => {
    const id = req.params.idUser;

    // if (req.file) {
    //   const url = await storage(req.file);
    //   console.log("url file", url);
    //   req.body.profile_picture = url;
    // }

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
