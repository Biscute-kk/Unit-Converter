'use client';
import Sidenav from '@/app/ui/nav';
import Link from 'next/link';
// import { Thermometer } from "@deemlol/next-icons"
// <Thermometer size={128} color="#FFFFFF" strokeWidth={1.5} />
export default function Home() {
  function handleSearch(term:string){
      console.log(term);
    }
  return (
    
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-red text-black">
      {/* <Sidenav/> */}
      UNIT CONVERTER
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/length"
      >
        <div className="w-32 text-white md:w-40">
          Lenght
        </div>
      </Link>
            <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/weight"
      >
        <div className="w-32 text-white md:w-40">
          Weight
        </div>
      </Link>
            <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/temperature"
      >
        <div className="w-32 text-white md:w-40">
          Temperature
        </div>
      </Link>
    </div>
  );
}
