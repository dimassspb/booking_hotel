const express = require("express");
const path = require("path");
const { readdirSync } = require("fs");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const db = "mongodb+srv://dimassspb:pathfinder999@cluster0.bt65b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// db connection
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB Connection Error: ", err));

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); //
// app.use("/api", routes);

// route middleware
readdirSync("./routes").forEach((r) =>
    app.use("/api", require(`./routes/${r}`)),
);



const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
    console.log("Production");
        app.use("/", express.static("client/build"));

        app.get("*", (req, res) => {
            res.sendFile(path.resolve(__dirname, "client/build/index.html"));
        });
} else {
    console.log("development");
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
