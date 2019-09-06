import { React, postData, FormControl, FormLabel, useState } from '../../utils/general-imports';
import { INPUT_TYPE } from '../../utils/constants';
import { Container, Col, Row, Form, Button, ButtonGroup } from 'react-bootstrap';
const {
  FIRST_NAME,
  MIDDLE_NAME,
  LAST_NAME,
  DATE_OF_BIRTH,
  GENDER,
  NATIONALITY
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

    nationality = '', } = userData;


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
              <Button>Save</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </div>


      {/* <Box p='1rem'>
        <Grid container item sm={12}>
          <Typography variant="h5">Personal Information</Typography>
        </Grid>


        <Grid direction="row" container item sm={12} alignItems="flex-start" spacing={2}>

          
          <Grid item sm={8}>
        

          <Grid direction="row" item sm={12}>
            <Grid item sm={3}>Middle Name</Grid>

          </Grid>
          <Grid direction="row" item sm={12}>
            <Grid item sm={3}>Last Name</Grid>
            
          </Grid>
          <Grid direction="row" item sm={12}>
            <Grid item sm={3}>Date of Birth</Grid>
         

          </Grid>

          <Grid item sm={12}>
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
          <Grid direction="row" item sm={12}>
            <Grid item sm={3}> Nationality</Grid>
            <Grid item sm={8}>
              <TextField label="Nationality" margin="normal" fullWidth value={nationality} onChange={value => {
                _handleChange({ type: NATIONALITY, value })
              }} /></Grid>

          </Grid>

        </Grid>
        <Grid direction="row" item sm={12}><Grid direction="row" item sm={3}></Grid>
          <Grid direction="row" item sm={8}></Grid>
          <Button variant="contained" color="primary" onClick={_onSave} className={classes.button}>
            Save
      </Button>
        </Grid>
      </Box> */}
    </>
  )

}
