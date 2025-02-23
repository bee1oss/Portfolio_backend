import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import checkAuth from "./utils/checkAuth.js";
import {loginValidation} from "./validations.js";
import hangleValidator from "./utils/handleValidator.js";
import { ContactController,UserController } from "./controller/index.js";



const app = express();
const url = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6';

mongoose
        .connect(url,{})
        .then(() => console.log("DB is Ok..."))
        .catch((err) => console.log("DB error",err));

app.use(cors());
app.use(express.json());


app.post('/contact',checkAuth,)

app.post('/auth/login',loginValidation, hangleValidator, UserController.login);//login olurken auth islemi
app.post('/auth/register', hangleValidator, UserController.register);//uye olma islemii