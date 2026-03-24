'use client';
import { Unit } from "../definitions";
// import { useState } from "react";
type DropdownProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};


export default function Dropdown({value,setValue}:
DropdownProps
){

return (
    <div>
        <select
        id="options"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        className="border p-2 rounded ml-2"
        >
            <option value="">-- Select --</option>
            <option value="mg">Milligram</option>
            <option value="g">Gram</option>
            <option value="kg">Kilogram</option>
            <option value="oz">Ounce</option>
            <option value="lb">Pound</option>
        </select>
       
    </div>
);

}