const paginationMiddleware = (req, res, next) => {
    let { page, limit } = req.query;

    if (page && limit) {
        page = parseInt(page, 10);
        limit = parseInt(limit, 10);

        if (isNaN(page) || page < 1) {
            page = 1;
        }
        if (isNaN(limit) || limit < 1) {
            limit = 10;
        }

        req.pagination = {
            page,
            limit,
            skip: (page - 1) * limit,
        };
    }

    next();
};

module.exports = paginationMiddleware;
