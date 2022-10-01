import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Alarm from "../screens/alarm";
import Exercise from "../screens/exercise";
import Landing from "../screens/landing";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/exercise" component={Exercise} />
                    <Route path="/alarm" component={Alarm} />
                </Switch>
            </Router>
        )
    }
}
