import React from 'react'
function FirstInvalid({ onClosed }) {
    return (
        <div className="overlay">
            <div className="no">
                <div className="input">
                    <h1>Input Invalid!</h1>
                </div>
                <div className="con">
                    <p className="p">
                        Please enter a valid name and age (non-empty values)
                    </p>
                    <button onClick={onClosed}>Okay</button>
                </div>
            </div>
        </div>
    )
}

export default FirstInvalid

// import React,{useState} from "react"

// function FirstInvalid () {
//     const [isClicked,setIsClicked] = useState(false)
//     console.log(isClicked)
//         let element
//         if(isClicked){
//             element = (
//                 <></>
//             )}else{
//                 element = (
//                     <div className="overlay">
//                     <div className="no">
//                         <div className="input">
//                             <h1>Input Invalid!</h1>
//                         </div>
//                         <div className="con">
//                         <p className="p">Please enter a valid name and age (non-empty values)</p>
//                         <button onClick = {()=>setIsClicked(true)}>Okay</button>
//                         </div>
//                     </div>
//                     </div>
//                     )
//         }
//     return (
// <>
//         {element}

//     </>
// )
//     }
// export default FirstInvalid
