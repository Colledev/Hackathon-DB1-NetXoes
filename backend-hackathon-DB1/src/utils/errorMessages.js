async function isUniqueEmailError(error) {
    if (!(error instanceof Error)) {
        return false;
    }
    if (
        error.message.includes(
            "Unique constraint failed on the fields: (email)"
        )
    ) {
        return true;
    }

    return false;
}

module.exports = {
    isUniqueEmailError,
};
