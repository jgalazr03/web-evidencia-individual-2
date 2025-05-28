'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchPolls, createPoll } from "@/lib/api";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    fetchPolls().then(setPolls);
  }, []);

  const handleCreate = async () => {
    if (!question || options.some(opt => !opt)) return alert("Completa todos los campos");
    await createPoll(question, options);
    setQuestion("");
    setOptions(["", ""]);
    fetchPolls().then(setPolls);
  };

  return (
    <main className="max-w-xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Crear Encuesta</h1>
      <input
        value={question}
        onChange={e => setQuestion(e.target.value)}
        placeholder="Pregunta"
        className="w-full border px-3 py-2 rounded"
      />
      {options.map((opt, i) => (
        <input
          key={i}
          value={opt}
          onChange={e => {
            const updated = [...options];
            updated[i] = e.target.value;
            setOptions(updated);
          }}
          placeholder={`Opción ${i + 1}`}
          className="w-full border px-3 py-2 rounded my-1"
        />
      ))}
      <button
        onClick={handleCreate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Crear
      </button>

      <hr className="my-4" />
      <h2 className="text-xl font-semibold">Encuestas existentes</h2>
      <ul className="space-y-2">
        {polls.map((p: any) => (
          <li key={p.id} className="border p-3 rounded hover:bg-gray-50">
            <Link href={`/${p.id}`} className="text-blue-700 underline">
              {p.question}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
