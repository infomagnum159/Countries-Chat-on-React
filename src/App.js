import React from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Home from "./containers/Home/Home";
import Countries from "./containers/Countries/Countries";
import Chat from "./containers/Chat/Chat";
import './App.css'


const App = () => {
    return (
        <BrowserRouter>
            <div className="links">
            <dl>
                <dt><NavLink exact className="Link" to="/">Home</NavLink></dt>
                <dt><NavLink className="Link" to="/countries">Countries</NavLink></dt>
                <dt><NavLink className="Link" to="/chat">Chat</NavLink></dt>

            </dl>
            </div>
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