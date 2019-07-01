//React 
import React from 'react';
import { Route, BrowserRouter as Router, Switch, withRouter, Redirect } from "react-router-dom";
import { connect, Provider } from 'react-redux';
import Immutable from 'immutable';


//Material core
import { Avatar, Button, Grid, Box, RadioGroup, FormControlLabel, Radio, CssBaseline, TextField, Checkbox, Link, Typography, Container, Divider } from '@material-ui/core/';

//Material Icons

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

//material style
import { makeStyles } from '@material-ui/core/styles';

//lodash
import { map, size, isEmpty, isEqual, result, join, isArray } from 'lodash';

//Components
import ErrorBoundary from '../components/error-boundary-component';
import { translate } from '../utils/global/translate-utils';

//http

import { getData, postData } from './http';

export {
    React,
    Route,
    Router,
    Switch,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Typography,
    Container,
    Box,
    Divider,
    RadioGroup,
    Radio,
    ErrorBoundary,
    connect,
    Provider,
    withRouter,
    Immutable,
    getData,
    postData,
    translate,
    Redirect
};


//Material Icons
export {
    ExpandLess,
    ExpandMore
};

export { makeStyles };

//export lodash
export { map, size, isEmpty, isEqual, result, join, isArray };