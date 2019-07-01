import { React, Route, Router, Switch, } from '../utils/general-imports';
import PrivateRoute from './private-router';


import { Dashboard, Profile, SignIn, SignUp } from './page-constant'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/home" component={Dashboard} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute exact path="/signUp" component={SignUp} />
                <Route exact path="/" component={SignIn} />
            </Switch>
        </Router>

    );

};

export default Routes;


