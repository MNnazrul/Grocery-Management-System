const all = require("../services/buyerService");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");

const createUser = (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    all.create(body, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: 0,
                message: "Database connection error",
            });
        }
        return res.status(200).json({
            success: 1,
            message: results,
        });
    });
};

const getUsers = (req, res) => {
    all.getAllUsers((err, results) => {
        if (err) {
            res.status(500).json({
                success: 0,
                message: "Database connection error",
                error: err,
            });
        }
        // const data = results;
        // res.render("1st.ejs", { data });
        return res.json({
            users: results,
        });
    });
};

module.exports = { createUser, getUsers };
