// import React, { useEffect, useState } from 'react';

// import { useProgress } from "@react-three/drei";

// export default function LoadingScreen() {
//     const { progress } = useProgress();
//     return (
//         <div className="loadingScreen">
//             <div className="loadingScreen__progress">
//                 <div className="loadingScreen__progress_value"
//                 style={{width: `${progress}%`}}>

//                 </div>
//             </div>
        
//             <div className="loadingScreen__Board">
//                 <h1 className="loadingScreen__title">
//                     Please Wait for Loading.
//                 </h1>
//                 <button
//                     className="loadingScreen__button" disabled={progress <  100}> start </button>
//             </div>
//         </div>
//     )
// }