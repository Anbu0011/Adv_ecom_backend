const express = require('express');
const app = express();
const Productroutes = require("./routes/productRouters");
const Userroutes = require("./routes/userRouters");
const Cartroutes = require("./routes/cartRouter");
const Orderroutes = require("./routes/orderRoute");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json);

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
    });

app.set('view engine', "ejs");

app.use("/", Productroutes, Userroutes, Cartroutes, Orderroutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});