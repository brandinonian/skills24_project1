'use client'

import { useState } from "react";

export default function Home() {

  const [numSides, setNumSides] = useState(6); // Default number of sides
  const [result, setResult] = useState();

  async function rollDice() {
    const log_result = {
      total_sides: numSides,
      result: result,
    }
    const number = Math.floor(Math.random() * numSides) + 1;
    setResult(number);
    const response = await fetch('/api/log', {
      method: 'POST',
      headers: { "content-type": 'application/json' },
      body: JSON.stringify(log_result),
    });
  }

  return (
    <main className="flex min-h-screen gap-12 bg-slate-800 text-gray-200 flex-col items-center">
      <div className="text-7xl pt-8">
        <h1>Dice Roller</h1>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <div>
          <div className="label">
            <span className="label-text">Enter the number of sides</span>
          </div>
          <input onChange={e => setNumSides(e.target.value)} defaultValue={numSides} type="number" step={1} className="input input-bordered" />
        </div>
        <div>
          <button onClick={rollDice} className="btn btn-primary">Roll</button>
        </div>
      </div>
      <div>
        {result && <div className="text-4xl text-black p-16 bg-slate-200 rounded-lg">{result}</div>}
      </div>
    </main>
  );
}