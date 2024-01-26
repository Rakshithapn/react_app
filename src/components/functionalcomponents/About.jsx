// import { useState } from "react";
// const About = () => {
//     const [college,updateCollege] = useState("KEC")
//     const updatingClg = () => {
//         updateCollege("Kongu Engineerig College");
//     }
//     return (
//         <div>
//             <h1>This page is meant for your details.</h1>
//             <h1>Welcome to {college}.</h1>
//             <button onDoubleClick={updatingClg}>Update College Name</button>
//         </div>
//     )
// }
// export default About;

import { useEffect, useState } from "react";
const About = () => {
    const [tabName,setTabName] = useState("You don't have any disease")
    const updateTablet = () => {
        setTabName("Welcome to fever club take this DOLO and cure it");
    }
    const updateTablet1 = () => {
        setTabName("Welcome to Seizure club take this  and cure it");
    }
    const updateTablet2 = () => {
        setTabName("Welcome to cold club take this citricine and cure it");
    }
    useEffect(() => {
        console.log("Side effects: You feel sleepy and drowsy.")
    },[tabName])
    return (
        <div>
            <h1>{tabName}</h1>
            <button onClick={updateTablet}>"Click me if you have fever"</button>
            <button onClick={updateTablet1}>"Click me if you have Epilepsy"</button>
            <button onClick={updateTablet2}>"Click me if you have cold"</button>
        </div>
    )
}
export default About;