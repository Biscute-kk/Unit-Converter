import { Unit,LengthUnit, tempUnit } from "../definitions";
export default  function Result({fromValue,from,result,to}:
    {
        fromValue:number,
        from:Unit | LengthUnit | tempUnit,
        result:number,
        to:Unit | LengthUnit | tempUnit
    }){


    return (
        <>
            
            <p>Result of Your Calculation</p>
            <p>{fromValue} {from}= {result} {to}</p>

        </>


    );
}