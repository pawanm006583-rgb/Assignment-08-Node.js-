const express = require("express");
const router = express.Router();

const User = require("../model/userModel");


router.post("/", async (req, res) => {
    try {
        const { name, email, age, course } = req.body;

        const newUser = new User({
            name,
            email,
            age,
            course
        });

        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User created successfully",
            user: savedUser
        });

    } catch (error) {
        console.error("Error creating user:", error.message);

        res.status(500).json({
            message: "Failed to create user",
            error: error.message
        });
    }
});


router.get("/", async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);

    } catch (error) {
        console.error("Error retrieving users:", error.message);

        res.status(500).json({
            message: "Failed to retrieve users",
            error: error.message
        });
    }
});


module.exports = router;