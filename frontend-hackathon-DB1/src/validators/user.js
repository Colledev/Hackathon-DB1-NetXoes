const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateEmail = (text) => {
    if (!text) return "Required field.";

    if (text.length > 200) return "Email must be at most 200 characters long.";

    const isValid = EMAIL_REGEX.test(text);
    if (!isValid) return "Please enter a valid email address.";

    return undefined;
};

export const validatePassword = (text) => {
    if (!text) return "Required field.";

    if (text.length < 8 || text.length > 20)
        return "Password must be between 8 and 20 characters long.";

    return undefined;
};

export const validateName = (text) => {
    if (!text) return "Required field.";

    if (text.length < 1 || text.length > 200)
        return "Name must be between 1 and 200 characters long.";

    return undefined;
};
