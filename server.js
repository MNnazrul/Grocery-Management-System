const express = require("express");
const dotenv = require("dotenv").config();
const buyerRoutes = require("./routes/buyerRoutes");
const loginRoutes = require("./routes/loginRoutes");
const path = require("path");
const { getUsers } = require("./controllers/buyerController");
const all = require("./services/buyerService");
const pool = require("./config/dbConnection");

const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view-engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.post("/by", (req, res) => {
    console.log(req.body);
    let data;

    pool.query(
        `select user_name, role, email, phone_number from users`,
        [],
        (error, results, fields) => {
            if (error) console.log(error);
            // data = results;
            data = results;
            console.log(results);
            // return callBack(null, results);
            res.render("1st.ejs", { data });
        }
    );
});

// pool.query('SELECT * FROM your_table', (err, results) => {
//     if (err) throw err;
//     res.render('index', { data: results }); // Pass data to the EJS template
// });

// app.post("/buyer", (req, res) => {
//     // all.getAllUsers((err, results) => {
//     //     if (err) {
//     //         res.json({
//     //             error: err,
//     //             message: "some error occur",
//     //         });
//     //     }
//     //     const data = results;
//     //     res.render("1st", { data });
//     // });
//     const data = req.body.password;
//     console.log("this is post");
//     res.render("1st", { data });
// });

app.get("/", (req, res) => {
    res.render("register.ejs");
});
// app.use("/login", loginRoutes);

app.listen(port, () => {
    console.log(`running at port ${port}`);
});
