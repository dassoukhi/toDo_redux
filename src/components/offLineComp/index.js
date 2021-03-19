import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import Favories from "../favories";
const OffLineComp = () => {
    return (
        <div>
            You're offline right now. Check your connection.
        <Router>
        <div align= "left"> <Link to={"/favories"}>Favories</Link></div>
            <Switch>
                <Route exact path='/favories' component={Favories}></Route>
            </Switch>
        </Router>
        </div>
    );
};

export default OffLineComp;