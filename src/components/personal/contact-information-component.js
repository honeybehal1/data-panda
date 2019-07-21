import { React, Grid, TextField, Typography, useState, Button, postData, concat, join } from '../../utils/general-imports';
import { MessageComponent } from '../../utils/general-components';
import { isValidInput } from '../../utils/general-utils';
import { INPUT_TYPE } from '../../utils/constants';

const {
  SECONDARY_PHONE_NUMBER, SECONDARY_EMAIL_ID,
  PRIMARY_EMAIL_ID,
  PRIMARY_PHONE_NUMBER
} = INPUT_TYPE;



export default function ContactInformation() {
  const classes = {};

  const [userData, setUserData] = useState({});

  const _handleChange = (data) => {
    let { type, value } = data;
    value = value.currentTarget.value;
    setUserData({ ...userData, [type]: value });
  }

  const isValid = () => {
    let isFormValid = true;
    let errorMessage = [];
    if (!isValidInput(userData[PRIMARY_EMAIL_ID], 'email').isValid || (!isValidInput([SECONDARY_EMAIL_ID], 'email').isValid)) {
      isFormValid = false;
      errorMessage = concat(errorMessage, isValidInput(userData[PRIMARY_EMAIL_ID], 'email').errorMessage);
    }
    // if (!isValidInput(userData[PRIMARY_PHONE_NUMBER], 'phone').isValid || (!isValidInput(userData[SECONDARY_PHONE_NUMBER], 'phone').isValid)) {
    //   isFormValid = false;
    //   errorMessage = concat(errorMessage, isValidInput('phone').errorMessage);
    // }
    setUserData({ ...userData, errorMessage: join(errorMessage, ','), isFormValid })
    return isFormValid;

  }

  const _onSave = () => {
    isValid() && postData(userData, 'userContactInformation');
  }

  const _handleClose = () => {
    setUserData({ ...userData, isFormValid: true });
  }

  const { primaryEmailId = '', secondaryEmailId = '', primaryPhoneNumber = '', secondaryPhoneNumber = '', errorMessage = '', isFormValid = true } = userData;
  return (
    <Grid direction="row" container item xs={12} spacing={2} >
      <Grid direction="row" container item xs={12}>
        <Typography >Contact Information</Typography>
      </Grid>
      {!isFormValid ? (<MessageComponent props={{ message: `${errorMessage}`, variant: 'error', handleClose: _handleClose }} />) : ''}
      <Grid direction="row" item xs={3}>
        <TextField label="Email" margin="normal" fullWidth value={primaryEmailId} onChange={value => {
          _handleChange({ type: PRIMARY_EMAIL_ID, value })
        }} />
      </Grid>
      <Grid direction="row" item xs={3}>
        <TextField label="Secondary Email" margin="normal" value={secondaryEmailId} fullWidth onChange={value => {
          _handleChange({ type: SECONDARY_EMAIL_ID, value })
        }} />
      </Grid>
      <Grid direction="row" item xs={3}>
        <TextField label="Phone Number" margin="normal" fullWidth value={primaryPhoneNumber} onChange={value => {
          _handleChange({ type: PRIMARY_PHONE_NUMBER, value })
        }} />
      </Grid>
      <Grid direction="row" item xs={3}>
        <TextField label="Secondary Number" value={secondaryPhoneNumber} margin="normal" fullWidth onChange={value => {
          _handleChange({ type: SECONDARY_PHONE_NUMBER, value })
        }} />
      </Grid>
      <Grid>
        <Button variant="contained" color="primary" onClick={() => _onSave()} className={classes.button}>
          Save
      </Button>
      </Grid>
    </Grid>)

}

