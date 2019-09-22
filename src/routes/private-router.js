import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../index';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('authorization');
    return (
        <Route exact {...rest} render={props => (
            token ?
                <Component {...props} />
                : <Redirect exact to="/" />
        )} />
    );
};

export default PrivateRoute;