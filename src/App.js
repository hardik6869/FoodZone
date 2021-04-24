import React from 'react';
import {Route,Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Header from "./Component/Header";

const App = () => {
  return (
    <>
    <Header />
    <switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact}/>
    </switch>
    </>
  );
};

export default App;