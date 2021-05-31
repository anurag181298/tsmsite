import React, { useState , useEffect} from 'react'

function A() {
    const [num, setNum] =useState(0);

    
useEffect(() => {
    document.title = `Anurag ${num} `
  })
  

    return (
        <div>
            <h1> {num} </h1>
            <button onClick={()=>{
                setNum(num +1)
            }}
          
            > Destroy   </button>
        </div>
    )
}
export default A;