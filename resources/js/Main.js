import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Service from "./components/Service";

function App() {
    return (
        <Router>
            <Header />
            <div className="pt-5" id="Body">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route path="/about/reviews">
                        <Reviews />
                    </Route>
                    <Route exact path="/service">
                        <Service/>
                    </Route>
                    <Route path="/contact">
                        <div>
                            <h1>Contact</h1>
                        </div>
                    </Route>
                    <Route path="/market">
                        <div>
                            <h1>market</h1>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
