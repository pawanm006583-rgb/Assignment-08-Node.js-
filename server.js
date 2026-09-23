const express = require("express");
const mongoose = require("mongoose");

const userRouter = require("./Router/userRouter");

const app = express();
const PORT = 3000;


app.use(express.json());


app.use("/api/users", userRouter);


mongoose.connect("mongodb+srv://authAdmin:auth123@cluster0.xrgttco.mongodb.net/?appName=Cluster0")
    .then(() => {
        console.log("MongoDB connected successfully");

        
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });