import {React,Route ,Router,Switch,} from '../utils/general-imports';


import {Dashboard,Profile,SignIn,SignUp} from './page-constant'

const Routes =()=>{
    return(
        <Router>
            <Switch>
            <Route exact path="/home" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} /> 
            <Route exact path="/" component={SignIn} />           

            </Switch>
        </Router> 
    
);

};

export default Routes;


