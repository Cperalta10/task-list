const User = require("../models/userModel");

const signup = async (req, res, next) => {
    const { email } = req.body;

    let user;

    try {
        user = await User.findOne({ email });
    } catch (err) {
        console.log(err);
    }

    if (user) {
        return res
            .status(400)
            .json({ message: "User already exist... Login instead." });
    }

    const newUser = new User(req.body);

    try {
        const user = await newUser.save();
        return res.status(201).json({ user });
    } catch (err) {
        console.log(err);
    }
};

const getUser = async (req, res, next) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(400).json({ message: "user does not exist" });
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

const getAllUser = async (req, res, next) => {
    try {
        let users = await User.find();
        if (!users) {
            return res.status(404).json({ message: "No users found.." });
        }
        users = users.map((user) => {
            return user;
        });
        return res.status(200).json({ users });
    } catch (err) {
        res.status(500).json(error);
    }
};

module.exports = {
    getAllUser,
    getUser,
    signup,
};
