'use client';

import { useState } from "react";
import Dropdown from "./dropdown";
import { LengthUnit } from "../definitions";
import Result from "../ui/result";

export default function Page() {
  const [weight, setWeight] = useState('');
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const conversion = ({
    value,
    from,
    to,
  }: {
    value: number;
    from: LengthUnit;
    to: LengthUnit;
  }) => {
    const unitsMeters: Record<LengthUnit, number> = {
      mm: 0.001,
      cm: 0.01,
      m: 1.0,
      km: 1000.0,
      in: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
      mi: 1609.344,
    };

    const meter = value * unitsMeters[from];
    const result= meter / unitsMeters[to];
    return parseFloat(result.toFixed(4));
  };

  function handleReset() {
    setWeight('');
    setFrom('');
    setTo('');
    setResult(null);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md space-y-4">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center">
          Length Converter
        </h1>

        <p className="text-sm text-gray-500 text-center">
          Enter value and select units
        </p>

        {/* Input */}
        <input
          type="number"
          placeholder="Enter length"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Dropdowns */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-sm mb-1">From</p>
            <Dropdown value={from} setValue={setFrom} />
          </div>

          <div>
            <p className="text-sm mb-1">To</p>
            <Dropdown value={to} setValue={setTo} />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              if (from && to) {
                setResult(
                  conversion({
                    value: Number(weight),
                    from: from as LengthUnit,
                    to: to as LengthUnit,
                  })
                );
              }
            }}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          >
            Convert
          </button>

          {(weight || from || to || result !== null) && (
            <button
              onClick={handleReset}
              className="flex-1 bg-gray-300 hover:bg-gray-400 py-2 rounded-lg transition"
            >
              Reset
            </button>
          )}
        </div>

        {/* Result */}
        {result !== null && (
          <div className="bg-gray-50 p-3 rounded-lg text-center">
            <Result
              fromValue={Number(weight)}
              from={from as LengthUnit}
              result={result}
              to={to as LengthUnit}
            />
          </div>
        )}
      </div>
    </div>
  );
}