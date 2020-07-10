import React, {lazy, Suspense} from 'react';
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
const Home = lazy(() => import("./components/Home"));
const Post = lazy(() => import("./components/Post"));
const Page = lazy(() => import("./components/Page"));

const App: React.FC = () => {
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
};

export default App;
