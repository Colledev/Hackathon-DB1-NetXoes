const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const usersRoute = require("./routes/users");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/users", usersRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
