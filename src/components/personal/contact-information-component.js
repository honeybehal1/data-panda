import { React, Grid, TextField, Typography, useState, postData, concat, join } from '../../utils/general-imports';
import { MessageComponent } from '../../utils/general-components';
import { isValidInput } from '../../utils/general-utils';
import { INPUT_TYPE } from '../../utils/constants';
import { Container, Col, Row, Form, Button, ButtonGroup } from 'react-bootstrap';

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
    if (!isValidInput(userData[PRIMARY_EMAIL_ID], 'email').isValid || (!isValidInput(userData[SECONDARY_EMAIL_ID], 'email').isValid)) {
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
    <div className="dp-form-container">
      <h2 className="dp-section-header">Contact Information</h2>
      {!isFormValid ? (<MessageComponent props={{ message: `${errorMessage}`, variant: 'error', handleClose: _handleClose }} />) : ''}
      <Row>
        <Col sm={3}> <Form.Label>Email</Form.Label></Col>
        <Col sm={8}><Form.Control type="text" value={primaryEmailId} onChange={value => {
          _handleChange({ type: PRIMARY_EMAIL_ID, value })
        }} /></Col>
      </Row>
      <Row>
        <Col sm={3}> <Form.Label>Secondary Email</Form.Label></Col>
        <Col sm={8}><Form.Control type="text" value={secondaryEmailId} onChange={value => {
          _handleChange({ type: SECONDARY_EMAIL_ID, value })
        }} /></Col>
      </Row>
      <Row>
        <Col sm={3}> <Form.Label>Primary Phone Number</Form.Label></Col>
        <Col sm={8}><Form.Control type="text" value={primaryPhoneNumber} onChange={value => {
          _handleChange({ type: PRIMARY_PHONE_NUMBER, value })
        }} /></Col>
      </Row>
      <Row>
        <Col sm={3}> <Form.Label>Primary Phone Number</Form.Label></Col>
        <Col sm={8}><Form.Control type="text" value={secondaryPhoneNumber} onChange={value => {
          _handleChange({ type: SECONDARY_PHONE_NUMBER, value })
        }} /></Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Button variant="contained" color="primary" onClick={() => _onSave()} className={classes.button}>
            Save
      </Button>
        </Col>
      </Row>
    </div>
  )

}

