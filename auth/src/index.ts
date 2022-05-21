import express from "express";
import { errorHandler } from "./middlewares/error-handlers";
import { currentuser } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
const app = express();

app.use(express.json());
 
app.use(currentuser);
app.use(signinRouter);
app.use(signupRouter);
app.use(signoutRouter);

app.use(errorHandler);
 
app.listen(3000, () => console.log("Server started on Port 3000!!!"));