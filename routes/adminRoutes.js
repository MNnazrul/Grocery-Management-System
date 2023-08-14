const express = require("express");

const router = express.Router();

router.get("/users", (req, res) => {
    console.log(`show all users`);
});

router.post("/requests", (req, res) => {
    // send request to admin for reistration, but for now it's used for registration of all kinds of users.
    console.log(`send request to admin for registration`);
});

module.exports = router;
