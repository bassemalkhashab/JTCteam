import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Market from "./components/Market";

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
                        <Contact/>
                    </Route>
                    <Route path="/market">
                        <Market/>
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
