import { React, Route, Router, Switch, withRouter, connect } from '../utils/general-imports';
import PrivateRoute from './private-router';


import { Dashboard, Profile, SignIn, SignUp } from './page-constant';

class Routes extends React.Component {

    render() {

        return (

            <Switch>
                <Route exact path="/home" component={Dashboard} />
                <PrivateRoute exact path="/profile" component={Profile} />
                <Route exact path="/signUp" component={SignUp} />
                <Route exact path="/signIn" component={SignIn} />
                <Route exact path="/" component={this.props.isUserLoggedIn ? SignIn : Profile} />
            </Switch>


        )
    }

};
const mapStateToProps = (state) => ({
    isUserLoggedIn: state.signUpReducer.get('isUserLoggedIn')
});

export default withRouter(
    connect(
        mapStateToProps,

    )(Routes));



