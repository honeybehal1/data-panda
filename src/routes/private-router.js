import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../index';


const PrivateRoute = ({ component: Component, ...rest }) => {
    let isLogin = store.getState();
    isLogin = true;// isLogin.signUpReducer;
    //  isLogin = isLogin.get('isUserLoggedIn');

    return (

        <Route exact {...rest} render={props => (
            isLogin ?
                <Component {...props} />
                : <Redirect exact to="/" />
        )} />
    );
};

export default PrivateRoute;