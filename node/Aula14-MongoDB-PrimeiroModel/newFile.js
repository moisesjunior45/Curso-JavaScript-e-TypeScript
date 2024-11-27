import { static } from "express";
import { resolve } from "path/posix";
import { app } from "./server";

app.use(static(resolve(__dirname, 'public')));
