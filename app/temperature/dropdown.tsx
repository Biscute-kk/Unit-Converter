'use client';
// import { useState } from "react";
type DropdownProps = {
  value: string;
  setValue: (value: string) => void;
};


export default function Dropdown({value,setValue}:
DropdownProps
){
    // const [selected, setSelected] = useState('');
return (
    <div>
        {/* <label htmlFor="options">Choose to convert from </label> */}
        <select
        id="options"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        className="border p-2 rounded ml-2"
        >
            <option value="">-- Select --</option>
            <option value="C">Celcius</option>
            <option value="F">Farenheit</option>
            <option value="K">Kelvin</option>
        </select>
        {/* <p className="mt-2">Selected: {selected}</p> */}
    </div>
);

}