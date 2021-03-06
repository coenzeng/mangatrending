"use strict";

import express, { Application } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//configure dotenv to read .env file from root directory
dotenv.config({ path: "../.env" });

const app: Application = express();

//app.use(bodyParser.json({limit: "20mb", extended: true}));
//app.use(bodyParser.urlencoded({limit: "20mb", extended: true}));

app.use(cors());


//mongo atlas connection

const CONNECTION_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mangatrending.g3vic.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
})
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
