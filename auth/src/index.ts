import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import { errorHandler } from "./middlewares/error-handlers";
import { currentuser } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { NotFoundError } from "./errors/not-found-error";

const app = express();

app.use(express.json());
 
app.use(currentuser);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.all("*", async() => {
    throw new NotFoundError();
})

app.use(errorHandler);

const start = async() => {
    try {
        await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    } catch (error) { 
        console.error(error);
    }
    app.listen(3000, () => console.log("Server started on Port 3000!!!"));
};

start();
 
