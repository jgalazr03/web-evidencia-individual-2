import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.post("/", async (req, res) => {
  const { question, options } = req.body;
  const poll = await prisma.poll.create({
    data: {
      question,
      options: {
        create: options.map((text: string) => ({ text })),
      },
    },
    include: { options: true },
  });
  res.json(poll);
});

router.get("/", async (_, res) => {
  const polls = await prisma.poll.findMany({ include: { options: true } });
  res.json(polls);
});

router.get("/:id", async (req, res) => {
  const poll = await prisma.poll.findUnique({
    where: { id: req.params.id },
    include: { options: true },
  });
  res.json(poll);
});

router.post("/vote/:optionId", async (req, res) => {
  const { optionId } = req.params;
  const option = await prisma.option.update({
    where: { id: optionId },
    data: { votes: { increment: 1 } },
  });
  res.json(option);
});

export default router;
