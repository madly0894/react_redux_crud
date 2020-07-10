import React, {lazy, Suspense} from 'react';
import Navbar from "./components/Navbar";
import {Route, Switch} from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const Post = lazy(() => import("./components/Post"));
const Page = lazy(() => import("./components/Page"));

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/create" component={Page}/>
                    <Route exact path="/edit/:id" component={Page}/>
                    <Route exact path="/post/:id" component={Post}/>
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
