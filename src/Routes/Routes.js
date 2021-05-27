import React from "react";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import {Home} from "../Components/Home/Home";
import {ProductDetail} from "../Components/Product-detail-Page/ProductDetail";

export const Routes = () =>{
    return (
        <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/productdetails" component={ProductDetail} />
        </Switch>
    )
}

