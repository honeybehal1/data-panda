import { React, Grid, TextField, Typography, makeStyles } from '../../utils/general-imports';
import GeoLocationSuggestions from './geo-location-component';

class AddressComponent extends React.Component {
    handleChange = (event) => {

    }
    componentWillMount() {

        const useStyles = makeStyles(theme => ({
            root: {
                display: 'flex',
            },
            formControl: {
                margin: theme.spacing(3),
            },
            group: {
                margin: theme.spacing(1, 0),
            },
        }));
        this.setState({});
    }

    render() {
        const { classes, setValue, value } = this.state;
        return (
            <Grid direction="row" container item xs={12} spacing={1} >
                <Grid direction="row" container item xs={12} style={{ padding: 0 }}>
                    <Typography>Permanent Address</Typography>
                </Grid>
                <Grid direction="row" item xs={3}>
                    <TextField label="Flat/ House no. " margin="normal" fullWidth />
                </Grid>
                <Grid direction="row" item xs={3}>
                    <TextField label="Street Number" margin="normal" fullWidth />
                </Grid>
                <Grid direction="row" item xs={3}>
                    <TextField label="Block" margin="normal" fullWidth />
                </Grid>
                <Grid direction="row" item xs={3}>
                    <TextField label="Villag/Area" margin="normal" fullWidth />
                </Grid>

                <GeoLocationSuggestions />
                <Grid direction="row" item xs={3}>
                    <TextField label="Pincode" margin="normal" fullWidth />
                </Grid>
            </Grid>
        )
    }
}

export default AddressComponent;
