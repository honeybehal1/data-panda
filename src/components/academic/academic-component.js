import {React ,Grid,TextField} from '../../utils/general-imports';

class Academic extends React.Component {
 render(){

  return(
  <Grid  container >
     <Grid direction="row"  item xs={5}> 
     <TextField
       
        label="Education"
        
       
        helperText="Some important text"
        margin="normal"
      /></Grid>
     <Grid direction="row" container item xs={5}></Grid>
    
    </Grid>)
   
 }
}

export default Academic;
