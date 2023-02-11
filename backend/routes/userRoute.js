const express = require("express");
const {
    getUser,
    getAllUser,
    signup,
} = require("../controllers/userController");

const router = express.Router();

router.post("/signup", signup);
router.get("/", getAllUser);
router.get("/:id", getUser);

module.exports = router;
