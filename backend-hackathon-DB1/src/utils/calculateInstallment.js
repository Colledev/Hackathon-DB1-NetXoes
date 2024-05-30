const calculateInstallment = (principal, interestRate, numberOfPayments) => {
    const result =
        (principal * (interestRate / 100) * numberOfPayments + principal) /
        numberOfPayments;
    return result;
};

module.exports = {
    calculateInstallment,
};
