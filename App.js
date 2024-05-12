const headReact=React.createElement('div',{id:"parent"},
React.createElement('div',{id:'child'},
[React.createElement('h1',{id:"heading1"},"heading1"),
React.createElement('h2',{id:"heading2"},"heading2")]));
console.log(headReact);  //React.createElement is an object
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(headReact);