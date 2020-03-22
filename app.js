const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;

const users = require("./routes/api/users");
const lobbies = require("./routes/api/lobbies");
const characters = require("./routes/api/characters");
const monsters = require("./routes/api/monsters");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require("path");
if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/src"));
    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "public", "index.html"));
    });
}

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/lobbies", lobbies);
app.use("/api/characters", characters);
app.use("/api/monsters", monsters);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

// const watch = require('./watch');
// watch();

const watch = require('./lobby_socket');
watch();