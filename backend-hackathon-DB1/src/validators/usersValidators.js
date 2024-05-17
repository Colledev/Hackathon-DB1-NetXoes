const { checkSchema } = require("express-validator");

const validateCreateUser = checkSchema({
    name: {
        in: ["body"],
        isString: {
            errorMessage: "Name must be a string",
        },
        isLength: {
            options: {
                max: 200,
                min: 1,
            },
            errorMessage: "Name must be between 1 and 200 characters",
        },
        notEmpty: {
            errorMessage: "Name cannot be empty",
        },
    },
    email: {
        in: ["body"],
        isEmail: {
            errorMessage: "Email must be a valid email",
        },
        isString: {
            errorMessage: "Email must be a string",
        },
        isLength: {
            options: {
                max: 200,
                min: 1,
            },
            errorMessage: "Email must be between 1 and 200 characters",
        },
        notEmpty: {
            errorMessage: "Email cannot be empty",
        },
    },
    password: {
        in: ["body"],
        isString: {
            errorMessage: "Password must be a string",
        },
        isLength: {
            options: {
                max: 20,
                min: 8,
            },
            errorMessage: "Password must be between 8 and 20 characters",
        },
        notEmpty: {
            errorMessage: "Password cannot be empty",
        },
    },
});

module.exports = {
    validateCreateUser,
};
