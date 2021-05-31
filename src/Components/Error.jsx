import React from 'react'
import { NavLink , useHistory} from 'react-router-dom';
import "../Components/Css.css"

function Error() {
    const history = useHistory();
    console.log(history)
    const btnEv =()=>{
        history.goBack();
    }
    return (<>
        <div className="container-error">
           <h6>404 Error Page</h6> 
           <p>
               Sorry! This Page Doesn't Exist
           </p>
        <button onClick={btnEv} className="err-btn">Go Back</button>
        <NavLink to ="/" className="err-btn1" >Go Home</NavLink>
        </div>
        </>  
    )
}



export default Error;