import express from "express";
import morgan from "morgan";
import config from "./config";
// import router from "./route";
import apiRouter from "./routes";
import path from "path";
// TODO: import router from routes/

const app = express();

app.use(express.json());
app.use(morgan("common"));
app.use(express.static(path.join(__dirname,"./public")))
// TODO: use the imported router to handle all requests
app.use("/api",apiRouter);
app.use((err, req, res, next) => {
  console.error(err);
  res.json({ name: err.name, msg: err.message });
});

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}...`);
});
