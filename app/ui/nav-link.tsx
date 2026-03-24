'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
// import clsx from 'clsx';

const links= [
    {name:'Length',href:'/length'},
    {name:'temperature', href:'/temperature'},
    {name:'weigh',href:'/weight'}
];

export default function Navlinks(){
    const pathname= usePathname();
    return(
        <>
            {links.map((link)=>{
                return (
                    <Link 
                    key={link.name}
                    href={link.href}
                    className={
              
                'bg-sky-100 text-blue-600'
              
                    }>
                        <p className="hidden">{link.name}</p>
                    
                    
                    </Link>
                )
            })}
        
        </>
    )
}