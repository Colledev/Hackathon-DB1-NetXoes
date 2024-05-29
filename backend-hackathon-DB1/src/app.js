const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const usersRoute = require("./routes/users");
const brandsRoute = require("./routes/brands");
const categoryRoute = require("./routes/categories");
const productRoute = require("./routes/products");
const favoriteRoute = require("./routes/favorite");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/users", usersRoute);
app.use("/brands", brandsRoute);
app.use("/categories", categoryRoute);
app.use("/products", productRoute);
app.use("/favorites", favoriteRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
