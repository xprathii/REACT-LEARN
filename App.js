/**<div id="parent">

<div id="child">

<h1>"I am h1 tag"</h1>
<h2>"I am h1 tag"</h2>

to create siblings create an array in the 3rd parameter 

</div>

</div>*/


/**
 * React.createElement -> creates an object->becomes =>Html(browser understands)
 */

const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},"I am H1 tag1"))




        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);