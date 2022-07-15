import express from "express";
import indexRoutes from "./routes/index.routes";
const app = express()
// middlewares
app.use(express.json())

app.use(indexRoutes)

export default app;