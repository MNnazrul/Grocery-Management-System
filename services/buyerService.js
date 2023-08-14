// handling database requests.

const pool = require("../config/dbConnection");

const create = (data, callBack) => {
    pool.query(
        `insert into users (user_name, role, email, password, phone_number) 
        values (?,?,?,?,?)`,
        [
            data.user_name,
            data.role,
            data.email,
            data.password,
            data.phone_number,
        ],
        (error, results, fields) => {
            if (error) return callBack(error);
            return callBack(null, results);
        }
    );
};

const getAllUsers = (callBack) => {
    pool.query(
        `select user_name, role, email, phone_number from users`,
        [],
        (error, results, fields) => {
            if (error) return callBack(error);
            return callBack(null, results);
        }
    );
};

const findUserByEmail = (body, callBack) => {
    pool.query(
        `select user_name, password from users where email = ? and role = ?`,
        [body.email, body.role],
        (error, results, fields) => {
            if (error) return callBack(error);
            return callBack(null, results[0]);
        }
    );
};

const all = {
    create,
    getAllUsers,
    findUserByEmail,
};

module.exports = all;
