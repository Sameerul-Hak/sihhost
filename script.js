const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require("./Route/auth");
const labour = require("./Route/Message.js");
const bodyParser = require('body-parser');

const app = express();
app.use(cors({credentials:true,origin:["http://localhost:3000",]}))
app.use(bodyParser.json());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/labour", labour);



// MongoDB connection URL
const MONGO_URL = "mongodb://127.0.0.1:27017/sih";
const PORT = 5000;

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
}).catch((err) => {
    console.error(`MongoDB connection error: ${err}`);
});
