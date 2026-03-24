'use client';

import Dropdown from "./dropdown";
import { useState } from "react";
import { tempUnit } from "../definitions";
import Result from "../ui/result";

export default function Page() {
  const [result, setResult] = useState<number | null>(null);
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [inputValue, setInputValue] = useState('');

  const conversion = ({
    value,
    from,
    to,
  }: {
    value: number;
    from: tempUnit;
    to: tempUnit;
  }) => {
    let res = value;

    if (from === to) {
      res = value;
    } else if (from === 'C') {
      res = to === 'F' ? 1.8 * value + 32 : value + 273;
    } else if (from === 'F') {
      res = to === 'C' ? (value - 32) * 5 / 9 : (value - 32) * 5 / 9 + 273;
    } else {
      res = to === 'C' ? value - 273 : (value - 273) * 9 / 5 + 32;
    }

    return parseFloat(res.toFixed(4)); // ✅ rounded
  };

  function handleReset() {
    setInputValue('');
    setFrom('');
    setTo('');
    setResult(null);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md space-y-4">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center">
          Temperature Converter
        </h1>

        <p className="text-sm text-gray-500 text-center">
          Enter value and select units
        </p>

        {/* Input */}
        <input
          type="number"
          placeholder="Enter temperature"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
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
                    value: Number(inputValue),
                    from: from as tempUnit,
                    to: to as tempUnit,
                  })
                );
              }
            }}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          >
            Convert
          </button>

          {(inputValue || from || to || result !== null) && (
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
              fromValue={Number(inputValue)}
              from={from as tempUnit}
              result={result}
              to={to as tempUnit}
            />
          </div>
        )}
      </div>
    </div>
  );
}