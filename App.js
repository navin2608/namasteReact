import React from "react";
import ReactDOM from "react-dom/client";


// const headReact=React.createElement('div',{id:"parent"},
// React.createElement('div',{id:'child'},
// [React.createElement('h1',{id:"heading1"},"heading1"),
// React.createElement('h2',{id:"heading2"},"heading2")]));

const CompositionComponent=()=>{ return <h1>Hi this is compososition component</h1>}
const ReactElement=<h3>Welcome to React element</h3>
const number=100
const Jsxheading=()=>{ return <div>  <CompositionComponent /> <h2 id="heading3">    Welcome to JSX by navin Kumar 123 {number} <br/></h2></div>}
console.log(ReactElement);  //React.createElement is an object
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Jsxheading />);
