// import React from 'react';
// import {useParams, useLocation, useHistory} from "react-router-dom";

// //  function User({match}) {
// //     return (
// //         <div>
// //           <h1> User {match.params.name} Page </h1>  
// //         </div>
// //     )}

//     function User() {
//         const {fname, lname} = useParams();

//         const location  = useLocation();
//         console.log(location);

//         const history = useHistory();
//         console.log(history);

//         const btnEvent =()=>{
//             // alert('Yoshi');
//             history.goBack();
//         }
//         const btnEvent1 =()=>{
//             // alert('Yoshi');
//             history.push("/about");
//             // history.goForward();
//         }
//         return (
//             <div>
//               <h1> User {fname} {lname} Page </h1>  
//               <h1> My current location is {location.pathname} {location.hash} 
//               {location.key}  {location.search} </h1>  
//               {location.pathname === `/user/anurag/chandra`  ? (<button onClick= {btnEvent}> Anurag </button>)
//               : <button onClick={btnEvent1}> Death </button>  }
//             </div>
//         )}
// export default User;