import mongoose from 'mongoose';

require("dotenv").config();

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(db => console.log("Db is connected"))
    .catch(e => console.log(e))