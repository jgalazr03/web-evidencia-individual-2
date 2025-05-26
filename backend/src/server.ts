import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import pollsRouter from "./routes/polls";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use("/api/polls", pollsRouter);

app.listen(4000, () => {
  console.log("🚀 Backend corriendo en http://localhost:4000");
});
