'use client';

import Link from 'next/link';
import{Ruler,Weight,Thermometer} from "lucide-react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black px-4">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">Unit Converter</h1>
      <p className="text-gray-500 mb-8 text-center">
        Convert between different units easily
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">

        {/* Length */}
        <Link
          href="/length"
          className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition"
        >
          {/* <div className="text-3xl mb-3">📏</div> */}
          <Ruler/>
          <p className="text-lg font-semibold group-hover:text-blue-600">
            Length
          </p>
        </Link>

        {/* Weight */}
        <Link
          href="/weight"
          className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition"
        >
          {/* <div className="text-3xl mb-3">⚖️</div> */}
          <Weight/>
          <p className="text-lg font-semibold group-hover:text-blue-600">
            Weight
          </p>
        </Link>

        {/* Temperature */}
        <Link
          href="/temperature"
          className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition"
        >
          {/* <div className="text-3xl mb-3">🌡️</div> */}
          <Thermometer/>
          <p className="text-lg font-semibold group-hover:text-blue-600">
            Temperature
          </p>
        </Link>

      </div>
    </div>
  );
}