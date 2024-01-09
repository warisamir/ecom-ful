import express from "express";
import { deleteUser, getAllUser, getUser, newUser } from "../Controllers/user.js";
import { adminOnly } from "../middlewares/Auth.js";
const app = express.Router();
//route- api/v1/user/new
app.post("/new", newUser);
//route -api/v1/user/all
app.get("/all", adminOnly, getAllUser);
app.route('/:Id').get(getUser).delete(adminOnly, deleteUser);
export default app;
