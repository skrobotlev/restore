import React from "react"
import { Route, Switch } from "react-router";

import { CartPage, HomePage } from "../pages";
import Spinner from "../spinner/spinner";
import withBookstoreService from '../hoc';


const App = ({ bookstoreService }) => {
    return (
        <div>
            <Switch>
                <Route exact path='/cart' component={CartPage} />
                <Route path='/' component={HomePage} />
            </Switch>
        </div>

    )
};

export default App;