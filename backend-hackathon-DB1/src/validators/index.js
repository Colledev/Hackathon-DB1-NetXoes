const { validationResult } = require("express-validator");

const validationResultCheck = (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        res.status(412).json(result.array());
        return true;
    }

    return false;
};

module.exports = {
    validationResultCheck,
};
