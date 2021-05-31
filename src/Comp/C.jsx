import React from 'react'
import {FName ,LName} from "../App";


 function C() {
    return (
        <div>
            <FName.Consumer>
                {(fname) =>{
                    return <LName.Consumer>
                        {(lname)=>{
                            return  <h2> Anurag {fname} & {lname} </h2>
                        }}
                    </LName.Consumer>
                }}
            </FName.Consumer>
            
        </div>
    )
}
export default C;
// export { FName };