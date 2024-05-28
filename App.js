/* <div class="parent">
  <div id="child1">
    <h1>THis is h1 tag</h1>
    <h2>THis is h1 tag</h2>
  </div>
  <div id="child2">
    <h1>THis is h1 tag</h1>
    <h2>THis is h1 tag</h2>
  </div>
</div> */



const heading  = React.createElement("div",{id:"parent"},[
  React.createElement("div",{id:"child1"},[
    React.createElement("h1",{id:"newh1"},"This is h1 tag"),
    React.createElement("h2",{id:"newh2"},"This is h2 tag")
  ]),
  React.createElement("div",{id:"child2"},[
    React.createElement("h1",{id:"newh3"},"This is h1 tag"),
    React.createElement("h2",{id:"newh4"},"This is h2 tag")
  ])
]

)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);