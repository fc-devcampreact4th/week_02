import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <switch>
                    <Route path="/profile/:id" component={Profile} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={Home} />
                </switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
