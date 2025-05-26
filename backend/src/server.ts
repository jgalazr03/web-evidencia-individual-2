import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import pollsRouter from "./routes/polls";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/api/polls", pollsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});