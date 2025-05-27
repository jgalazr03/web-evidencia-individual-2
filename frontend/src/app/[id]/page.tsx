'use client';
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getPoll, voteOption } from "@/lib/api";

export default function PollPage() {
  const { id } = useParams();
  const router = useRouter();
  const [poll, setPoll] = useState<any>(null);
  const [voted, setVoted] = useState(false);

  const loadPoll = async () => {
    const data = await getPoll(id as string);
    setPoll(data);
  };

  useEffect(() => {
    if (id) loadPoll();
  }, [id]);

  const handleVote = async (optionId: string) => {
    await voteOption(optionId);
    setVoted(true);
    loadPoll();
  };

  if (!poll) return <p className="p-4">Cargando...</p>;

  return (
    <main className="max-w-xl mx-auto p-4 space-y-4">
      <button
        onClick={() => router.push('/')}
        className="text-blue-600 hover:underline"
      >
        ← Regresar
      </button>

      <h1 className="text-2xl font-bold">{poll.question}</h1>
      <ul className="space-y-2">
        {poll.options.map((opt: any) => (
          <li key={opt.id} className="flex items-center justify-between border px-4 py-2 rounded">
            <span>{opt.text}</span>
            <div className="flex gap-3 items-center">
              <span className="text-sm text-gray-600">{opt.votes} votos</span>
              <button
                disabled={voted}
                onClick={() => handleVote(opt.id)}
                className={`px-3 py-1 rounded ${
                  voted ? "bg-gray-300 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                Votar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
