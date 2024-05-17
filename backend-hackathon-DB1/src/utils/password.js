const bycrypt = require("bcryptjs");

const salt = bycrypt.genSaltSync(10);

const hashPassword = (password) => {
    return bycrypt.hashSync(password, salt);
};

const comparePassword = (password, hash) => {
    return bycrypt.compareSync(password, hash);
};

module.exports = {
    hashPassword,
    comparePassword,
};
