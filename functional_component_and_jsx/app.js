import React from "react";
import ReactDOM from "react-dom/client";


// creating div and inside it h1 and h2 using functional component
const Heading1 = () => {
    return (
        <h1>Heading1</h1>
    )
};
const Heading2 = () => {
    return (
        <h2>Heading2</h2>
    );
}


const Heading3 = () => {
    return (

        <div>
            <Heading1 />
            <Heading2 />
        </div>
    )
}



// creating div and inside it h1 and h2 using jsx

// const Heading1 = (
//     <div>
//         <h1>Heading3</h1>
//         <hh2>Heading2</hh2>
//     </div>
// )





let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Heading1);