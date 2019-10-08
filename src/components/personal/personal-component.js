import { React, postData, useState, useEffect, connect, withRouter } from '../../utils/general-imports';
import { INPUT_TYPE } from '../../utils/constants';
import { Container, Col, Row, Form, Button, ButtonGroup } from 'react-bootstrap';
import { getPersonalData, savebasicPersonalData } from "./personal-actions";
const {
  FIRST_NAME,
  MIDDLE_NAME,
  LAST_NAME,
  DATE_OF_BIRTH,
  GENDER,
  NATIONALITY
} = INPUT_TYPE;

function Personal(props) {

  const classes = {};

  const [userData, setUserData] = useState({})
  const _handleChange = (data) => {
    let { type, value } = data;
    value = value.currentTarget.value;
    setUserData({ ...userData, [type]: value });
  }

  useEffect(() => {
    props.getPersonalData('userBasicInformation/get')
    return () => {

    };
  }, []);

  const saveBasicInformation = () => {
    props.saveBasicInformation(userData)
  }

  const { firstName = '',
    middleName = '',
    lastName = '',
    dateOfBirth = ''

  } = userData;


  return (
    <>
      <div className="dp-form-container">
        <h2 className="dp-section-header">Basic Information</h2>
        <Row>
          <Col sm={3}> <Form.Label>First Name</Form.Label></Col>
          <Col sm={8}><Form.Control type="text" value={firstName} onChange={value => {
            _handleChange({ type: FIRST_NAME, value })
          }} /></Col>
        </Row>
        <Row>
          <Col sm={3}> <Form.Label>Middle Name</Form.Label></Col>
          <Col sm={8}><Form.Control type="text" value={middleName} fullWidth onChange={value => {
            _handleChange({ type: MIDDLE_NAME, value })
          }} /></Col>
        </Row>
        <Row>
          <Col sm={3}> <Form.Label>Last Name</Form.Label></Col>
          <Col sm={8}><Form.Control type="email" value={lastName} fullWidth onChange={value => {
            _handleChange({ type: LAST_NAME, value })
          }} /></Col>
        </Row>
        <Row>
          <Col sm={3}> <Form.Label>Date of Birth</Form.Label></Col>
          <Col sm={8}><Form.Control type="date" value={dateOfBirth} fullWidth onChange={value => {
            _handleChange({ type: DATE_OF_BIRTH, value })
          }} /></Col>
        </Row>
        <Row>
          <Col sm={3}> <Form.Check.Label>Gender</Form.Check.Label></Col>
          <Col sm={8}>
            <Form.Check type="radio" >
              <Form.Check.Input type="radio" />
              <Form.Check.Label>Male</Form.Check.Label>
              <Form.Check.Input type="radio" />
              <Form.Check.Label>Female</Form.Check.Label>
              <Form.Check.Input type="radio" />
              <Form.Check.Label>Other</Form.Check.Label>
            </Form.Check>
          </Col>
        </Row>
        <Row>
          <Col sm={3}> <Form.Label>Date of Birth</Form.Label></Col>
          <Col sm={8}><Form.Control type="date" placeholder="name@example.com" value={dateOfBirth} fullWidth onChange={value => {
            _handleChange({ type: DATE_OF_BIRTH, value })
          }} /></Col>
        </Row>
        <Row>
          <Col sm={12}>
            <ButtonGroup aria-label="Basic example">

              <Button variant="secondary">Cancel</Button>
              <Button onClick={saveBasicInformation}>Save</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>

    </>
  )

}

const mapStateToProps = (state) => ({
  isUserLoggedIn: state.signUpReducer.get('isUserLoggedIn')
});

const mapDispatchToProps = (dispatch) => ({
  getPersonalData: data => getPersonalData(dispatch, data),
  saveBasicInformation: data => savebasicPersonalData(dispatch, data)
});


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Personal));

