import React from "react";
import { Route, BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import Login from "../../components/login";
import Characters from "../../components/characters";
import Detail from "../../components/detail";
import Favories from "../../components/favories";


const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route exact path='/characters' component={Characters}></Route>
                <Route path='/characters/:id' component={Detail}></Route>
                <Route exact path='/favories' component={Favories}></Route>
                <Redirect to='/'></Redirect>
            </Switch>
        </Router>
    );
};

export default Routers;