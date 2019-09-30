import { React, useState } from '../../utils/general-imports';
import { Row, Col, Form } from 'react-bootstrap';
import {INPUT_TYPE} from '../../utils/constants';

const { 
    POSITION,
    COMPANY,
    LOCATION,
    START_DATE,
    HEADLINE,
    DESCRIPTION,
    EMPLOYEE_ID,
    MANAGER_CONTACT_NO,
    CTC,
    JOINING_POSITION,
    HR_EMAIL,
    SALARY_SLIP,
    JOINING_LETTER,
    HIKE_LETTER
 } = INPUT_TYPE;

export default function Experience() {

    const [ userData, setUserData ] = useState({});

    const {
        position = '',
        company = '',  
        location = '',
        startDate = '',
        headline = '',
        description = '',
        employeeId = '',
        managerContactNo = '',
        ctc = '',
        joiningPosition = '',
        hrEmail = '',
        salarySlip = '',
        joiningLetter = '',
        hikeLetter = ''} = userData;

    const _handleChange = data => {
        let {type, value} = data;
        value = value.currentTarget.value;
        setUserData({...userData, [type]: value });
    }
    return(
        <div className="dp-form-container">
            <h2 className="dp-section-header">
                Experience
            </h2>
            <Row>
                <Col sm={3}>
                    <Form.Label>Company</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control 
                        type="text" 
                        value={company}
                        onChange={value => {_handleChange({type: COMPANY, value})}}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Position</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control 
                        type="text" 
                        value={position}
                        onChange={value => {_handleChange({type: POSITION, value})}}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Joining Position</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control 
                        type="text" 
                        value={joiningPosition}
                        onChange={value => {_handleChange({type: JOINING_POSITION, value})}}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Location</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        value={location}
                        onChange={value => _handleChange({type: LOCATION, value})}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Start Date</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="date"
                        value={startDate}
                        onChange={value => _handleChange({type: START_DATE, value})}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                <Form.Label>Employee Id</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        value={employeeId}
                        onChange={value => _handleChange({type: EMPLOYEE_ID, value})}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                <Form.Label>Manager Contact No.</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        value={managerContactNo}
                        onChange={value => _handleChange({type: MANAGER_CONTACT_NO, value})}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                <Form.Label>HR Email</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="email"
                        value={hrEmail}
                        onChange={value => _handleChange({type: HR_EMAIL, value})}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                <Form.Label>CTC</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        value={ctc}
                        onChange={value => _handleChange({type: CTC, value})}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                <Form.Label>Salary Slip</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="file"
                        multiple
                        value={salarySlip}
                        onChange={value => _handleChange({type: SALARY_SLIP, value})}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                <Form.Label>Joining Letter</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="file"
                        value={joiningLetter}
                        onChange={value => _handleChange({type: JOINING_LETTER, value})}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                <Form.Label>Hike Letter</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="file"
                        value={hikeLetter}
                        onChange={value => _handleChange({type: HIKE_LETTER, value})}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <Form.Label>Headline</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        type="text"
                        value={headline}
                        onChange={value => _handleChange({type: HEADLINE, value})}></Form.Control>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                <Form.Label>Description</Form.Label>
                </Col>
                <Col sm={8}>
                    <Form.Control
                        as="textarea" rows="3"
                        value={description}
                        onChange={value => _handleChange({type: DESCRIPTION, value})}></Form.Control>
                </Col>
            </Row>
        </div>
    );
}