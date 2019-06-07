import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Routers from "../routers"


function App() {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Routers/>

      </div>
    </HashRouter>
  );
}

function Home() {
  return <h3>欢迎页</h3>;
}

export default App;