import React ,{useContext} from 'react';
import {FName, LName}  from "../App";

 function B() {

    const fname  = useContext(FName,)
    const lname  = useContext(LName,)
    return (
        <div>
           <h3> Yo {fname} & {lname} </h3> 
        </div>
    )
}
export default B;