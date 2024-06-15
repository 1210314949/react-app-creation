//const parent = React.createElement("h1",{},"Hello World!!!")

/*
<div id="root">
    <div id="parent">
        <div id = "child">
            <h1>Hello World</h1>
        </div>
    </div>
</div>

const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"Hello World by React!!!")))
*/
/*
<div id="root">
    <div id="parent">
        <div id = "child">
            <h1>Hello World h1</h1>
            <h2>Hello World h2<h2>
         </div>
    </div>
</div>


const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
    [
        React.createElement("h1",{},"Hello World h1"),
        React.createElement("h2",{},"Hello World h2")
    ]
    )
    );
*/
/*
<div id="root">
    <div id="parent">
        <div id = "child1">
            <h1>Hello World h1</h1>
            <h2>Hello World h2<h2>
         </div>
         <div id = "child2">
            <h1>Hello World h1</h1>
            <h2>Hello World h2<h2>
         </div>
    </div>
</div>
*/

const parent = React.createElement("div",{id:"parent"},
[
    React.createElement("div",{id:"child1"},
        [
            React.createElement("h1",{},"Hello World h1"),
            React.createElement("h2",{},"Hello World h2")
        ]
        ),
        React.createElement("div",{id:"child2"},
        [
            React.createElement("h1",{},"Hello World h1"),
            React.createElement("h2",{},"Hello World h2")
        ]
        ),
]
)


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)