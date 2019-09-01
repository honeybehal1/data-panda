import { React, Grid, TextField, makeStyles, withRouter, connect, useReducer, useState, useEffect, result, map } from '../../utils/general-imports';

import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

import { getGeoLocation } from './connect/geo-location-action';
import geoLocation from './connect/geo-location-reducer';
import { getGeoLocationList } from './connect/geo-location-action';
let InitilaData = {
    listOfCountries: [],
    listOfState: [],
    listOfCities: []
};


const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' }
];

function renderInputComponent(inputProps) {

    const { classes, inputRef = () => { }, ref, ...other } = inputProps;

    return (
        <TextField
            fullWidth
            InputProps={{
                inputRef: node => {
                    ref(node);
                    inputRef(node);
                },
                classes: {
                    input: classes.input,
                },
            }}
            {...other}
        />
    );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {parts.map(part => (
                    <span key={part.text} style={{ fontWeight: part.highlight ? 500 : 400 }}>
                        {part.text}
                    </span>
                ))}
            </div>
        </MenuItem>
    );
}

function getSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
        ? []
        : suggestions.filter(suggestion => {
            const keep =
                count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

            if (keep) {
                count += 1;
            }
            return keep;
        });
}

function getSuggestionValue(suggestion) {
    return suggestion.label;
}

const useStyles = makeStyles(theme => ({
    root: {
        height: 250,
        flexGrow: 1,
    },
    container: {
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    divider: {
        height: theme.spacing(2),
    },
}));

function GeoLocationSuggestions(props) {
    const classes = useStyles();
    const initialState = {
        state: [],
        countries: [],
        city: [],
        countryValue: '',
        state: '',
        city: ''
    }
    const [countryStateCity, changeCountryStateCity] = useState(initialState);

    useEffect(() => {
        props.getGeoLocationList({ type: 'countries', data: 'countries' }).then(countries => {

        });
    }, []);

    const handleChange = value => {
        let { data, type } = value;

        changeCountryStateCity({ ...countryStateCity, [type]: data });
        if (type === 'country') {
            data = countryStateCity.country;
        }
        else if (type === 'state') {
            data = countryStateCity.city;
        }
        // props.getGeoLocationList({ type, data }).then(geoLocation => {

        // });
    };

    const listOfCountries = result(props.listOfCountries, 'toJS', []);
    const { countryValue, state, city } = countryStateCity;

    return (
        <>
            <Grid direction="row" item xs={3} style={{ marginTop: '1rem' }}>
                <select value={countryValue} onChange={data => handleChange({ type: 'country', data })}>
                    {map(listOfCountries, countryList => {
                        const { value = '', label = '' } = countryList;
                        return <option value={value}>{label}</option>
                    })}
                </select>
            </Grid>
            <Grid direction="row" item xs={3} style={{ marginTop: '1rem' }}>
                <select value={state} onChange={data => handleChange({ type: 'state', data })}>
                    {map(listOfCountries, stateList => {
                        const { value = '', label = '' } = stateList;
                        return <option value={value}>{label}</option>
                    })}
                </select>

            </Grid>
            <Grid direction="row" item xs={3} style={{ marginTop: '1rem' }}>

                <select value={city} onChange={data => handleChange({ type: 'city',  data })}>
                    {map(listOfCountries, cityList => {
                        const { value = '', label = '' } = cityList;
                        return <option value={value}>{label}</option>
                    })}
                </select>
            </Grid>
        </>


    );
}

const mapStateToProps = (state) => ({
    listOfCountries: state.geoLocation.get('listOfCountries'),
    listOfState: state.geoLocation.get('listOfState'),
    listOfCities: state.geoLocation.get('listOfCities')
});

const mapDispatchToProps = (dispatch) => ({
    getGeoLocationList: (data, type) => getGeoLocationList(dispatch, data, type)
});


export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(GeoLocationSuggestions));
