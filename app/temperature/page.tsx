'use client';
import Dropdown from "./dropdown";
import { useState } from "react";


export default function Page(){
    const conversion= ({value,fromm,too}:any)=>{
        if (fromm===too){
            return value;
        }else if (fromm==='C'){
           return too==='F'? (1.8*value+32):value + 273;

        }else if (fromm ==='F'){
            return too==='C'? (value-32)*5/9:(value-32)*5/9+273;

        }else{
            return  too==='C'? value-273:(value-273)*9/5+32;

    }}

    const [result,setResult]=useState('');
    const [from,setFrom]= useState('');
    const [to,setTo]= useState('');
    const [inputValue,setInputValue]=useState('');
    return (
    <div className="bg-white text-black">
    <p>Temperature conversion</p>
    <p>Enter the temperature to convert.</p>    
    <input 
    className="peer block w-half rounded-md border border-black-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder='enter value'
        value={inputValue}
        onChange={(e)=>{
          setInputValue(e.target.value);
        }}
    />
    <p>unit to convert from</p>
    <Dropdown value={from}  setValue={setFrom} />
    <p>Unit to convert to </p>
   
    <Dropdown value={to}  setValue={setTo}/>


    <button onClick={()=> setResult(conversion({ value:Number(inputValue) ,fromm:from ,too:to}))}>convert</button>

    <p>Result of Your Calcuation</p>

    <p>{inputValue} {from}={result} {to}</p>

    </div>
    )
}