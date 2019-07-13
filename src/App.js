import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/profile/:id" component={Profile} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
