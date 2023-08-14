const { findUserByEmail } = require("../services/buyerService");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");

const loginUser = (req, res) => {
    const body = req.body;
    findUserByEmail(body, (err, results) => {
        if (err) {
            return res.json({
                results: 0,
                message: "somethin wrong happen",
            });
        }
        if (!results) {
            return res.json({
                sucees: 0,
                message: "user not found",
            });
        }
        const result = compareSync(body.password, results.password);
        if (result) {
            res.json({
                success: 1,
                messaeg: "You are verified user",
            });
        } else {
            return res.json({
                success: 0,
                message: "password don't match",
            });
        }
    });
};

module.exports = { loginUser };
