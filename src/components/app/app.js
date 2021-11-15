import React from "react"
import { Route, Switch } from "react-router";

import ShopHeader from "../shop-header";
import { CartPage, HomePage } from "../pages";
import Spinner from "../spinner/spinner";
import withBookstoreService from '../hoc';


const App = ({ bookstoreService }) => {
    return (
        // MAIN?????
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Switch>
                <Route exact path='/cart' component={CartPage} />
                <Route path='/' component={HomePage} />
            </Switch>
        </main >
    )
};

export default App;