import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Post from "./components/Post";
import Page from "./components/Page";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/create" component={Page}/>
                <Route exact path="/edit/:id" component={Page}/>
                <Route exact path="/post/:id" component={Post}/>
            </Switch>
        </div>
    );
}

export default App;
