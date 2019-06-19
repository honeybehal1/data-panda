import { React, Grid, TextField, Box, Divider, Typography, FormControlLabel, RadioGroup, Radio, makeStyles } from '../../utils/general-imports';



import ContactInformation from './contact-information-component';
import AddressComponent from '../../components/address/address-component'

class Personal extends React.Component {
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
      <Box p='1rem'>
        <Grid direction="row" container item xs={12}>
          <Typography variant="h5">Personal Information</Typography>
        </Grid>
        <Grid direction="row" container item xs={12} alignItems="flex-start" spacing={2}>
          <Grid direction="row" item xs={4}>
            <TextField label="Name" margin="normal" fullWidth />
          </Grid>
          <Grid direction="row" item xs={4}>
            <TextField label="Middle Name" margin="normal" fullWidth />
          </Grid>
          <Grid direction="row" item xs={4}>
            <TextField label="Last Name" margin="normal" fullWidth />
          </Grid>
          <Grid direction="row" item xs={3}>
            <TextField label="Date Of Birth" margin="normal" fullWidth />
          </Grid>
          <Grid direction="row" container item xs={12} spacing={2}>
            <ContactInformation />
          </Grid>
          <Grid direction="row" container item xs={12} spacing={2}>
            <AddressComponent />
          </Grid>
        </Grid>
      </Box>)

  }
}

export default Personal;
