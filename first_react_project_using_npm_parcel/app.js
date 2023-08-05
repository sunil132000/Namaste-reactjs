import React from "react";
import ReactDOM from "react-dom/client";


let first = React.createElement("h1", { id: "test" }, "hello world");

let root = ReactDOM.createRoot(document.getElementById("root"));
console.log("hello");
root.render(first);