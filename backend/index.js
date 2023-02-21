const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const todoRoute = require("./routes/todoRoute");
const userRoute = require("./routes/userRoute");

const PORT = 9000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/todos", todoRoute);
app.use("/user", userRoute);

mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log(`Connected to MongoDB`);
    })
    .catch((err) => {
        console.log(err);
    })
    .then(
        app.listen(PORT, () => {
            console.log(`Listening in port ${PORT}...`);
        })
    );
