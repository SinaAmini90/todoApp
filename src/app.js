import express from "express";
import { router as todoRouter } from "./routs/todos/routs.js";

const app = express();
app.use(express.json());
const serverPort = 3000;
app.get("/test", (req, res) => {
  res.json({
    message: "express js app is running",
  });
});

app.use(todoRouter);

app.listen(serverPort, () => {
  console.log(`server is running on port ${serverPort}`);
});
