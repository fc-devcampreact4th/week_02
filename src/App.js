import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">/</Link>
                    </li>
                    <li>
                        <Link to="/profile">/profile</Link>
                    </li>
                    <li>
                        <Link to="/profile/1">/profile</Link>
                    </li>
                    <li>
                        <Link to="/about">/about</Link>
                    </li>
                    <li>
                        <Link to="/about?name=Kim">/about</Link>
                    </li>
                </ul>
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
