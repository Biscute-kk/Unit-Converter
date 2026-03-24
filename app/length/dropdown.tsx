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
            <option value="mm">Millimeter</option>
            <option value="cm">Centimeter</option>
            <option value="m">Meter</option>
            <option value="km">Kilometer</option>
            <option value="in">Inch</option>
            <option value="ft">Foot</option>
            <option value="yd">Yard</option>
            <option value="mi">Mile</option>
        </select>
       
    </div>
);

}