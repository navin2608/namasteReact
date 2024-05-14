import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
const headReact=React.createElement('div',{id:"parent"},
React.createElement('div',{id:'child'},
[React.createElement('h1',{id:"heading1"},"heading1"),
React.createElement('h2',{id:"heading2"},"heading2")]));
const CompositionComponent=()=>{ return <h1>Hi this is compososition component</h1>}
const Jsxheading=()=>{ return <div>  <CompositionComponent /> <h2 id="heading3" tabIndex={4} className="heading">Welcome to JSX by navin</h2></div>}
console.log(headReact);  //React.createElement is an object
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Jsxheading />);
