const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const usersRoute = require("./routes/users");
const brandsRoute = require("./routes/brands");
const productRoute = require("./routes/products");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/users", usersRoute);
app.use("/brands", brandsRoute);
app.use("/products", productRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
