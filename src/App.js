import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import Countries from "./containers/Countries/Countries";
import Chat from "./containers/Chat/Chat";
import './App.css'


const App = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/countries" component={Countries}/>
              <Route path="/chat" component={Chat}/>
            <Route render={() => <h1>Not Found</h1>}/>
          </Switch>
        </BrowserRouter>
    );
};

export default App;