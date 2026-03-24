'use client';

import { useState } from "react"
import Dropdown from "./dropdown";
import { Unit } from "../definitions";

// type Unit = 'mg' | 'g' | 'kg' | 'oz' | 'lb';

export default function Page(){




    const [weight,setWeight]= useState('');
    const [from,setFrom]=useState<string>('');
    const[to,setTo]=useState<string>('');
    const [result,setResult]=useState<number | null>(null);


    // function conversion/
    const conversion=({value,from,to}:{
        value:number,
        from:Unit;
        to:Unit
    })=>{
        // type Unit = 'mg' | 'g' | 'kg' | 'oz' | 'lb';
        const unitsToGrams:Record<Unit,number>={
            mg: 0.001,
            g: 1.0,
            kg: 1000.0,
            oz: 28.3495231,
            lb: 453.59237
        };

        const gram= value*unitsToGrams[from];
        const result= gram/unitsToGrams[to];
        return result;

        

    }

    return (
        <div className="bg-white text-black">
            <p>WEIGHT CONVERSION</p>
            <p>Enter the weight to convert.</p>    
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
            
            
                <button onClick={()=> setResult(conversion({ value:Number(weight) ,from:from as Unit ,to:to as Unit}))}>convert</button>
            
                <p>Result of Your Calcuation</p>
            
                <p>{weight} {from}={result} {to}</p>
            
        
        </div>
    )
}