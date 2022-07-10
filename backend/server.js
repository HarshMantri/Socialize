require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./utils/connectDB");
const verifyJWT = require("./middleware/verifyJWT");

const port = 8080;
const host = "0.0.0.0";

const app = express();

app.use(express.json());
const corsOption = {
    origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));

app.use("/api/v1/auth", require("./routes/auth"));
app.use("/api/v1", verifyJWT, require("./routes/post"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

connectDB()
    .then(() => {
        app.listen(port, host, () => {
            console.log(`Running on http://${host}:${port}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
