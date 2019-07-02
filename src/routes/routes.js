import { React, Route, Router, Switch, } from '../utils/general-imports';
import PrivateRoute from './private-router';


import { Dashboard, Profile, SignIn, SignUp } from './page-constant'

class Routes extends React.Component {

    render() {
        console.log("in rout>>>>>>>>>>>>>.");
        return (
            <Router>
                <Switch>
                    <Route exact path="/home" component={Dashboard} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/signUp" component={SignUp} />
                    <Route exact path="/signIn" component={SignIn} />
                    <Route exact path="/" component={SignIn} />
                </Switch>
            </Router>

        )
    }

};

export default Routes;


