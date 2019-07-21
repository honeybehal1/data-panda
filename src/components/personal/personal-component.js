import { React, Grid, TextField, Box, Typography, FormControlLabel, RadioGroup, Button, Radio, makeStyles,postData, FormControl, FormLabel, useState } from '../../utils/general-imports';
import { INPUT_TYPE } from '../../utils/constants';
const {
  FIRST_NAME,
  MIDDLE_NAME,
  LAST_NAME,
  DATE_OF_BIRTH,
  GENDER,
  CITY_OF_BIRTH,
  STATE_OF_BIRTH,
  COUNTRY_OF_BIRTH,
  NATIONALITY,
  DIFFERENTLY_ABLED
} = INPUT_TYPE;
export default function Personal() {

  const classes = {};

  const [userData, setUserData] = useState({})
  const _handleChange = (data) => {
    let { type, value } = data;
    value = value.currentTarget.value;
    setUserData({ ...userData, [type]: value });
  }
  const _onSave = () => {
    postData(userData, 'userBasicInformation');
  }

  const { firstName = '',
    middleName = '',
    lastName = '',
    dateOfBirth = '',
    cityOfBirth = '',
    stateOfBirth = '',
    countryOfBirth = '',
    nationality = '', } = userData;


  return (
    <Box p='1rem'>
      <Grid direction="row" container item xs={12}>
        <Typography variant="h5">Personal Information</Typography>
      </Grid>
      <Grid direction="row" container item xs={12} alignItems="flex-start" spacing={2}>
        <Grid direction="row" item xs={4}>
          <TextField label="Name" margin="normal" fullWidth value={firstName} onChange={value => {
            _handleChange({ type: FIRST_NAME, value })
          }} />
        </Grid>
        <Grid direction="row" item xs={4}>
          <TextField label="Middle Name" margin="normal" value={middleName} fullWidth onChange={value => {
            _handleChange({ type: MIDDLE_NAME, value })
          }} />
        </Grid>
        <Grid direction="row" item xs={4}>
          <TextField label="Last Name" margin="normal" value={lastName} fullWidth onChange={value => {
            _handleChange({ type: LAST_NAME, value })
          }} />
        </Grid>
        <Grid direction="row" item xs={3}>
          <TextField type="date" margin="normal" value={dateOfBirth} fullWidth onChange={value => {
            _handleChange({ type: DATE_OF_BIRTH, value })
          }} />
        </Grid>

        <Grid>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="Gender"
              name="gender1"
              className={classes.group}
              onChange={(value) => _handleChange({ type: GENDER, value })}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

        </Grid>
        <Grid direction="row" item xs={3}>
          <TextField label="Nationality" margin="normal" fullWidth value={nationality} onChange={value => {
            _handleChange({ type: NATIONALITY, value })
          }} />
        </Grid>

      </Grid>
      <Grid direction="row" item xs={12}>
        <Button variant="contained" color="primary" onClick={_onSave} className={classes.button}>
          Save
      </Button>
      </Grid>
    </Box>)

}
