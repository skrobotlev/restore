import React from "react"
import { Route, Switch } from "react-router";

import ShopHeader from "../shop-header";
import { CartPage, HomePage } from "../pages";
// import BasicInterface from "../CALORIES/calorie-counter-app-reactjs";


const App = ({ bookstoreService }) => {
    return (
        // MAIN?????
        <main role="main" className="container">
            {/* <BasicInterface /> */}
            <ShopHeader numItems={12} total={210} />
            <Switch>
                <Route exact path='/cart' component={CartPage} />
                <Route path='/' component={HomePage} />
            </Switch>
        </main >
    )
};

export default App;