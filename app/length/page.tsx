'use client';

import { useState } from "react"
import Dropdown from "./dropdown";
import { LengthUnit } from "../definitions";

// type Unit = 'mg' | 'g' | 'kg' | 'oz' | 'lb';

export default function Page(){




    const [weight,setWeight]= useState('');
    const [from,setFrom]=useState<string>('');
    const[to,setTo]=useState<string>('');
    const [result,setResult]=useState<number | null>(null);


    // function conversion/
    const conversion=({value,from,to}:{
        value:number,
        from:LengthUnit;
        to:LengthUnit
    })=>{
        // type Unit = 'mg' | 'g' | 'kg' | 'oz' | 'lb';
        const unitsMeters:Record<LengthUnit,number>={
            mm: 0.001,
            cm: 0.01,
            m: 1.0,
            km: 1000.0,
            in: 0.0254,
            ft: 0.3048,
            yd: 0.9144,
            mi: 1609.344
        };

        const meter= value*unitsMeters[from];
        const result= meter/unitsMeters[to];
        return result;

        

    }

    return (
        <div className="bg-white text-black">
            <p>WEIGHT CONVERSION</p>
            <p>Enter the Length to convert.</p>    
                <input 
                className="peer block w-half rounded-md border border-black-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    placeholder='enter value'
                    value={weight}
                    onChange={(e)=>{
                      setWeight(e.target.value);
                    }}
                />
                <p>unit to convert from</p>
                <Dropdown value={from}  setValue={setFrom} />

                <p>Unit to convert to </p>
                <Dropdown value={to}  setValue={setTo}/>
            
            
                <button onClick={()=> setResult(conversion({ value:Number(weight) ,from:from as LengthUnit ,to:to as LengthUnit}))}>convert</button>
            
                <p>Result of Your Calcuation</p>
            
                <p>{weight} {from}={result} {to}</p>
            
        
        </div>
    )
}