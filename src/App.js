import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import querySting from "query-string";

const activeStyle = { color: "green" };

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ul>
                    <li>
                        <NavLink exact to="/" activeStyle={activeStyle}>
                            /
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/profile" activeStyle={activeStyle}>
                            /profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile/1" activeStyle={activeStyle}>
                            /profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            activeStyle={activeStyle}
                            isActive={(match, location) => {
                                if (location.pathname !== "/about")
                                    return false;
                                const query = querySting.parse(location.search);
                                return query.name === undefined;
                            }}
                        >
                            /about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about?name=Kim"
                            activeStyle={activeStyle}
                            isActive={(match, location) => {
                                if (location.pathname !== "/about")
                                    return false;
                                const query = querySting.parse(location.search);
                                return query.name !== undefined;
                            }}
                        >
                            /about?name=kim
                        </NavLink>
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
