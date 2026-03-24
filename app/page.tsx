'use client';
import Sidenav from '@/app/ui/nav';
export default function Home() {
  function handleSearch(term:string){
      console.log(term);
    }
  return (
    
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-red text-black">
      {/* <Sidenav/> */}
      UNIT CONVERTER
      <input
        className="peer block w-half rounded-md border border-black-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder='enter value'
        onChange={(e)=>{
          handleSearch(e.target.value);
        }
      }
      
      />
    </div>
  );
}
