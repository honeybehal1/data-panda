import {React ,Grid,TextField, Box, Divider, Typography, FormControlLabel,RadioGroup, Radio, makeStyles} from '../../utils/general-imports';





class ContactInformation extends React.Component {
  handleChange=(event)=>{

  }

  componentWillMount(){
    
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
  
 render(){
  const{ classes,setValue, value} = this.state;
  return(     
    <Grid direction="row" container item xs={12} spacing={2}>
        <Grid  direction="row" container item xs={12}>
            <Typography >Contact Information</Typography>
        </Grid>      
        <Grid direction="row"  item xs={3}> 
            <TextField label="Email" margin="normal" fullWidth/>
        </Grid>
        <Grid direction="row"  item xs={3}> 
            <TextField label="Secondary Email" margin="normal" fullWidth/>
        </Grid>
        <Grid direction="row"  item xs={3}> 
            <TextField label="Phone Number" margin="normal" fullWidth/>
        </Grid>
        <Grid direction="row"  item xs={3}> 
            <TextField label="Secondary Number" margin="normal" fullWidth/>
        </Grid>
    </Grid>   
    )   
 }
}

export default ContactInformation;
